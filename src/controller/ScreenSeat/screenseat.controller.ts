import { Request, Response } from "express";
import {
  createScreenSeat,
  getOneScreenData,
} from "../../services/ScreenSeat/index.services";

export const createScreenSeatData = async (req: Request, res: Response) => {
  const createScreenSeats: any = await createScreenSeat(req, res);
  res.send(createScreenSeats);
};

export const getOneScreenSeatData = async (req: Request, res: Response) => {
  const getSingleScreenSeats = await getOneScreenData(req, res);
  res.send(getSingleScreenSeats);
};
