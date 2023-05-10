import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { ScreenSeat } from "../entities/screenSeat.entity";

export class ScreenSeatSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection.getRepository(ScreenSeat).save([
      {
        seat: "A3",
        screen: 1,
      },
      {
        seat: "A4",
        screen: 1,
      },
    ]);
  }
}
