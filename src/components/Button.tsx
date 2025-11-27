import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-heading font-bold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group",
          {
            "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl border-2 border-primary/30 hover:border-primary/50": variant === "primary",
            "bg-gradient-card text-foreground border-2 border-primary/30 hover:border-primary/50 shadow-medium": variant === "secondary",
            "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg": size === "default",
            "px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
