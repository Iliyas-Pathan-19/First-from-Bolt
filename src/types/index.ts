export interface BusinessIdea {
  id: string;
  title: string;
  description: string;
  industry: string;
  targetAudience: string;
  createdAt: Date;
}

export interface GeneratedName {
  id: string;
  name: string;
  domain: string;
  available: boolean;
  description: string;
  category: 'creative' | 'descriptive' | 'abstract' | 'compound';
}

export interface StartupJourneyStep {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  tools: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  currentStep: number;
  ideas: BusinessIdea[];
}