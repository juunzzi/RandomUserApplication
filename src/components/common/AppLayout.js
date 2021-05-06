import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
const Wrapper = styled.div``;
const Contents = styled.div``;

const AppLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header>header</Header>
      <Contents>{children}</Contents>
      <Footer>footer</Footer>
    </Wrapper>
  );
};
export default AppLayout;
