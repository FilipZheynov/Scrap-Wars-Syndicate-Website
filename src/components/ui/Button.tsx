import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";

type ButtonProps =
  | ({
      to: string;
      variant?: ButtonVariant;
      className?: string;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      to?: never;
      variant?: ButtonVariant;
      className?: string;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>);

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex rounded-lg px-4 py-2 text-wrap w-max font-medium transition";

  const variants: Record<ButtonVariant, string> = {
    primary: "text-base bg-[var(--primary-base)] text-[var(--text-primary)] hover:bg-[var(--primary-dark)] active:ring-2 active:ring-[var(--primary-accent)]",
    secondary: "text-sm bg-[var(--bg-tertiary)] outline-1 outline-[var(--primary-base)] text-[var(--text-primary)] hover:bg-[var(--secondary-dark)] active:outline-[var(--primary-light)] active:bg-[var(--bg-secondary)]",
    outline: "border border-[var(--border-base)] hover:bg-[var(--neutral-100)] hover:opacity-75 hover:text-[var(--text-inverse)] hover:border-[var(--border-dark)] active:bg-[var(--neutral-500)] active:text-[var(--text-primary)]",
    text: "text-[var(--text-primary)] hover:text-[var(--primary-light)] active:text-[var(--primary-base)]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
