import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
function HeaderLogoWrapper() {
  return (
    <Wrapper>
      <Logo></Logo>
    </Wrapper>
  );
}

export default HeaderLogoWrapper;
