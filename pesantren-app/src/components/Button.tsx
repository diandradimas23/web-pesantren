import type { ButtonHTMLAttributes, ReactNode, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'md',
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variantClasses = {
    primary: 'bg-sage-600 hover:bg-sage-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gold-500 hover:bg-gold-600 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-sage-600 text-sage-600 hover:bg-sage-50',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
