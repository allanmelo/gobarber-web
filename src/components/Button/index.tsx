import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => (
  <StyledButton type="button" {...otherProps}>
    {children}
  </StyledButton>
);

export default Button;
