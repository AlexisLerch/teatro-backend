import { NextFunction, Response, Request } from "express";
import * as MovieService from "./movie.service";

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movie = await MovieService.createMovie(req.body);
        res.status(201).json({ movie });
    } catch (error) {
        next(error);
    }
};

export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movies = await MovieService.getAllMovies();
        res.status(200).json({ movies });
    } catch (error) {
        next(error);
    }
};

export const getMovieById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movie = await MovieService.getMovieById(req.params.id);
        res.status(200).json({ movie });
    } catch (error) {
        next(error);
    }
};

export const getTopMovieByVotes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movies = await MovieService.getTopMovieByVotes(5);
        res.status(200).json({ movies });
    } catch (error) {
        next(error);
    }
};