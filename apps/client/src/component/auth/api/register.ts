import { useMutation } from "@tanstack/react-query";
import { api } from "../../../app/api";

export interface Register {
  username: string;
  email: string;
  password: string;
}

const registerUser = async (data: Register) => {
  const { username, email, password } = data;
  return api
    .post("/register", { username, email, password })
    .then((res) => res.data);
};

export const useUserRegister = () => {
  return useMutation({
    mutationFn: (data: Register) => registerUser(data),
  });
};
