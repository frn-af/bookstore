import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as booksSchema from "../entity/books";
import * as userSchema from "../entity/users";

dotenv.config();
const sql = neon(process.env.DATABASE!);
export const db = drizzle(sql, {
  schema: {
    ...userSchema,
    ...booksSchema,
  },
});
