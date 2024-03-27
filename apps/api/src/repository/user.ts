import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../entity/users";

export const getUserByEmail = async (email: string) => {
  return await db.select().from(users).where(eq(users.email, email));
};
