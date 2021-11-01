import React, { useCallback } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const Wrapper = styled.div``;
const Contents = styled.div`
  max-width: 1100px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;

  border: 1px solid black;
`;

const AppLayout = ({ children }) => {
  const history = useHistory();
  const onHomeLogoClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Wrapper>
      <Contents>{children}</Contents>
    </Wrapper>
  );
};
export default AppLayout;
