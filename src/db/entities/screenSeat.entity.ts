import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Theater } from "./theaters.entity";
import { Screen } from "./screen.entity";
import { Seat } from "./seat.entity";

@Entity()
export class ScreenSeat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seat: string;

  //theaterid
  // @ManyToOne("Theater", (theater: Theater) => theater.id)
  // theater: Theater;

  //screenid
  @ManyToOne("Screen", (screen: Screen) => screen.id)
  screen: Screen|number;

  @OneToMany("Seat", (seat: Seat) => seat.id)
  seats: Seat[];
}
