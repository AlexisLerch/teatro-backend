import * as showController from "./show.controller";
import { Router } from "express";
import { validate } from "../../middlewares/validate";


const router = Router();

router.post("/", showController.createShow);
router.get("/", showController.getShowByMovieDateLocation);
router.get("/:id", showController.getShowById);
router.put("/:showId", showController.updateSeatStatus);

export default router;