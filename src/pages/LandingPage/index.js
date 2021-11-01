import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";
import LinkButton from "../../components/common/LinkButton";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  & > div:not(div:last-child) {
    margin-right: 30px;
  }
`;

const data = [...new Array(100)].map(() => ({ text: "124124124124" }));
const LandingPage = () => {
  return (
    <Wrapper>
      <LinkButton to="/create" text="생성"></LinkButton>
      <LinkButton to="/list" text="리스트"></LinkButton>
      <LinkButton to="/list" text="리스트"></LinkButton>
    </Wrapper>
  );
};

export default LandingPage;
