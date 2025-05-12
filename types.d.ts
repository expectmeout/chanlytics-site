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

// shadcn/ui components
declare module '@/components/ui/form' {
  export const Form: React.FC<any>;
  export const FormControl: React.FC<any>;
  export const FormDescription: React.FC<any>;
  export const FormField: React.FC<any>;
  export const FormItem: React.FC<any>;
  export const FormLabel: React.FC<any>;
  export const FormMessage: React.FC<any>;
}

declare module '@/components/ui/checkbox' {
  export const Checkbox: React.FC<any>;
}

declare module '@/components/ui/select' {
  export const Select: React.FC<any>;
  export const SelectContent: React.FC<any>;
  export const SelectItem: React.FC<any>;
  export const SelectTrigger: React.FC<any>;
  export const SelectValue: React.FC<any>;
}

// sonner toast library
declare module 'sonner' {
  export const toast: {
    success: (message: string, options?: any) => void;
    error: (message: string, options?: any) => void;
    info: (message: string, options?: any) => void;
    warning: (message: string, options?: any) => void;
  };
} 