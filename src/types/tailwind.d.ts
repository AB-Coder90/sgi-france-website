import { Config } from 'tailwindcss';

declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

// Add Tailwind CSS directives to global CSS type definitions
declare module 'csstype' {
  interface AtRules {
    tailwind: Config;
    layer: Config;
    apply: Config;
  }
}

declare module 'tailwindcss/types/config' {
  interface CustomTheme {
    extend: Config['theme'] & {
      colors: Record<string, string>;
      fontFamily: Record<string, string[]>;
      animation: Record<string, string>;
    };
  }
}

declare module "@material-tailwind/react" {
  import type { ComponentProps } from "react";

  export interface ButtonProps extends ComponentProps<"button"> {
    variant?: "text" | "filled" | "outlined" | "gradient";
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
    fullWidth?: boolean;
    ripple?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export interface CardProps extends ComponentProps<"div"> {
    variant?: "filled" | "outlined";
    color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
    shadow?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export interface InputProps extends ComponentProps<"input"> {
    variant?: "standard" | "outlined" | "filled";
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
    label?: string;
    error?: boolean;
    success?: boolean;
    className?: string;
  }
}
