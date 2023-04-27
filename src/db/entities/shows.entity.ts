import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Movie } from "./movies.entity";
import { Screen } from "./screen.entity";
import { Booking } from "./booking.entity";

@Entity()
export class Show extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "time" })
  time: string;

  @Column()
  price: number;

  //moviesid
  @ManyToOne("Movie", (movie: Movie) => movie.id)
  movie: Movie;

  //screenid
  @ManyToOne("Screen", (screen: Screen) => screen.id)
  screen: Screen;

  @OneToMany("Booking", (booking: Booking) => booking.id)
  bookings: Booking[];
}
