import { Types } from "mongoose";
import { generateSeatLayout, groupShowsByTheatreAndMovie } from "../../utils";
import { IShow } from "./show.interface";
import { ShowModel } from "./show.model";

export const createShow = async (showData: IShow) => {
    const seatLayout = generateSeatLayout();
    const showToCreate = { ...showData, seatLayout };

    return await ShowModel.create(showToCreate);
};

export const getShowByMovieDateLocation = async (movieId: string, date: string) => {
    return ShowModel.find({ movie: movieId, date });
};





export const getShowById = async (id: string) => {
    return await ShowModel.findById(id).populate("movie theater");
}

export const updateSeatStatus = async (showId: string, row: string, seatNumber: number, status: "AVAILABLE" | "BOOKED" | "BLOCKED") => {
    return await ShowModel.updateOne({
        _id: new Types.ObjectId(showId), "seatLayout.row": row, }, 
        {
            $set: {
                "seatLayout.$.seats.$[elem].status": status,
            }    
        },
        {
            arrayFilters: [
                { "elem.number": seatNumber },
            ]
        },
);
}