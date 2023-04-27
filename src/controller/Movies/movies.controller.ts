import {
  DeleteMovie,
  getAllMovies,
  updateMovie,
} from "../../services/Movies/index.services";
import { Request, Response } from "express";
import { createMovie } from "../../services/Movies/index.services";

export const createMovieDta = async (req: Request, res: Response) => {
  const createMovies: any = await createMovie(req, res);
  res.send(createMovies);
};

export const getAllMoviesData = async (req: Request, res: Response) => {
  const getMovies: any = await getAllMovies(req, res);
  res.send(getMovies);
};

export const updateMovieData = async (req: Request, res: Response) => {
  const updateMovies: any = await updateMovie(req, res);
  res.send(updateMovies);
};

export const deleteMovieData = async (req: Request, res: Response) => {
  const deleteMovies: any = await DeleteMovie(req, res);
  res.send(deleteMovies);
};
