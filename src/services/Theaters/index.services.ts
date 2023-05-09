import e, { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Theater } from "../../db/entities/theaters.entity";

export const createTheater = async (req: Request, res: Response) => {
  try {
    let param = req.body;

    let theaterObj: any = {
      shortform: param.shortform,
      name: param.name,
      address: param.address,
      location: param.location,
    };

    const theater = await Theater.create(theaterObj);
    console.log("theater", theater);
    await theater.save();
    res.send(theater);
  } catch (e) {
    return e;
  }
};

export const getAllTheater = async (req: Request, res: Response) => {
  try {
    const getAllData = await AppDataSource.createQueryBuilder()
      .select("theater")
      .from(Theater, "theater")
      .getMany();

    res.send(getAllData);
  } catch (e) {
    return e;
  }
};

export const updateTheater = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    let id = req.params.id;
    console.log("getId", id);

    const theater = await Theater.createQueryBuilder()
      .update(Theater)
      .set({
        shortform: param.shortform,
        name: param.name,
        address: param.address,
        location: param.location,
      })
      .where("id= :id", { id: id })
      .execute();

    res.send("Theater Data Updated");
  } catch (e) {
    return e;
  }
};

export const DeleteMovie = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    console.log("Movie delted", id);
    const movie = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Theater)
      .where("id = :id", { id: id })
      .execute();

    res.send("Theater Deleted");
  } catch (e) {
    return e;
  }
};
