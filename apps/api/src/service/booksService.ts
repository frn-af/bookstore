import { BookInsert, TagInsert } from "../entity/books";
import {
  createBook,
  createTags,
  getBookById,
  getBooks,
  getBooksByTag,
  updateBook,
} from "../repository/books";

export const getAllBooks = async () => {
  const books = await getBooks();
  if (!books.length) {
    throw new Error("No books found");
  }
  return books;
};

export const getBook = async (id: number) => {
  const book = await getBookById(id);
  return book[0];
};

export const getAllBooksByTag = async (tag: string) => {
  const books = await getBooksByTag(tag);
  return books;
};

export const getBooksByTags = async (tags: string[]) => {
  const books = await Promise.all(
    tags.map(async (tag) => {
      return await getBooksByTag(tag);
    }),
  );
  return books;
};

export const getBooksByTagAndPrice = async (tag: string, price: number) => {
  const books = await getBooksByTag(tag);
  const filteredBooks = books.filter((filter) => filter.books.price < price);
  return filteredBooks;
};

export const getBooksByPrice = async (price: number) => {
  const books = await getBooks();
  const filteredBooks = books.filter((filter) => filter.price < price);
  return filteredBooks;
};

export const getBooksByAuthor = async (author: string) => {
  const books = await getBooks();
  const filteredBooks = books.filter((filter) => filter.author === author);
  return filteredBooks;
};

export const getBooksByTitle = async (title: string) => {
  const books = await getBooks();
  const filteredBooks = books.filter((filter) => filter.title === title);
  return filteredBooks;
};

export const addBook = async (data: BookInsert) => {
  const book = await createBook(data);
  const newBook = await getBook(book[0]!.id);
  return newBook;
};

export const editBook = async (id: number, data: BookInsert) => {
  const book = await getBook(id);
  if (!book) {
    throw new Error("books not found");
  }
  const updatedBook = await updateBook(id, data);
  return updatedBook;
};

export const addTag = async (data: TagInsert) => {
  const tag = await createTags(data);
  return tag;
};
