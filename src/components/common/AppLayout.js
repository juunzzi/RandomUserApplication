import React, { useCallback } from "react";
import styled from "styled-components";
import Footer from "../../atomic/organisms/Footer";
import Header from "../../atomic/organisms/Header";
import { useHistory } from "react-router-dom";
const Wrapper = styled.div``;
const Contents = styled.div``;

const AppLayout = ({ children }) => {
  const history = useHistory();
  const onHomeLogoClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Wrapper>
      <Header onHomeLogoClick={onHomeLogoClick}></Header>
      <Contents>{children}</Contents>
      <Footer></Footer>
    </Wrapper>
  );
};
export default AppLayout;
