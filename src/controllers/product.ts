import { Request, Response } from "express";
import { FindAllProducts, FindOneProduct } from "../services/product";

export async function GetAllProducts(
  _req: Request,
  res: Response,
) {
  const response = await FindAllProducts();
  res.status(200).json(response);
  return;
}

export async function GetOneProduct(
  req: Request,
  res: Response,
) {
  const id = req.params.id;
  const response = await FindOneProduct(id);
  res.status(200).json(response);
  return;
}
