import { Request, Response } from "express";
import { getTags } from "../repository/books";
import {
  addBook,
  addTag,
  delBook,
  editBook,
  getAllBooks,
  getBook,
  getBooksByTags,
} from "../service/booksService";

export const getAllBooksList = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    if (books) res.status(200).json(books);
    else res.status(404).json({ message: "Books not found" });
  } catch (error) {
    console.log("🚀 ~ getAllBooksList ~ error:", error);
    res.status(500).json({ message: error });
  }
};

export const getBookDetail = async (req: Request, res: Response) => {
  try {
    const book = await getBook(req.params.id as unknown as number);
    if (book) res.status(200).json(book);
    else res.status(404).json({ message: "Book not found" });
  } catch (error) {
    console.log("🚀 ~ getBookDetail ~ error:", error);
    res.status(500).json({ message: error });
  }
};

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const book = await addBook(req.body);
    if (book) res.status(200).json(book);
    else res.status(404).json({ message: "Book not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await editBook(req.params.id as unknown as number, req.body);
    if (book) res.status(200).json(book);
    else res.status(404).json({ message: "Book not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as unknown as number;
    const deletebook = await delBook(id);
    if (deletebook) res.status(200).json(deletebook);
    else res.status(404).json({ message: "Book not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const getBooksByTag = async (req: Request, res: Response) => {
  try {
    const books = await getBooksByTags(req.body.tags);
    if (books) res.status(200).json(books);
    else res.status(404).json({ message: "Books not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const getTagsList = async (req: Request, res: Response) => {
  try {
    const tags = await getTags();
    if (tags) res.status(200).json(tags);
    else res.status(404).json({ message: "Tags not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const addNewTag = async (req: Request, res: Response) => {
  try {
    const tag = await addTag(req.body);
    if (tag) res.status(200).json(tag);
    else res.status(404).json({ message: "Tag not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};

export const deleteTag = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as unknown as number;
    const deletetag = await delBook(id);
    if (deletetag) res.status(200).json(deletetag);
    else res.status(404).json({ message: "Tag not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};
