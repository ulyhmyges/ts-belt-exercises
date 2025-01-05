import { ArrayFn1 } from "./array/ex1";
import { Product } from "./array/type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Headphones", price: 50, inStock: true },
];

import { allInStock } from "./array/ex1";
import { resultFn3 } from "./result/ex3";

console.log("-------------------INDEX----------------------\n");
console.log(resultFn3(100, 200));
console.log(resultFn3(null, 200));

console.log("-------------------INDEX----------------------");
