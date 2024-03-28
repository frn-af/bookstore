import { Router } from "express";
import { login, register } from "../controller/authController";
import {
  addNewBook,
  addNewTag,
  deleteBook,
  deleteTag,
  getAllBooksList,
  getBookDetail,
  getBooksByTag,
  getTagsList,
  updateBook,
} from "../controller/booksController";
import { auth } from "../middleware/auth";

export const router: Router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/books", getAllBooksList);
router.post("/books", auth, addNewBook);
router.patch("/books/:id", auth, updateBook);
router.delete("/books/:id", auth, deleteBook);
router.get("/books/:id", auth, getBookDetail);
router.get("/books/tags", auth, getBooksByTag);
router.get("/tags", auth, getTagsList);
router.post("/tags", auth, addNewTag);
router.delete("/tags/:id", auth, deleteTag);
