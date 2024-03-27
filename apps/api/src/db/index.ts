import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

dotenv.config();
const sql = neon(process.env.DATABASE!);
export const db = drizzle(sql);
