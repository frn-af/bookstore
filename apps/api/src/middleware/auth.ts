import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../service/usersService";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization as string;
  const bearer = token.split(" ");
  if (!bearer[1]) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = await verifyToken(bearer[1]);
    req.body.user = decoded;
    next();
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};
