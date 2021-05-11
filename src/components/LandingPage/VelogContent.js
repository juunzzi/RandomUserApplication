import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VelogLink = styled.a`
  font-size: 30px;
  color: #20c997;
  text-decoration: none;
`;
function VelogContent() {
  return (
    <Wrapper>
      <VelogLink href="https://velog.io/@rat8397/about" target="_blank">
        Velog
      </VelogLink>
    </Wrapper>
  );
}

export default VelogContent;
