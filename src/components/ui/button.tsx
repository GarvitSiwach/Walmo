import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none";

    const variantStyles = {
      primary:
        "bg-primary hover:bg-primary-hover text-white shadow-sm hover:shadow",
      secondary:
        "bg-surface text-foreground hover:bg-surface-secondary border border-border",
      outline:
        "bg-transparent border border-border text-foreground hover:bg-surface-secondary",
      ghost:
        "bg-transparent text-foreground hover:bg-surface-secondary/70",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-full min-h-[36px]",
      md: "text-sm px-5 py-2.5 rounded-full min-h-[44px]",
      lg: "text-base px-6 py-3.5 rounded-full min-h-[50px] font-semibold",
    };

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={combinedClasses}
          aria-label={typeof children === "string" ? children : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
