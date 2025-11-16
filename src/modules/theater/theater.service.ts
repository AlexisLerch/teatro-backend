import { ITheater } from "./theater.interfaces";
import { TheaterModel } from "./theater.model";

export const createTheater = async (theater: ITheater): Promise<ITheater> => {
    return await TheaterModel.create(theater);
};

export const getAllTheaters = async (): Promise<ITheater[]> => {
    return await TheaterModel.find();
};

export const getTheaterById = async (id: string): Promise<ITheater | null> => {
    return await TheaterModel.findById(id);
};

export const getTheaterByState = async (state: string): Promise<ITheater[]> => {
    return await TheaterModel.find({ state: { $regex: state, $options: "i" } });
};