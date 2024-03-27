import { Request, Response } from "express";
import { signUp } from "../service/usersService";

export const register = async (req: Request, res: Response) => {
  try {
    const result = await signUp(req.body);
    res.status(200).json({ token: result });
  } catch (error: any) {
    console.log("🚀 ~ register ~ error:", error);
    res.status(500).json({ Error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await signUp(req.body);
    res.status(200).json({ token: result });
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    res.status(500).json({ Error: [{ message: "Internal Server Error" }] });
  }
};
