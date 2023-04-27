import { Request, Response } from "express";
import {
  createBookingSeat,
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
