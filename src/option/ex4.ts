// // Exercice 4: Vérifier une option, appliquer une transformation, puis obtenir le résultat sous forme nullable
// Fonctions à utiliser: fromNullable, isSome, map, toNullable
// Objectif: Créer une option à partir d'une valeur, vérifier si elle est présente, appliquer une transformation en augmentant de 10%, puis retourner cette option sous forme nullable.

import { A, O, pipe } from "@mobily/ts-belt";

export const value = 1000;
export const optionFn4 = (val: number | undefined) => {
  const isSomeValue = pipe(O.fromNullable(val), O.isSome);
  if (isSomeValue) {
    return pipe(
      O.fromNullable(val),
      O.map((x) => x * 1.1),
      O.toNullable
    );
  }
  return null;
};
