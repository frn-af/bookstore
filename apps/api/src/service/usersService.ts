import { compare, genSalt, hash } from "bcrypt";
import { Response } from "express";
import { verify } from "jsonwebtoken";
import { UserInsert } from "../entity/users";
import { createUser, getUserByEmail, getUserByid } from "../repository/user";

const hashPassword = (password: string) => {
  return new Promise((resolve, reject) => {
    genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password: string, hash: string) => {
  return compare(password, hash);
};
export const signUp = async (data: UserInsert, res: Response) => {
  const { username, email, password } = data;
  if (!username || !email || !password) {
    throw new Error("Missing required fields");
  }
  const user = await getUserByEmail(data.email);
  if (user.length) {
    throw new Error("User already exists");
  }
  const hash = (await hashPassword(data.password)) as string;
  const newUser = await createUser({
    ...data,
    points: 100,
    password: hash,
  });
  const payload = {
    id: newUser[0]!.id,
    email: newUser[0]!.email,
    username: newUser[0]!.username,
    isAdmin: newUser[0]!.isAdmin,
  };
  return payload;
};

export const signIn = async (data: UserInsert) => {
  const { email, password } = data;
  if (!email || !password) {
    throw new Error("Missing required fields");
  }

  const user = await getUserByEmail(email);
  if (!user.length) {
    throw new Error("User not found");
  }

  const isValid = await comparePassword(password, user[0]!.password);

  if (!isValid) {
    throw new Error("Invalid password or email");
  }
  const payload = {
    id: user[0]!.id,
    email: user[0]!.email,
    username: user[0]!.username,
    isAdmin: user[0]!.isAdmin,
  };

  return payload;
};

export const getUserInfo = async (id: number) => {
  if (!id) {
    throw new Error("you must login to get user info");
  }

  const user = await getUserByid(id);
  const payload = {
    email: user[0]!.email,
    username: user[0]!.username,
    isAdmin: user[0]!.isAdmin,
    points: user[0]!.points,
  };
  return payload;
};

export const verifyToken = (token: string) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token provided");
    }

    verify(token, "secret", (err, decoded) => {
      if (err) {
        reject("Invalid token");
      }
      resolve(decoded);
    });
  });
};
