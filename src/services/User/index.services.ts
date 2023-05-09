import e, { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../db/entities/user.entity";

export const createUser = async (req: Request, res: Response) => {
  try {
    let param = req.body;

    let userObj: any = {
      name: param.name,
      email: param.email,
      number: param.number,
      password: param.password,
    };

    const user = await User.create(userObj);
    console.log("User", User);
    await user.save();
    res.send(user);
  } catch (e) {
    return e;
  }
};
