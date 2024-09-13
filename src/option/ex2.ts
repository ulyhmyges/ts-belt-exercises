// // Exercice 2: Transformer une option à partir d'un prédicat,
// puis extraire une valeur
// Fonctions à utiliser: fromPredicate, map, getWithDefault
// Objectif: Créer une option à partir d'un prédicat (valeur > 50),
// transformer cette option en multipliant la valeur par 2,
// puis obtenir une valeur par défaut de 0 si l'option est vide.

import { A, O, pipe } from "@mobily/ts-belt";

export const value = 75;
export const optionFn2 = (v: number) => {
  return pipe(
    v,
    O.fromPredicate((v) => v > 50),
    O.map((_v) => _v * 2),
    O.getWithDefault(Number(0))
  );
};
