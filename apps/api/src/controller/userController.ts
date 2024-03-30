import { Request, Response } from "express";
import { getUserInfo } from "../service/usersService";

export const getUserData = async (req: Request, res: Response) => {
  try {
    const user = await getUserInfo(req.params.id as unknown as number);
    if (user) res.status(200).json(user);
    else res.status(404).json({ message: "User not found" });
  } catch (error: any) {
    res.json({ error: error.message });
  }
};
