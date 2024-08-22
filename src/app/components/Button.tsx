import React from 'react'

type ButtonVariant = "primary" | "secondary"
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href: string,
    variant?: ButtonVariant; 
    className?: string; 
}

const BUTTON_VARIANT_MAPPER: Record<ButtonVariant, string> = {
  "primary": "bg-btnPrimary text-white",
  "secondary": "bg-transparent"
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', href, className }) => {
    // const variantStyles = variant === 'primary' ? 'bg-btnPrimary text-white' : 'bg-transparent';
    const combinedStyles = `${BUTTON_VARIANT_MAPPER[variant]} ${className}`
  return (
    <a href={href} className={combinedStyles}>
      {children}
    </a>
  )
}

export default Button
