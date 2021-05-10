import React from "react";
import styled from "styled-components";
import HeaderIconWrapper from "../../molecules/HeaderIconWrapper";
import HeaderLogoWrapper from "../../molecules/HeaderLogoWrapper";
const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  /* & div:first-child {
    margin-left: 50px;
  } */
`;
const Inner = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
`;

function Header() {
  return (
    <Wrapper>
      <Inner>
        <HeaderLogoWrapper></HeaderLogoWrapper>
        <HeaderIconWrapper></HeaderIconWrapper>
      </Inner>
    </Wrapper>
  );
}

export default Header;
