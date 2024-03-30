import { useMutation } from "@tanstack/react-query";
import { api } from "../../../app/api";

export interface AddBooks {
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export const addBooks = async (data: AddBooks) => {
  return api.post("/books", data).then((res) => res.data);
};

export const useAddBooks = () => {
  return useMutation({
    mutationFn: (data: AddBooks) => addBooks(data),
  });
};
