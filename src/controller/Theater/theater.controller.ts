import { Request, Response } from "express";
import {
  DeleteMovie,
  createTheater,
  getAllTheater,
  updateTheater,
} from "../../services/Theaters/index.services";

export const createTheaterData = async (req: Request, res: Response) => {
  const createTheaters: any = await createTheater(req, res);
  res.send(createTheaters);
};

export const getAllTheaterData = async (req: Request, res: Response) => {
  const getTheaters: any = await getAllTheater(req, res);
  res.send(getTheaters);
};

export const updateTheaterData = async (req: Request, res: Response) => {
  const updateTheaters: any = await updateTheater(req, res);
  res.send(updateTheaters);
};

export const deleteTheaterData = async (req: Request, res: Response) => {
  const deleteMovies: any = await DeleteMovie(req, res);
  res.send(deleteMovies);
};
