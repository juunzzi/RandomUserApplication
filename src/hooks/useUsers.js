import useSWR from "swr";
import { GET_USER_ALL } from "../api/fetcher";

export default ({ query }) => {
  const { data, error } = useSWR(`${GET_USER_ALL}${query}`);
  return { users: data, error };
};
