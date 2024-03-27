import { Router } from "express";
import { check } from "express-validator";
import { login, register } from "../controller/authController";

export const router: Router = Router();

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters",
    ).isLength({ min: 8 }),
  ],
  register,
);
router.post(
  "/login",
  [
    check("email", "please insert your valid email").isEmail(),
    check("password", "please insert your password").exists(),
  ],
  login,
);
