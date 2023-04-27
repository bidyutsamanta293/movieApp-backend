import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Theater } from "./theaters.entity";
import { Show } from "./shows.entity";
import { ScreenSeat } from "./screenSeat.entity";

@Entity()
export class Screen extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  screenname: string;

  @OneToMany("Show", (show: Show) => show.id)
  shows: Show[];

  //theaterid

  @ManyToOne("Theater", (theater: Theater) => theater.id)
  theater: Theater;

  @OneToMany("ScreenSeat", (screenSeat: ScreenSeat) => screenSeat.id)
  screenSeats: ScreenSeat[];
}
