import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./booking.entity";
import { ScreenSeat } from "./screenSeat.entity";

@Entity()
export class Seat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //bookingId
  @ManyToOne("Booking", (booking: Booking) => booking.id)
  booking: Booking;

  //screenSeatId
  @ManyToOne("ScreenSeat", (screenSeat: ScreenSeat) => screenSeat.id)
  screenSeat: ScreenSeat;
}
