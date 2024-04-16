import { useMutation } from "@tanstack/react-query";
import { api } from "../../../app/api";
import { AddBooks } from "./addBooks";

export const updateBook = async (id: number, data: AddBooks) => {
  return api.post(`/books/${id}`, data).then((res) => res.data);
};

export const useUpdateBooks = (id: number, data: AddBooks) => {
  return useMutation({
    mutationFn: () => updateBook(id, data),
  });
};
