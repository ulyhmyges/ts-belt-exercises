import { Product } from "./type";
import { A, pipe } from "@mobily/ts-belt";

// Exercice 6: Comparer des listes et tester l'inclusion
// Utilise Array.eq(pour comparer deux listes de produits).
// Utilise Array.includes(pour vérifier si un produit spécifique est inclus dans la liste)

export const products1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
export const products2: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn6 = <T = Product>(x: T[], y: T[]) =>
  pipe(
    x,
    A.eq(y, (_x, _y) => _x === _y)
  );

export const ArrayFn61 = <T>(x: T[], value: T) => A.includes(x, value);
