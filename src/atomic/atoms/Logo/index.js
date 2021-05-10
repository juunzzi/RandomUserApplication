import React from "react";
import styled from "styled-components";
const Wrapper = styled.span``;
function Logo() {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z" />
      </svg>
    </Wrapper>
  );
}

export default Logo;
