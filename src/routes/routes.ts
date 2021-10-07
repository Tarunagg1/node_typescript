import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.Controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json("okji");
  });

  // register user
  app.post('/api/users',createUserHandler);
  
}

