// //ts-nocheck

// import * as Faker from "faker";
// import { define } from "typeorm-seeding";
// import { User } from "../entities/user.entity";

// // import { User } from "../../entities";

// define(User, (faker: typeof Faker) => {
//   const user = new User();
//   const name = faker.name.firstName();
//   const lastName = faker.name.lastName();
//   user.name = `${firstName} ${lastName}`;
//   return user;
// });