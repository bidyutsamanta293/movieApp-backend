import e, { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Booking } from "../../db/entities/booking.entity";

export const craeteBooking = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    console.log("param", param);
    let bookingObj: any = {
      user: param.user,
      show: param.show,
    };

    const booking = await Booking.create(bookingObj);
    // console.log("theater", theater);
    await booking.save();
    res.send(booking);
  } catch (e) {
    return e;
  }
};

export const getAllBooking = async (req: Request, res: Response) => {
  try {
    const getAllBook = await AppDataSource.createQueryBuilder()
      .select("booking")
      .from(Booking, "booking")
      .leftJoinAndSelect("booking.user", "user")
      .leftJoinAndSelect("booking.show", "show")
      .getMany();

    res.send(getAllBook);
  } catch (e) {
    return e;
  }
};
