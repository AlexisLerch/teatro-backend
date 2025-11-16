import express from "express";
import * as theaterController from "./theater.controller";
import { validate } from "../../middlewares/validate";
import { TheaterSchema } from "./theater.validation";

const router = express.Router();

router.post("/", validate(TheaterSchema),theaterController.createTheater);
router.get("/", theaterController.getAllTheaters);

export default router;