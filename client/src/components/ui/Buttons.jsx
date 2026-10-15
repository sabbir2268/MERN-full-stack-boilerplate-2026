/**
 * Reusable button components for the whole website.
 * Every button variant is exported from here and imported where needed.
 */

const base =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: `${base} bg-primary text-primary-foreground hover:bg-primary-hover`,
  secondary:
    `${base} bg-secondary text-secondary-foreground hover:bg-secondary-hover`,
  outline: `${base} border border-input bg-background hover:bg-accent hover:text-accent-foreground`,
  ghost: `${base} hover:bg-accent hover:text-accent-foreground`,
  danger: `${base} bg-destructive text-destructive-foreground hover:bg-destructive/90`,
  success: `${base} bg-green-600 text-white hover:bg-green-700`,
};

export const Button = ({ variant = "primary", className, children, ...props }) => (
  <button className={`${variants[variant]} ${className ?? ""}`} {...props}>
    {children}
  </button>
);
