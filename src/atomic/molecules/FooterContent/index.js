import React from "react";
import styled from "styled-components";
import AboutMe from "../../atoms/AboutMe";
import ContactMe from "../../atoms/ContactMe";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
function FooterContent() {
  return (
    <Wrapper>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </Wrapper>
  );
}

export default FooterContent;
