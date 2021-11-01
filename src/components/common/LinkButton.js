import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #5b2077;
  & > a {
    color: #5b2077;
    outline: none;
    text-decoration: none;
  }

  cursor: pointer;

  flex: 1;
  height: 200px;
`;
function LinkButton({ to, text }) {
  return (
    <Wrapper>
      <Link to={to}>{text}</Link>
    </Wrapper>
  );
}

export default LinkButton;
