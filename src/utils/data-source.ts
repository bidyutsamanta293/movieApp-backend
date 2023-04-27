// import { Seeder } from "typeorm-seeding";
import { DataSource } from "typeorm";
import { Movie } from "../db/entities/movies.entity";
import { Theater } from "../db/entities/theaters.entity";
import { Screen } from "../db/entities/screen.entity";
import { Show } from "../db/entities/shows.entity";
import { User } from "../db/entities/user.entity";
import { Booking } from "../db/entities/booking.entity";
import { ScreenSeat } from "../db/entities/screenSeat.entity";
import { Seat } from "../db/entities/seat.entity";

interface configType {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const postgresConfig: configType = {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "5555",
  database: "movieApp",
};

export const AppDataSource = new DataSource({
  ...postgresConfig,
  // url: "postgres://postgres:5555@localhost:5432/movie",
  type: "postgres",
  synchronize: true,
  logging: true,
  // driver: "postgres",
  entities: [Movie, Theater, Screen, Show, User, Booking, ScreenSeat, Seat],
});
