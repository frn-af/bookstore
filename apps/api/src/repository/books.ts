import { and, eq } from "drizzle-orm";
import { db } from "../db";
import { BookInsert, TagInsert, books, booksTags, tags } from "../entity/books";

export const getBooks = async () => {
  return await db.select().from(books);
};

export const getBookById = async (id: number) => {
  return await db.select().from(books).where(eq(books.id, id));
};

export const getBooksByTag = async (tag: string) => {
  return await db
    .select()
    .from(books)
    .innerJoin(tags, eq(booksTags.tagId, tags.id));
};

export const getTags = async () => {
  return await db.select().from(tags);
};

export const createBook = async (data: BookInsert) => {
  return await db.insert(books).values(data).returning();
};

export const createTags = async (data: TagInsert) => {
  return await db.insert(tags).values(data).returning();
};

export const createBookTag = async (data: {
  bookId: number;
  tagId: number;
}) => {
  return await db.insert(booksTags).values(data).returning();
};

export const deleteBook = async (id: number) => {
  return await db.delete(books).where(eq(books.id, id)).returning();
};

export const deleteTag = async (id: number) => {
  return await db.delete(tags).where(eq(tags.id, id)).returning();
};

export const deleteBookTag = async (data: {
  bookId: number;
  tagId: number;
}) => {
  return await db
    .delete(booksTags)
    .where(
      and(eq(booksTags.tagId, data.tagId), eq(booksTags.bookId, data.bookId)),
    )
    .returning();
};

export const updateBook = async (id: number, data: BookInsert) => {
  return await db.update(books).set(data).where(eq(books.id, id)).returning();
};
