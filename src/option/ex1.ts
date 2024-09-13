// // Exercice 1: Vérifier et filtrer une option,
// puis obtenir une valeur par défaut
// Fonctions à utiliser: fromNullable, filter, getWithDefault
// Objectif: Créer une option à partir de 'Laptop',
// filtrer les options contenant la lettre 'L',
// puis obtenir la valeur par défaut 'No Item' si l'option est vide.

import { A, O, pipe } from "@mobily/ts-belt";

export const item = "Laptop";
export const optionFn11 = (item: string) =>
  O.getWithDefault(
    pipe(
      item,
      O.fromNullable,
      O.filter((x) => O.contains(x, "L"))
    ),
    "No Item"
  );

export const optionFn1 = (item: string) => {
  return O.getWithDefault(
    pipe(
      item,
      O.fromNullable,
      O.filter((e) => e.includes("L"))
    ),
    "No Item"
  );
};

export const optionFn12 = (item: string) =>
  pipe(
    item,
    O.fromNullable,
    O.filter((e) => e.includes("L")),
    O.getWithDefault<string>("No Item")
  );
