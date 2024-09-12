import { ArrayFn2 } from "./array/ex2";
import { Product } from "./array/type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Headphones", price: 50, inStock: true },
];

console.log(ArrayFn2(products));
