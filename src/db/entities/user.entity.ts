import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./booking.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  number: string;

  @Column()
  password: string;

  @OneToMany("Booking", (booking: Booking) => booking.id)
  bookings: Booking[];
}
