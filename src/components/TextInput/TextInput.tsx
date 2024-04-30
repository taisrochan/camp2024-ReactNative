import React from 'react';
import {TextInputProps, TextInput} from 'react-native';
import styled from 'styled-components/native';

const CustomTextInput = (props: TextInputProps) => {
  return <StyledTextInput {...props} />;
};

const StyledTextInput = styled(TextInput)`
  height: 50px;
  background-color: white;
  border-radius: 100px;
  padding: 14px 24px 11px;
`;

export default CustomTextInput;
