import { InputProps } from 'antd';

import { StyledInput } from 'Components/Input/styles';

const Input = ({ type, name, placeholder, maxLength, onChange, required }: InputProps) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
