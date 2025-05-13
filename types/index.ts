// Type declarations for missing modules

// react-hook-form
declare module 'react-hook-form' {
  export function useForm(config?: any): {
    handleSubmit: (onSubmit: (data: any) => void) => (e: any) => void;
    control: any;
    reset: () => void;
    formState: any;
  };
}

// Note: Module declarations for shadcn/ui components have been removed
// as they conflict with the actual implementations

// Note: The sonner toast library declaration has been commented out
// If you need to use sonner, please make sure it's installed first
// and then uncomment this declaration
/*
declare module 'sonner' {
  export const toast: {
    success: (message: string, options?: any) => void;
    error: (message: string, options?: any) => void;
    info: (message: string, options?: any) => void;
    warning: (message: string, options?: any) => void;
  };
}
*/

// Define and export the Service and ServiceIconName types
export type Service = {
  id: string;
  name: string;
  description: string;
  icon: ServiceIconName;
  hash: string;
  title: string;
  features: string[]; // Add features property
  stat1?: string; // Optional statistics
  stat1Label?: string;
  stat2?: string;
  stat2Label?: string;
  stat3?: string;
  stat3Label?: string;
  bgColorClass?: string; // Optional background color class
  textColorClass?: string; // Optional text color class
};

export type ServiceIconName =
  | 'Target'
  | 'Users'
  | 'Layers'
  | 'Zap'
  | 'TrendingUp'
  | 'Cog'
  | 'Award'
  | 'TrendingDown'
  | 'Check'
  | 'Palette'
  | 'ShieldCheck'
  | 'BarChart'
  | 'Clock';