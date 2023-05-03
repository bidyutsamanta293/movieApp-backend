import { Request, Response } from "express";
import {
  DeleteShow,
  createShow,
  getOneShow,
  getShow,
  getShowFilter,
  updateShow,
} from "../../services/Shows/index.services";

export const createShowData = async (req: Request, res: Response) => {
  const createShows: any = await createShow(req, res);
  res.send(createShows);
};

export const getShowsData = async (req: Request, res: Response) => {
  const getShows: any = await getShow(req, res);
  res.send(getShows);
};

export const getOneShowData = async (req: Request, res: Response) => {
  const getoneShow: any = await getOneShow(req, res);
  res.send(getoneShow);
};

export const updateShowData = async (req: Request, res: Response) => {
  const updateShows: any = await updateShow(req, res);
  res.send(updateShows);
};

export const deleteShowData = async (req: Request, res: Response) => {
  const deleteShows: any = await DeleteShow(req, res);
  res.send(deleteShows);
};

//Filter Shows
export const filterShowData = async (req: Request, res: Response) => {
  const filterShows: any = await getShowFilter(req, res);
  res.send(filterShows);
};
