import { Request, Response } from "express";
import {
  DeleteScreen,
  createScreen,
  getScreen,
  getSingleScreen,
  updateScreen,
} from "../../services/screen/index.services";

export const createScreenData = async (req: Request, res: Response) => {
  const createScreens: any = await createScreen(req, res);
  res.send(createScreens);
};

export const getScreenData = async (req: Request, res: Response) => {
  const getscreens: any = await getScreen(req, res);
  res.send(getscreens);
};

export const getSingleScreenData = async (req: Request, res: Response) => {
  const getSinglescreens: any = await getSingleScreen(req, res);
  res.send(getSinglescreens);
};

export const upodateScreenData = async (req: Request, res: Response) => {
  const updateSreens: any = await updateScreen(req, res);
  res.send(updateSreens);
};

export const deleteScreenData = async (req: Request, res: Response) => {
  const deleteScreens: any = await DeleteScreen(req, res);
  res.send(deleteScreens);
};
