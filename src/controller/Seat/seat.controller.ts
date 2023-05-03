import { Request, Response } from "express";
import {
  createBookingSeat,
  getSingleSeatBooking,
  getUserSeatBooking,
} from "../../services/Seat/index.services";

export const createBookingSeatData = async (req: Request, res: Response) => {
  const createBookingSeats: any = await createBookingSeat(req, res);
  res.send(createBookingSeats);
};

export const getBookingSeatData = async (req: Request, res: Response) => {
  const getBookingSeats: any = await getUserSeatBooking(req, res);
  res.send(getBookingSeats);
};

export const getSingleSeatData = async (req: Request, res: Response) => {
  const getSingleSeatData: any = await getSingleSeatBooking(req, res);
  res.send(getSingleSeatData);
};
