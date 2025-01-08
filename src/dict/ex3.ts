// Exercice 3: Filtrer les propriétés numériques d'un objet
// Fonctions à utiliser : filter, values
// Objectif : Filtrer l'objet obj pour ne garder que les propriétés dont la valeur est un nombre, puis récupérer les valeurs des propriétés restantes.

import { D, pipe, G } from "@mobily/ts-belt";

type To = {
  name: string | undefined;
  price: number | undefined;
  stock: boolean | undefined;
  category: string | undefined;
};
type Ti = {
  price: number;
};
const obj = {
  name: "Laptop",
  price: 1000,
  stock: true,
  category: "Electronics",
};
export const DictFn3 = () => {
  const dico = Object.entries(obj)
    .filter(([, value]) => G.isNumber(value))
    .reduce<Record<string, number>>((acc, [key, value]) => {
      acc[key] = value as number;
      return acc;
    }, {});

  return pipe(dico, D.values);
};
