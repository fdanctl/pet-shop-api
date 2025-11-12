import { Request, Response } from "express";
import { FindOneOrder, PutOneOrder } from "../services/order";
import { OrderDto } from "../types/order";

export async function GetOneOrder(req: Request, res: Response) {
  const id = req.params.id;
  const response = await FindOneOrder(id);
  res.status(200).json(response);
  return;
}

export async function PostOneOrder(req: Request, res: Response) {
  const body: OrderDto = req.body;

  if (!body?.pid || !body?.uid || body?.pid === "" || body?.uid === "") {
    res.status(400).json({ msg: "missing product id or user id" });
    return;
  }

  const response = await PutOneOrder(body);
  if (!response) {
    return res.status(400).json({ msg: "product not found or out of stock" });
  }
  return res.status(200).json({ orderId: response });
}
