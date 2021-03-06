import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  variant: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => Promise<void>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  type,
  disabled,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled}
    type={type}
    className={`btn btn-${variant}`}
  >
    {children}
  </button>
);
