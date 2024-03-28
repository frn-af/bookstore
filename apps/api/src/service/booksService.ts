import { BookInsert, TagInsert } from "../entity/books";
import {
  createBook,
  createTags,
  deleteBookById,
  getBookById,
  getBooks,
  getBooksByTag,
  updateBook,
} from "../repository/books";

export const getAllBooks = async () => {
  const books = await getBooks();
  return books;
};

export const getBook = async (id: number) => {
  const book = await getBookById(id);
  return book[0];
};

export const getBooksByTags = async (tags: string[]) => {
  const books = await Promise.all(
    tags.map(async (tag) => {
      return await getBooksByTag(tag);
    }),
  );
  return books;
};

export const getBooksByTitle = async (title: string) => {
  const books = await getBooks();
  const filteredBooks = books.filter((filter) => filter.title === title);
  return filteredBooks;
};

export const addBook = async (data: BookInsert) => {
  if (!data) {
    throw new Error("Missing required fields");
  }
  const exists = await getBooksByTitle(data.title);
  if (exists.length) {
    throw new Error("Book already exists");
  }
  const book = await createBook(data);
  const newBook = await getBook(book[0]!.id);
  return newBook;
};

export const editBook = async (id: number, data: BookInsert) => {
  const book = await getBook(id);
  if (!book) {
    throw new Error("books not found");
  }
  const exists = await getBooksByTitle(data.title);
  if (exists) {
    throw new Error(`Book with ${data.title} already exists`);
  }
  const updatedBook = await updateBook(id, data);
  return updatedBook;
};

export const addTag = async (data: TagInsert) => {
  const tag = await createTags(data);
  return tag;
};

export const delBook = async (id: number) => {
  const book = await getBook(id);
  if (!book) {
    throw new Error("Book not found");
  }
  const deletedBook = await deleteBookById(id);
  return deletedBook;
};

export const delTag = async (id: number) => {
  const tag = await getBook(id);
  if (!tag) {
    throw new Error("Tag not found");
  }
  const deletedTag = await deleteBookById(id);
  return deletedTag;
};
