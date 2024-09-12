// // Exercice 9: Aplatir des listes imbriquées
// Utilise Array.flat(pour aplatir la liste imbriquée de profondeur 1).
// Utilise Array.deepFlat(pour aplatir la liste imbriquée de profondeur variable).
// typescriptCopy code

import { Product } from "./type";
import { A, O, pipe } from "@mobily/ts-belt";

export const nestedProducts: Product[][] = [
  [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
  ],
  [
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
  ],
];

export const nestedProducts2: Product[][][] = [
  [
    [
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
    ],
    [
      { name: "Keyboard", price: 75, inStock: true },
      { name: "Monitor", price: 200, inStock: true },
    ],
  ],
  [
    [
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
    ],
    [
      { name: "Keyboard", price: 75, inStock: true },
      { name: "Monitor", price: 200, inStock: true },
    ],
  ],
];
export const ArrayFn9 = <T>(arr: T[][]): readonly T[] => A.flat(arr);

export const ArrayFn91 = (arr: unknown[]) => A.deepFlat(arr);
