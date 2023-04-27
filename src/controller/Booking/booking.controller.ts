import { Request, Response } from "express";
import {
  craeteBooking,
  getAllBooking,
} from "../../services/Bookig/index.services";

export const createBookingData = async (req: Request, res: Response) => {
  const createBookings = await craeteBooking(req, res);
  res.send(createBookings);
};

export const getAllBookingData = async (req: Request, res: Response) => {
  const getAllBookings = await getAllBooking(req, res);
  res.send(getAllBookings);
};
