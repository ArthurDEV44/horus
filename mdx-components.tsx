import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

// Semantic wrapper components for agent documentation
// These tags are used in MDX files to semantically mark different sections
function SemanticSection({ children }: { children?: ReactNode }) {
  return <div className="my-4">{children}</div>;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Custom semantic tags used in agent documentation
    // These use PascalCase to be recognized as React components by MDX
    ContextQuestions: SemanticSection,
    PatternSelection: SemanticSection,
    AnalysisChecklist: SemanticSection,
    CompoundAnalysis: SemanticSection,
    HookExtraction: SemanticSection,
    FactoryNeed: SemanticSection,
    Actions: SemanticSection,
    Output: SemanticSection,
    Resolution: SemanticSection,
    Pattern: SemanticSection,
    Diagnostic: SemanticSection,
    Validation: SemanticSection,
    Triggers: SemanticSection,
    Standards: SemanticSection,
    Resources: SemanticSection,
    Research: SemanticSection,
    References: SemanticSection,
    Patterns: SemanticSection,
    Order: SemanticSection,
    Intellisense: SemanticSection,
    Integrations: SemanticSection,
    Implications: SemanticSection,
    Implementation: SemanticSection,
    Expertise: SemanticSection,
    Devtools: SemanticSection,
    Contrast: SemanticSection,
    // Architecture agents semantic tags
    ActivationTriggers: SemanticSection,
    AnalysisTools: SemanticSection,
    AuditPrep: SemanticSection,
    AuditReport: SemanticSection,
    BarrelInventory: SemanticSection,
    ChainAnalysis: SemanticSection,
    CohesionAnalysis: SemanticSection,
    CoreWorkflow: SemanticSection,
    CouplingMetrics: SemanticSection,
    CycleAnalysis: SemanticSection,
    DependencyMap: SemanticSection,
    DiagnosticCategories: SemanticSection,
    DiagnosticContext: SemanticSection,
    DiagnosticReport: SemanticSection,
    DomainAnalysis: SemanticSection,
    DrillingMap: SemanticSection,
    ErrorAnalysis: SemanticSection,
    ExpertIdentity: SemanticSection,
    ExtractionPlan: SemanticSection,
    InterfaceAnalysis: SemanticSection,
    PerformanceDiagnosis: SemanticSection,
    ProposedStructure: SemanticSection,
    QualityDirectives: SemanticSection,
    RefactoringPlan: SemanticSection,
    ResolutionApproach: SemanticSection,
    ResolutionStrategies: SemanticSection,
    RoleInterfaces: SemanticSection,
    SolidChecklist: SemanticSection,
    SolidReviewChecklist: SemanticSection,
    StateAudit: SemanticSection,
    StateCategories: SemanticSection,
    Constraints: SemanticSection,
    Considerations: SemanticSection,
    Tools: SemanticSection,
    Thresholds: SemanticSection,
    Rules: SemanticSection,
    Analysis: SemanticSection,
    Decisions: SemanticSection,
    Steps: SemanticSection,
    Boundaries: SemanticSection,
    Exclusions: SemanticSection,
    Categories: SemanticSection,
    Evaluation: SemanticSection,
    Bottlenecks: SemanticSection,
    Framework: SemanticSection,
    Phases: SemanticSection,
    Symptoms: SemanticSection,
    Variables: SemanticSection,
    Causes: SemanticSection,
    ...components,
  };
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
