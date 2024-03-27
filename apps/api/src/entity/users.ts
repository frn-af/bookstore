import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  isAdmin: integer("isAdmin").default(0).notNull(),
  points: integer("points").default(0).notNull(),
});

export type User = typeof users.$inferSelect;
export type UserInsert = typeof users.$inferInsert;
