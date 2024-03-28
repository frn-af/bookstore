import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { signIn, signUp } from "../service/usersService";

export const register = async (req: Request, res: Response) => {
  try {
    const result = await signUp(req.body, res);
    sign(result, "secret", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        res.json({ error: err?.message });
      }
      res.status(200).json({ token });
    });
  } catch (error: any) {
    console.log("🚀 ~ register ~ error:", error);
    res.json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await signIn(req.body);
    sign(result, "secret", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        res.json({ error: err?.message });
      }
      res.status(200).json({ token });
    });
  } catch (error: any) {
    console.log("🚀 ~ login ~ error:", error);
    res.json({ error: error.message });
  }
};
