import { useQuery } from "@tanstack/react-query";
import { api } from "../../../app/api";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  booksTags: {
    bookId: string;
    tagsId: string;
    tag: {
      id: string;
      name: string;
    };
  }[];
}
const getAllBooks = async (): Promise<Book[]> => {
  return api.get("/books").then((res) => res.data);
};

export const useGetBooksQuery = () => {
  return useQuery({
    queryKey: ["books", "all"],
    queryFn: getAllBooks,
  });
};
