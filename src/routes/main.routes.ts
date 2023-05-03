import express, { Request, Response } from "express";
import {
  createMovieDta,
  deleteMovieData,
  getAllMoviesData,
  updateMovieData,
} from "../controller/Movies/movies.controller";
import {
  createTheaterData,
  deleteTheaterData,
  getAllTheaterData,
  updateTheaterData,
} from "../controller/Theater/theater.controller";
import {
  createScreenData,
  deleteScreenData,
  getScreenData,
  getSingleScreenData,
  upodateScreenData,
} from "../controller/Screen/screen.controller";
import {
  createShowData,
  deleteShowData,
  filterShowData,
  getOneShowData,
  getShowsData,
  updateShowData,
} from "../controller/Shows/shows.controller";
import { createUserData } from "../controller/User/user.controller";
import {
  createBookingData,
  getAllBookingData,
} from "../controller/Booking/booking.controller";
import {
  createScreenSeatData,
  getOneScreenSeatData,
} from "../controller/ScreenSeat/screenseat.controller";
import {
  createBookingSeatData,
  getBookingSeatData,
  getSingleSeatData,
} from "../controller/Seat/seat.controller";

const router = express.Router();

//Movie
router.post("/createmovie", createMovieDta);
router.get("/movie", getAllMoviesData);
router.patch("/updatemovie/:id", updateMovieData);
router.delete("/deletemovie/:id", deleteMovieData);

//THEATER
router.post("/createtheater", createTheaterData);
router.get("/theaters", getAllTheaterData);
router.patch("/updatetheater/:id", updateTheaterData);
router.delete("/deletetheater/:id", deleteTheaterData);

//Screen
router.post("/createscreen", createScreenData);
router.get("/screens", getScreenData);
router.get("/screen/:id", getSingleScreenData);
router.patch("/editscreen/:id", upodateScreenData);
router.delete("/deletescreen/:id", deleteScreenData);

//SHOWS
router.post("/createShow", createShowData);
router.get("/getshows", getShowsData);
router.get("/getshow/:id", getOneShowData);
router.patch("/update_show/:id", updateShowData);
router.delete("/delete_show/:id", deleteShowData);

//Filter Shows
router.get("/filterShows", filterShowData);

//User
router.post("/create_user", createUserData);

//Booking
router.post("/booking", createBookingData);
router.get("/allBooking", getAllBookingData);

//SCREEN_SEAT
router.post("/add_seats", createScreenSeatData);
router.get(
  "/get_single_screen_seats/:theaterId/:screenId",
  getOneScreenSeatData
);

//SEAT
router.post("/seat_book", createBookingSeatData);
router.get("/get_seat_book", getBookingSeatData);
router.get(
  "/get_single_theater_screen_data/:theaterId/:screenId",
  getSingleSeatData
);

export default router;
