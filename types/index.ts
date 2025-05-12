import type React from "react";

// Define possible icon names as a union type for better type safety
export type ServiceIconName =
  | "Check"
  | "Briefcase"
  | "HelpCircle"
  | "Users"
  | "Target"
  | "ShoppingCart"
  | "Palette"
  | "ShieldCheck"
  | "Zap"
  | "BarChart"
  | "Layers"
  | "Clock"
  | "TrendingUp"
  | "Cog";

export interface Service {
  icon: ServiceIconName; 
  title: string;
  description: string;
  features: string[];
  bgColorClass?: string;
  textColorClass?: string;
  hash: string;
  // Metrics for service cards
  stat1?: string;
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
}

// Define the structure for FAQ items
export type FAQ = {
  id: string
  question: string
  answer: string | React.ReactNode // Allow string or JSX for answer
  icon: ServiceIconName // Reuse ServiceIconName if icons are similar
}
