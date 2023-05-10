// @ts-nocheck

import { Request, Response } from "express";
import { AppDataSource } from "../../utils/data-source";
import { Show } from "../../db/entities/shows.entity";
import { Theater } from "../../db/entities/theaters.entity";

export const createShow = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    console.log("param", param);
    let showObj: any = {
      movie: param.movie,
      screen: param.screen,
      time: param.time,
      price: param.price,
      // startDate: param.param,
      // endDate: param.endDate
    };

    const show = Show.create(showObj);
    await show.save();

    console.log("show", show);
    res.send(show);
  } catch (e) {
    return e;
  }
};

export const getShow = async (req: Request, res: Response) => {
  try {
    console.log("call");
    const getAllShow = await AppDataSource.createQueryBuilder()
      .select("show")
      .from(Show, "show")
      .leftJoinAndSelect("show.movie", "movie")
      .leftJoinAndSelect("show.screen", "screen")
      .leftJoinAndSelect("screen.theater", "theater")
      .getMany();

    res.send(getAllShow);
  } catch (e) {
    return e;
  }
};

//manage SHows
export const getShowFilter = async (req: Request, res: Response) => {
  try {
    // let tempArray;
    // let theaterIdArray = [];
    let tempIdData: any = [];
    let TheaterData: any = [];
    console.log("===============================1");
    console.log("===============================");
    const getAllShow = await AppDataSource.createQueryBuilder()
      .select("show")
      .from(Show, "show")
      .leftJoinAndSelect("show.movie", "movie")
      .leftJoinAndSelect("show.screen", "screen")
      .leftJoinAndSelect("screen.theater", "theater")
      .getMany();

    // getAllShow?.forEach((value, index) => {
    //   if (tempIdData.includes(value.screen.theater.shortform)) {
    //     const shortNameObjIndex = TheaterData.findIndex(
    //       (newArrayValue: any) =>
    //         newArrayValue.shortForm === value.screen.theater.shortform
    //     );
    //     const shortNameObj = TheaterData[shortNameObjIndex];
    //     const time = !TheaterData[shortNameObjIndex].time.includes(value.time)
    //       ? [...TheaterData[shortNameObjIndex].time, value.time]
    //       : TheaterData[shortNameObjIndex].time;
    //     const screen = !TheaterData[shortNameObjIndex].screen.includes(
    //       value.screen.screenname
    //     )
    //       ? [...TheaterData[shortNameObjIndex].screen, value.screen.screenname]
    //       : TheaterData[shortNameObjIndex].screen;

    //     const showType = !TheaterData[shortNameObjIndex].screen.includes(
    //       value.screen.screenname
    //     )
    //       ? [
    //           ...TheaterData[shortNameObjIndex].showType,
    //           [...screen, { screen: value.screen.screenname }],
    //         ]
    //       : [{ showType: TheaterData[shortNameObjIndex].screen }];

    //     TheaterData[shortNameObjIndex] = {
    //       ...TheaterData[shortNameObjIndex],
    //       time,
    //       screen,
    //       showType,
    //     };
    //   } else {
    //     tempIdData.push(value.screen.theater.shortform);
    //     const objToStore = {
    //       shortForm: value.screen.theater.shortform,
    //       theaterName: value.screen.theater.name,
    //       theaterLocation: value.screen.theater.location,
    //       theaterAddress: value.screen.theater.address,
    //       time: [value.time],
    //       screen: [value.screen.screenname],
    //       showType: [{ screen: value.screen.screenname }],
    //     };
    //     TheaterData.push(objToStore);
    //   }
    // });

    // })
    console.log("getAllShow", getAllShow);
    res.send(getAllShow);
  } catch (e) {
    console.log("e :: :: :: :: :: ", e);
    return e;
  }
};

export const getOneShow = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    console.log("call");
    const getAllShow = await AppDataSource.createQueryBuilder()
      .select("show")
      .from(Show, "show")
      .leftJoinAndSelect("show.movie", "movie")
      .leftJoinAndSelect("show.screen", "screen")
      .leftJoinAndSelect("screen.theater", "theater")
      .where("movie.slug = :id", { id: id })
      .getMany();

    //  let productVarientData = await AppDataSource.createQueryBuilder()
    //     .select("pv")
    //     .from(Product_Varient, "pv")
    //     .where("pv.id = :id", { id: varientId })
    //     .getOne();
    //   return productVarientData;
    // };

    // export const checkSubscriptionFn= async(subscriptionData: []) => {
    //   let respObj = {
    //     valid: true,
    //     data: []
    //   }
    //   for(let subs of subscriptionData){
    //     const subsData = await AppDataSource
    //       .getRepository(Subscription)
    //       .createQueryBuilder("sub")
    //       .where("sub.id = :id", { id: subs["id"] })
    //       .getOne();

    res.send(getAllShow);
  } catch (e) {
    return e;
  }
};

export const updateShow = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    let id = req.params.id;
    console.log("getId", id);

    const show = await Show.createQueryBuilder()
      .update(Show)
      .set({
        movie: param.movie,
        screen: param.screen,
        time: param.time,
        price: param.price,
      })
      .where("id= :id", { id: id })
      .execute();

    res.send("Show Data Updated");
  } catch (e) {
    return e;
  }
};

export const DeleteShow = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    const show = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Show)
      .where("id = :id", { id: id })
      .execute();

    res.send("Show data Deleted");
  } catch (e) {
    return e;
  }
};
