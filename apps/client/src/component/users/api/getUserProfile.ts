import { useQuery } from "@tanstack/react-query";
import { api } from "../../../app/api";

interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: number;
  points: number;
}
export const getUserInfo = async (token: string, id: number): Promise<User> => {
  return api
    .get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);
};

export const useGetUserInfo = (token: string, id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserInfo(token, id),
  });
};
