import { Request, Response } from "express";
import { AppDataSource } from "../../utils/data-source";
import { Seat } from "../../db/entities/seat.entity";

export const createBookingSeat = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    console.log("param", param);

    let seatObj: any = {
      booking: param.booking,
      screenSeat: param.screenSeat,
    };

    const seat = Seat.create(seatObj);
    await seat.save();

    console.log("seat", seat);
    res.send(seat);
  } catch (e) {
    return e;
  }
};

export const getUserSeatBooking = async (req: Request, res: Response) => {
  try {
    const userSeatBooking = await AppDataSource.createQueryBuilder()
      .select("seat")
      .from(Seat, "seat")
      .leftJoinAndSelect("seat.booking", "booking")
      .leftJoinAndSelect("seat.screenSeat", "screenSeat")
      .getMany();
    res.send(userSeatBooking);
  } catch (e) {
    return e;
  }
};
