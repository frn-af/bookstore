import { compare, genSalt, hash } from "bcrypt";
import { Response } from "express";
import { sign } from "jsonwebtoken";
import { UserInsert } from "../entity/users";
import { createUser, getUserByEmail } from "../repository/user";

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
    return res.json({ error: "Missing required fields" });
  }
  const user = await getUserByEmail(data.email);
  if (user.length) {
    return res.json({ error: "User already exists" });
  }
  const hash = (await hashPassword(data.password)) as string;
  const newUser = await createUser({
    ...data,
    password: hash,
  });
  const payload = {
    User: newUser,
  };
  const jwtToken = sign(
    payload,
    "secret",
    { expiresIn: "1h" },
    (err, token) => {
      if (err) {
        throw new Error("Internal Server Error");
      }
      return token;
    },
  );
  return jwtToken;
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
    throw new Error("Invalid password");
  }
  const payload = {
    User: user,
  };

  const jwtToken = sign(
    payload,
    "secret",
    { expiresIn: "1h" },
    (err, token) => {
      if (err) {
        throw new Error("Internal Server Error");
      }
      return token;
    },
  );
  return jwtToken;
};

export const verifyToken = (token: string) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject("No token provided");
    }

    sign(token, "secret", (err, decoded) => {
      if (err) {
        reject("Invalid token");
      }
      resolve(decoded);
    });
  });
};
