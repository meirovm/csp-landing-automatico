import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-roboto rounded-full ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;