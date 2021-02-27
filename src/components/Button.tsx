import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  // size: string;
  variant: string;
  onClick: () => Promise<void>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  ...props
}) => (
  <button className={`btn btn-${variant}`} {...props}>
    {children}
  </button>
);
