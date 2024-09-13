// // Exercice 3: Associer deux options et appliquer une fonction
// Fonctions à utiliser: fromNullable, zipWith, map
// Objectif: Associer deux options, puis utiliser une fonction pour ajouter les deux valeurs ensemble,
// et enfin transformer le résultat pour afficher une chaîne.

import { A, O, pipe } from "@mobily/ts-belt";

export const value1 = 100;
export const value2 = 50;
export const optionFn3 = (val1: number, val2: number) =>
  pipe(
    O.fromNullable(val1),
    O.zipWith(O.fromNullable(val2), (arg1: number, arg2: number): number[] => [
      arg1,
      arg2,
    ]),
    O.map((n) => `${n[0]}.${n[1]}`),
    O.getWithDefault(String(""))
  );
