import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Screen } from "./screen.entity";
import { ScreenSeat } from "./screenSeat.entity";

@Entity()
export class Theater extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortform: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  location: string;

  @OneToMany("Screen", (screen: Screen) => screen.id)
  screens: Screen[];

  // @OneToMany("ScreenSeat", (screenSeat: ScreenSeat) => screenSeat.id)
  // screenSeats: ScreenSeat[];
}
