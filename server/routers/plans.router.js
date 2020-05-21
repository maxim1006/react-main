import * as express from "express";
import { plans } from "../mocks";

export const plansRouter = express.Router();

plansRouter.get("/", (req, res) => {
  res.status(200).json(plans);
});
