'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, AdaptiveDpr, Preload } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Couleurs du thème
const TECH_ACCENT = new THREE.Color('#22d3ee');
const TECH_BLACK = '#050505';

// Shader pour gradient conic (disque d'accrétion)
const conicGradientShader = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uOpacity;
    uniform float uStartAngle;
    uniform float uSpread;
    uniform vec3 uColor;
    uniform float uBlur;
    varying vec2 vUv;

    void main() {
      vec2 center = vUv - 0.5;
      float angle = atan(center.y, center.x);
      float dist = length(center);

      // Normaliser l'angle de -PI à PI vers 0 à 1
      float normalizedAngle = (angle + 3.14159) / (2.0 * 3.14159);

      // Créer le gradient conic avec spread
      float gradientStart = mod(uStartAngle / (2.0 * 3.14159), 1.0);
      float diff = mod(normalizedAngle - gradientStart + 1.0, 1.0);
      float gradient = smoothstep(0.0, uSpread, diff) * (1.0 - smoothstep(uSpread, uSpread + 0.1, diff));

      // Falloff radial pour le blur
      float radialFalloff = smoothstep(0.5, 0.5 - uBlur, dist);

      // Combiner
      float alpha = gradient * radialFalloff * uOpacity;

      gl_FragColor = vec4(uColor, alpha);
    }
  `,
};

// Composant pour un disque d'accrétion
interface VortexRingProps {
  radius: number;
  opacity: number;
  speed: number;
  blur: number;
  startAngle?: number;
  spread?: number;
  color?: THREE.Color;
  reverse?: boolean;
  reducedMotion: boolean;
}

function VortexRing({
  radius,
  opacity,
  speed,
  blur,
  startAngle = 0,
  spread = 0.4,
  color = TECH_ACCENT,
  reverse = false,
  reducedMotion,
}: VortexRingProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uOpacity: { value: opacity },
      uStartAngle: { value: startAngle },
      uSpread: { value: spread },
      uColor: { value: color },
      uBlur: { value: blur },
    }),
    [opacity, startAngle, spread, color, blur]
  );

  useFrame((_, delta) => {
    if (reducedMotion) return;
    if (meshRef.current) {
      const direction = reverse ? -1 : 1;
      meshRef.current.rotation.z += delta * speed * direction;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[radius * 2, radius * 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={conicGradientShader.vertexShader}
        fragmentShader={conicGradientShader.fragmentShader}
        uniforms={uniforms}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

// Composant pour le trou noir central
function BlackHole({ radius }: { radius: number }) {
  return (
    <mesh position={[0, 0, 0.1]}>
      <circleGeometry args={[radius, 64]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
}

// Composant pour la trainée de flare diagonale
function FlareTrail({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (reducedMotion) return;
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial;
      // Légère pulsation
      mat.opacity = 0.15 + Math.sin(Date.now() * 0.001) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -0.1]}>
      <planeGeometry args={[20, 0.02]} />
      <meshBasicMaterial
        color={TECH_ACCENT}
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

// Composant principal de la scène
interface VortexSceneProps {
  reducedMotion: boolean;
  isMobile: boolean;
}

function VortexScene({ reducedMotion, isMobile }: VortexSceneProps) {
  const { invalidate } = useThree();

  // Forcer le re-render pour les animations
  useFrame(() => {
    if (!reducedMotion) {
      invalidate();
    }
  });

  return (
    <>
      {/* Fond */}
      <color attach="background" args={[TECH_BLACK]} />

      {/* Étoiles - réduites sur mobile */}
      <Stars
        radius={100}
        depth={50}
        count={isMobile ? 1500 : 3000}
        factor={3}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.5}
      />

      {/* Groupe du vortex centré */}
      <group position={[0, 0, 0]}>
        {/* Disque externe - Poussière diffuse */}
        <VortexRing
          radius={6}
          opacity={0.08}
          speed={0.1}
          blur={0.3}
          spread={0.35}
          reducedMotion={reducedMotion}
        />

        {/* Disque intermédiaire - La Lueur (contre-rotation) */}
        <VortexRing
          radius={4.8}
          opacity={0.15}
          speed={0.14}
          blur={0.25}
          spread={0.45}
          reverse
          reducedMotion={reducedMotion}
        />

        {/* Horizon des événements interne */}
        <VortexRing
          radius={2.4}
          opacity={0.4}
          speed={0.2}
          blur={0.15}
          spread={0.5}
          color={new THREE.Color('#ffffff')}
          reducedMotion={reducedMotion}
        />

        {/* Bord interne en contre-rotation */}
        <VortexRing
          radius={2.5}
          opacity={0.25}
          speed={0.18}
          blur={0.12}
          spread={0.3}
          startAngle={Math.PI}
          reverse
          reducedMotion={reducedMotion}
        />

        {/* Trou noir central */}
        <BlackHole radius={1.5} />

        {/* Trainée de flare diagonale */}
        <FlareTrail reducedMotion={reducedMotion} />
      </group>

      {/* Optimisations */}
      <AdaptiveDpr pixelated />
      <Preload all />
    </>
  );
}

// Hook pour détecter prefers-reduced-motion
function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
}

// Hook pour détecter mobile
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768
    );
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
          window.innerWidth < 768
      );
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Composant exporté
export default function CosmicBackground() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-tech-black pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        frameloop={reducedMotion ? 'demand' : 'always'}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          alpha: false,
        }}
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <VortexScene reducedMotion={reducedMotion} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
