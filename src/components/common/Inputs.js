import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 150px;
`;
const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const Select = styled.select`
  padding: 10px;
  width: 100%;
`;

const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  min-width: 150px;
`;
function InputLayout({ children, label }) {
  return (
    <Wrapper>
      <Label htmlFor={`${label}`}>{label}</Label>
      <InputWrapper>{children}</InputWrapper>
    </Wrapper>
  );
}
export function TextInput({ label }) {
  return (
    <InputLayout label={label}>
      <Input id={label}></Input>
    </InputLayout>
  );
}
export function SelectInput({ label, texts }) {
  return (
    <InputLayout label={label}>
      <Select type="select"></Select>
    </InputLayout>
  );
}
export function RadioInput({ label }) {
  return (
    <InputLayout>
      <Input type="radio"></Input>
    </InputLayout>
  );
}
