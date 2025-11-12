import { ObjectId } from "mongodb";
import { InsertOneOrder, ReadOneOrder } from "../models/order";
import { FindOneProduct } from "./product";
import { Order, OrderDto } from "../types/order";

export async function PutOneOrder(order: OrderDto) {
  const product = await FindOneProduct(order.pid);
  if (!product || product.stock <= 0) {
    return;
  }
  const obj: Order = { ...order, status: "confirmed", startDate: new Date() };
  return await InsertOneOrder(obj);
}

export async function FindOneOrder(id: string) {
  const objId = new ObjectId(id);
  return await ReadOneOrder(objId);
}
