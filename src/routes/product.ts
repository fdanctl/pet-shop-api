import express from "express";
import { GetAllProducts, GetOneProduct } from "../controllers/product";

export const router = express.Router();

router.get("/", GetAllProducts);
// router.post("/", ); // insert
router.get("/:id", GetOneProduct);
// router.post("/:id", ); // insert avaluation
