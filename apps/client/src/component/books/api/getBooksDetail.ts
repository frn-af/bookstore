import { useQuery } from "@tanstack/react-query";
import { api } from "../../../app/api";
import { Book } from "./getBookslist";

const getBookDetail = async (book_id: string): Promise<Book> => {
  return api.get(`/books/${book_id}`).then((res) => res.data);
};

export const useGetBooksDetailQuery = (book_id: string) => {
  return useQuery({
    queryKey: ["books", book_id],
    queryFn: () => getBookDetail(book_id),
  });
};
