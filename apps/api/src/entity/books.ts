import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  image: text("image").notNull(),
});

export const booksRelations = relations(books, ({ many }) => ({
  booksTags: many(booksTags),
}));

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const tagsRelations = relations(tags, ({ many }) => ({
  booksTags: many(booksTags),
}));

export const booksTags = pgTable(
  "books_tags",
  {
    bookId: integer("book_id")
      .notNull()
      .references(() => books.id),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.bookId, t.tagId] }),
  }),
);

export const booksTagsRelations = relations(booksTags, ({ one }) => ({
  book: one(books, {
    fields: [booksTags.bookId],
    references: [books.id],
  }),
  tag: one(tags, {
    fields: [booksTags.tagId],
    references: [tags.id],
  }),
}));

export type Book = typeof books.$inferSelect;
export type BookInsert = typeof books.$inferInsert;
export type Tag = typeof tags.$inferSelect;
