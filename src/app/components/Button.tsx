import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href: string,
    variant?: 'primary' | 'secondary'; 
    className?: string; 
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', href, className }) => {
    const variantStyles = variant === 'primary' ? 'bg-btnPrimary text-white' : 'bg-transparent';

    const combinedStyles = `${variantStyles} ${className}`
  return (
    <a href={href} className={combinedStyles}>
      {children}
    </a>
  )
}

export default Button
