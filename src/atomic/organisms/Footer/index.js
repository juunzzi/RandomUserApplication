import React from "react";
import styled from "styled-components";
import FooterContent from "../../molecules/FooterContent";
const Wrapper = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
function Footer() {
  return (
    <Wrapper>
      <Inner>
        <FooterContent></FooterContent>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
