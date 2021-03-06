import React from 'react';

interface InputProps {
  name: string;
  label: string;
  register?: any;
  required?: boolean;
  type?: string;
  className?: string | undefined;
  autocomplete?: string | undefined;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  register,
  required,
  type,
  autocomplete,
  ...props
}) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      autoComplete={autocomplete}
      {...props}
      type={type}
      name={name}
      ref={register({ required })}
    />
  </>
);
