import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Show } from "./shows.entity";
import { Seat } from "./seat.entity";

@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //userId

  @ManyToOne("User", (user: User) => user.id)
  user: User;

  //showId
  @ManyToOne("Show", (show: Show) => show.id)
  show: Show;

  @OneToMany("Seat", (seat: Seat) => seat.id)
  seats: Seat[];
}
