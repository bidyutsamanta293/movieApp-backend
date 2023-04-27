// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

import Cors from "cors";
import express, { Request, Response } from "express";
import router from "./src/routes/main.routes";
import { AppDataSource } from "./src/utils/data-source";

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    const allowOrigins = "*";

    this.app.use(express.json());

    const options: Cors.CorsOptions = {
      origin: allowOrigins,
    };
    this.app.use(Cors(options));
  }

  public routes() {
    this.app.use(router);
    this.app.get("/*", (req: Request, res: Response) => {
      res.send("Ivalid Page Url");
    });
  }

  public start() {
    this.app.listen(8082, () => {
      console.log("Server is listening at 8082");
    });
  }
}

AppDataSource.initialize()
  .then(async () => {
    const server = new Server();
    server.start();
  })
  .catch((error: Error) => console.log(error));
