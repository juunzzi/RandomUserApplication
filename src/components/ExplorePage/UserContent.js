import React, { useEffect } from "react";
import useUserByIndex from "../../hooks/useUserByIndex";
function UserContent({ idx }) {
  const { user, error } = useUserByIndex({ query: 50, idx: idx });
  useEffect(() => {
    console.log(user);
  }, [user]);
  return <div>{/*유저이미지가 들어갈 공간*/}</div>;
}

export default UserContent;
