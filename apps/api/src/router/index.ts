import { Router } from "express";
import { login, profile, register } from "../controller/authController";
import { auth } from "../middleware/auth";

export const router: Router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, profile);
