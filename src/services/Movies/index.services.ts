import e, { Request, Response } from "express";
import { Movie } from "../../db/entities/movies.entity";
import { AppDataSource } from "../../data-source";

export const createMovie = async (req: Request, res: Response) => {
  try {
    let param = req.body;

    let movieObj: any = {
      slug: param.slug,
      title: param.title,
      url: param.url,
      genre: param.genre,
      rating: param.rating,
      director: param.director,
      duration: param.duration,
      flag: param.flag,
    };

    const movie = await Movie.create(movieObj);
    console.log("movie", movie);
    await movie.save();
    res.send(movie);
  } catch (e) {
    return e;
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const getAllData = await AppDataSource.createQueryBuilder()
      .select("movie")
      .from(Movie, "movie")
      .getMany();

    res.send(getAllData);
  } catch (e) {
    return e;
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    let param = req.body;
    let id = req.params.id;
    console.log("getId", id);

    const movie = await Movie.createQueryBuilder()
      .update(Movie)
      .set({
        slug: param.slug,
        title: param.title,
        url: param.url,
        genre: param.genre,
        rating: param.rating,
        director: param.director,
        duration: param.duration,
        flag: param.flag,
      })
      .where("id= :id", { id: id })
      .execute();

    res.send("Movie Data Updated");
  } catch (e) {
    return e;
  }
};

export const DeleteMovie = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    console.log("Movie delted", id);
    const movie = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Movie)
      .where("id = :id", { id: id })
      .execute();

    res.send("Movie Deleted");
  } catch (e) {
    return e;
  }
};
