import React, { useEffect } from "react";
import styled from "styled-components";
import useSWR from "swr";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  background-color: red;
  width: 100%;
  height: 500px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
`;
const ExploreUsersPage = () => {
  const { data, error } = useSWR(["https://randomuser.me/api/?results=10"]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Wrapper>
      <Content>{/* 이미지 아이템 */}</Content>
    </Wrapper>
  );
};

export default ExploreUsersPage;
