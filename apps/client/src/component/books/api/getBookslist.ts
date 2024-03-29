import { useQuery } from "@tanstack/react-query";
import { api } from "../../../app/api";

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
}
const getAllBooks = (): Promise<Book[]> => {
  return api.get("/books").then((res) => res.data);
};

export const useGetBooksQuery = () => {
  return useQuery({
    queryKey: ["books", "all"],
    queryFn: getAllBooks,
  });
};
