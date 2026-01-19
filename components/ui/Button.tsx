import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "px-5 py-2 rounded-md text-sm font-medium transition";

  const styles = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary:
      "border border-border text-textPrimary hover:bg-border",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}