import { ObjectId } from "mongodb";
import { getMongoCollection } from "../config/mongodb";
import { Product } from "../types/product";

const DB = "pet-shop";
const COL = "products";

export async function ReadAllProducts(): Promise<Product[]> {
  const collection = await getMongoCollection(DB, COL);
  const result = await collection.find().toArray();
  return result;
}

export async function ReadOneProduct(id: ObjectId): Promise<Product> {
  const collection = await getMongoCollection(DB, COL);
  const result = await collection.findOne({ _id: id });
  return result;
}
