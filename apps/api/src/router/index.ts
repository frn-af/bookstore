import { Router } from "express";
import { login, register } from "../controller/authController";

export const router: Router = Router();

router.post("/register", register);
router.post("/login", login);
