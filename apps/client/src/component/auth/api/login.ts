import { useMutation } from "@tanstack/react-query";
import { api } from "../../../app/api";

export interface Login {
  email: string;
  password: string;
}

const userLogin = async (data: Login) => {
  const { email, password } = data;
  return api.post("/login", { email, password }).then((res) => res.data);
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: (data: Login) => userLogin(data),
  });
};
