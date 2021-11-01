import React from "react";
import styled from "styled-components";
import { SelectInput, TextInput } from "../../components/common/Inputs";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10% 0;

  & > input {
    margin-bottom: 50px;
  }
`;
const Form = styled.form`
  padding: 50px;
  border: 1px solid black;
`;

const Create = () => {
  // const { users, error } = useUsers({ query: 50 });

  return (
    <Wrapper>
      <Form>
        <TextInput label="신청인"></TextInput>
        <SelectInput label="전화번호"></SelectInput>
      </Form>
    </Wrapper>
  );
};

export default Create;
