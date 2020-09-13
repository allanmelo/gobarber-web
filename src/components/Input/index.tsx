import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...otherProps }) => (
  <StyledInput>
    {Icon && <Icon size={20} />}
    <input {...otherProps} />
  </StyledInput>
);

export default Input;
