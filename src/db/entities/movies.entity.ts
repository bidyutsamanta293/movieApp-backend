import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Show } from "./shows.entity";

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  genre: string;

  @Column()
  rating: string;

  @Column()
  director: string;

  @Column()
  duration!: string;

  @Column()
  flag: string;

  @OneToMany("Show", (show: Show) => show.id)
  shows: Show[];
}
