import { json, urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import morgan from "morgan";
import { router } from "./router";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(cookieParser())
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use("/api", router);

  return app;
};
