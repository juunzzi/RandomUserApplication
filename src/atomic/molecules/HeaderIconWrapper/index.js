import React from "react";
import styled from "styled-components";
import FacebookIcon from "../../atoms/FacebookIcon";
import GithubIcon from "../../atoms/GithubIcon";
import InstaIcon from "../../atoms/InstaIcon";
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & a:not(:last-child) {
    margin-right: 20px;
  }
`;
function HeaderIconWrapper() {
  return (
    <Wrapper>
      <InstaIcon></InstaIcon>
      <FacebookIcon></FacebookIcon>
      <GithubIcon></GithubIcon>
    </Wrapper>
  );
}

export default HeaderIconWrapper;
