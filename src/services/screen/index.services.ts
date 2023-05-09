import { Request, Response } from "express";
import { Screen } from "../../db/entities/screen.entity";
import { AppDataSource } from "../../data-source";

export const createScreen = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    console.log("param", param);
    let screenObj: any = {
      theater: param.theaterId,
      screenname: param.screenname,
    };

    const screen = Screen.create(screenObj);
    await screen.save();

    console.log("screen", screen);
    res.send(screen);
  } catch (e) {
    return e;
  }
};

export const getScreen = async (req: Request, res: Response) => {
  try {
    const getAllScreen = await AppDataSource.createQueryBuilder()
      .select("screen")
      .from(Screen, "screen")
      .leftJoinAndSelect("screen.theater", "theater")
      .getMany();

    res.send(getAllScreen);
  } catch (e) {
    return e;
  }
};

export const getSingleScreen = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    const singleScreen = await AppDataSource.createQueryBuilder()
      .select("screen")
      .from(Screen, "screen")
      .leftJoinAndSelect("screen.theater", "theater")
      .where("screen.id = :id", { id: id })
      .getOne();

    res.send(singleScreen);
  } catch (e) {
    return e;
  }
};

export const updateScreen = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    let id = req.params.id;
    console.log("getId", id);

    const screen = await Screen.createQueryBuilder()
      .update(Screen)
      .set({
        theater: param.theaterId,
        screenname: param.screenname,
      })
      .where("id= :id", { id: id })
      .execute();

    res.send("Screen Data Updated");
  } catch (e) {
    return e;
  }
};

export const DeleteScreen = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    console.log("screen delted", id);
    const screen = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Screen)
      .where("id = :id", { id: id })
      .execute();

    res.send("Screen data Deleted");
  } catch (e) {
    return e;
  }
};
