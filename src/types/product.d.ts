type ProductCategories =
  | "food"
  | "toys"
  | "grooming"
  | "housing"
  | "apparel"
  | "travel"
  | "litter";
type Animals = "dog" | "cat" | "fish" | "bird" | "reptile" | "hamsters";

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
