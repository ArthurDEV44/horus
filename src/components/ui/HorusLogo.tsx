import React from 'react';

type LogoSize = 'sm' | 'md' | 'lg';

interface HorusLogoProps {
  size?: LogoSize;
  showText?: boolean;
  className?: string;
}

const sizeConfig: Record<LogoSize, { icon: string; text: string }> = {
  sm: { icon: 'w-4 h-4', text: 'text-sm' },
  md: { icon: 'w-5 h-5', text: 'text-base' },
  lg: { icon: 'w-6 h-6', text: 'text-lg' },
};

const HorusLogo: React.FC<HorusLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const { icon, text } = sizeConfig[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`${icon} bg-tech-accent/80 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
        aria-hidden="true"
      />
      {showText && (
        <span className={`font-semibold tracking-tight ${text} text-white`}>
          Horus
        </span>
      )}
    </div>
  );
};

export default HorusLogo;
