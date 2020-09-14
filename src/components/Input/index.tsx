import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...otherProps }) => {
  const inputRef = useRef(null);
  const {
 fieldName, defaultValue, error, registerField
} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <StyledInput>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} ref={inputRef} {...otherProps} />
    </StyledInput>
  );
};

export default Input;
