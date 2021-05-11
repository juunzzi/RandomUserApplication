import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ExploreLink = styled(Link)`
  font-size: 30px;
  color: skyblue;
  text-decoration: none;
`;
function ExploreContent() {
  return (
    <Wrapper>
      <ExploreLink to="/users">Explore</ExploreLink>
    </Wrapper>
  );
}

export default ExploreContent;
