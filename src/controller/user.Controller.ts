import { Request, Response } from "express";
import { createuser } from "../service/user.service";
import { omit } from "lodash";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = createuser(req.body);
    return res.status(200).json(user);
  } catch (e:any) {
     log.error(e.message)
      return res.status(400).json(e.message);
  }
}
