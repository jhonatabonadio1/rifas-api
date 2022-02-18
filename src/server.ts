import dotenv from 'dotenv'
import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";

import "./database"

const app = express();

app.use(cors());

dotenv.config();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        return response.status(400).json({
          error: err.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  );

app.listen(3000, () => console.log("Server is running"))
