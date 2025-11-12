import { ObjectId } from "mongodb";
import { getMongoCollection } from "../config/mongodb";
import { Product } from "../types/product";
import { Order } from "../types/order";

const DB = "pet-shop";
const COL = "orders";

export async function ReadOneOrder(id: ObjectId): Promise<Product[]> {
  const collection = await getMongoCollection(DB, COL);
  const result = await collection.findOne({ _id: id });
  return result;
}

export async function InsertOneOrder(obj: Order): Promise<string> {
  const collection = await getMongoCollection(DB, COL);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}
