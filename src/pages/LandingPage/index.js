import React from "react";
import styled from "styled-components";
import ExploreContent from "../../components/LandingPage/ExploreContent";
import VelogContent from "../../components/LandingPage/VelogContent";
const Wrapper = styled.div``;
const LandingPage = () => {
  return (
    <Wrapper>
      <ExploreContent></ExploreContent>
      <VelogContent></VelogContent>
    </Wrapper>
  );
};
export default LandingPage;
