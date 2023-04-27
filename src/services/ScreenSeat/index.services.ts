import { Request, Response, query } from "express";
import { AppDataSource } from "../../utils/data-source";
import { ScreenSeat } from "../../db/entities/screenSeat.entity";

export const createScreenSeat = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    console.log("param", param);
    let screenSeatObj: any = {
      theater: param.theater,
      seat: param.seat,
      screen: param.screen,
    };

    const screenSeat = ScreenSeat.create(screenSeatObj);
    await screenSeat.save();

    console.log("screenSeat", screenSeat);
    res.send(screenSeat);
  } catch (e) {
    return e;
  }
};

export const getOneScreenData = async (req: Request, res: Response) => {
  try {
    let id: any = req.query.id;

    let theaterId = id.split(",")[0];
    let screenId = id.split(",")[1];
    console.log("theaterId", id.split(",")[0]);
    console.log("screenId", id.split(",")[1]);
    const singleScreenSeat = await AppDataSource.createQueryBuilder()
      .select("screenSeat")
      .from(ScreenSeat, "screenSeat")
      .leftJoinAndSelect("screenSeat.theater", "theater")
      .leftJoinAndSelect("screenSeat.screen", "screen")
      .where("screenSeat.screen = :id", { id: screenId })
      .andWhere("screenSeat.theater = :theaterId", { theaterId: theaterId })
      .getMany();
    res.send(singleScreenSeat);
  } catch (e) {
    return e;
  }
};
