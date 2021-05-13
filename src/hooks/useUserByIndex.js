import useUsers from "./useUsers";

export default ({ query, idx }) => {
  const { users, error } = useUsers({ query });
  return { user: users[idx], error };
};
