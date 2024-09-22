// // Exercice 2: Manipuler une valeur nullable et récupérer une valeur par défaut
// Fonctions à utiliser: fromNullable, isOk, getWithDefault, map
// Objectif: Créer un Result à partir d'une valeur nullable, vérifier si c'est un succès,
// appliquer une transformation sur la valeur, puis récupérer une valeur par défaut si l'option est vide.

import { A, O, pipe, R } from "@mobily/ts-belt";

export const value = null;
export const resultFn2 = (val: any) => {
  if (pipe(R.fromNullable(val, "error"), R.isOk)) {
    return pipe(
      R.Ok(val),
      R.map((x) => `${x} toto`),
      R.getWithDefault(String("defaultValue"))
    );
  } else {
    return pipe(
      R.fromNullable(val, "error"),
      R.getWithDefault(String("defaultValue"))
    );
  }
};
