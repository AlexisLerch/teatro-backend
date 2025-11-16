export interface IMovie {
    _id?: string;
    title: string;
    description: string;
    genre: string[];
    relaseDate: Date;
    language: string;
    certification: string;
    posterUrl: string;
    rating: number;
    votes: number;
    format?: string[];
}