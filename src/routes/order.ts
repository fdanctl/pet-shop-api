import express from "express";
import { GetOneOrder, PostOneOrder } from "../controllers/order";

export const router = express.Router();

router.post("/", PostOneOrder);
router.get("/:id", GetOneOrder);
