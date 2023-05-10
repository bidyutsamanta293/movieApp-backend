// @ts-nocheck

import { createConnection } from 'typeorm';
import { ScreenSeatSeed } from './screenSeat.seed';


async function runSeeds() {
    const connection = createConnection();
    // await connection.runMigrations();
    // await (await connection).runMigrations

    // await new ScreenSeatSeed().run();
    await new ScreenSeatSeed().run();

    (await connection).close();
}

runSeeds()