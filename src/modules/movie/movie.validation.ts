import { z } from "zod";

export const MovieSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1 , "Description is required"),
    duration: z.string(),
    genre: z.array(z.string()).nonempty("Genre is required"),
    releaseDate: z.string().transform(v => new Date(v)),
    language: z.array(z.string()),
    certification: z.string(),
    posterUrl: z.string().url("Invalid URL"),
    rating: z.number().min(0).max(10),
    votes: z.number().min(0),
    format: z.array(z.string()).default(["2D"])
});

export type MovieInput = z.infer<typeof MovieSchema>;