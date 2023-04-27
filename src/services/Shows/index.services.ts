import { Request, Response } from "express";
import { AppDataSource } from "../../utils/data-source";
import { Show } from "../../db/entities/shows.entity";

export const createShow = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    console.log("param", param);
    let showObj: any = {
      movie: param.movie,
      screen: param.screen,
      time: param.time,
      price: param.price,
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
      .getMany();

    res.send(getAllShow);
  } catch (e) {
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
      .where("show.id = :id", { id: id })
      .getOne();

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
