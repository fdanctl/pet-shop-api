type ProductCategories =
  | "food"
  | "toys"
  | "hygiene"
  | "housing"
  | "apparel"
  | "accessories"
  | "travel"
  | "litter";
type Animals = "dog" | "cat" | "fish" | "bird" | "reptile" | "hamsters" | "rabbit";

export interface Product {
  name: string;
  description: string;
  images: string[];
  animal: Animals;
  category: ProductCategories;
  price: number; // em centimos
  stock: number;
  rating: number;
  evaluations: number;
}

export interface ProductDto extends Product{
  _id: string
}
