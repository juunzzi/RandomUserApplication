import React, { useEffect } from "react";
import styled from "styled-components";
import UserContent from "../../components/ExplorePage/UserContent";
import useUsers from "../../hooks/useUsers";
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
  const { users, error } = useUsers({ query: 50 });

  return (
    <Wrapper>
      <Content>
        {/* 이미지 아이템 */}
        {users &&
          users.map((user, idx) => (
            <UserContent key={user.phone} idx={idx}></UserContent>
          ))}
      </Content>
    </Wrapper>
  );
};

export default ExploreUsersPage;
