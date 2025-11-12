import { ObjectId } from "mongodb";
import { ReadAllProducts, ReadOneProduct } from "../models/product";

export async function FindAllProducts() {
 return await ReadAllProducts()
}

export async function FindOneProduct(id: string) {
  const objId= new ObjectId(id);
  return await ReadOneProduct(objId)
}
