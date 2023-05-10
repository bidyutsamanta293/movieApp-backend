// @ts-nocheck

// import { Seeder } from "typeorm-seeding";
import { DataSource, DataSourceOptions } from "typeorm";
import { Movie } from "../db/entities/movies.entity";
import { Theater } from "../db/entities/theaters.entity";
import { Screen } from "../db/entities/screen.entity";
import { Show } from "../db/entities/shows.entity";
import { User } from "../db/entities/user.entity";
import { Booking } from "../db/entities/booking.entity";
import { ScreenSeat } from "../db/entities/screenSeat.entity";
import { Seat } from "../db/entities/seat.entity";

import { SeederOptions } from 'typeorm-extension';
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { PostgresDriver } from "typeorm/driver/postgres/PostgresDriver";

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
  password: "1234",
  database: "movieApp",
}; 

export const AppDataSource = new DataSource({
  ...postgresConfig,
  // url: "postgres://postgres:5555@localhost:5432/movie",
  type: "postgres",
  synchronize: true,
  // driver: PostgresDriver,
  logging: true,
  // driver: "postgres",
  entities: [Movie, Theater, Screen, Show, User, Booking, ScreenSeat, Seat],
  // migrations: [__dirname + "/migrations/*.js"],
  // cli: {
  //   migrationsDir: __dirname + "/migrations",
  // },
  // seeds: ['src/db/seeds/**/*{.ts,.js}'],
  // factories: ['src/database/factories/**/*{.ts,.js}']
});
