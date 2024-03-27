import { Request, Response } from "express";
import { signIn, signUp } from "../service/usersService";

export const register = async (req: Request, res: Response) => {
  try {
    const result = await signUp(req.body, res);
    res.status(200).json({ token: result });
  } catch (error: any) {
    console.log("🚀 ~ register ~ error:", error);
    res.json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await signIn(req.body);
    res.status(200).json({ token: result });
  } catch (error: any) {
    console.log("🚀 ~ login ~ error:", error);
    res.json({ error: error.message });
  }
};
