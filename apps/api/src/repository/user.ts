import { eq } from "drizzle-orm";
import { db } from "../db";
import { UserInsert, users } from "../entity/users";

export const getUserByEmail = async (email: string) => {
  return await db.select().from(users).where(eq(users.email, email));
};
export const getUserByid = async (id: number) => {
  return await db.select().from(users).where(eq(users.id, id));
};
export const createUser = async (data: UserInsert) => {
  return await db.insert(users).values(data).returning();
};
