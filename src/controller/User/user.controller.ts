import { Request, Response } from "express";
import { createUser } from "../../services/User/index.services";

export const createUserData = async (req: Request, res: Response) => {
  const createUsers: any = await createUser(req, res);
  res.send(createUsers);
};
