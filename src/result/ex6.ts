// // Exercice 6: Appliquer une transformation à une erreur et récupérer une option
// Fonctions à utiliser : fromNullable, mapError, toOption
// Objectif : Créer un Result à partir d'une valeur nullable, appliquer une transformation sur l'erreur, puis convertir le résultat en option.

import { R, pipe } from "@mobily/ts-belt";
const value = null;
export const resultFn6 = () => {
  return pipe(
    R.fromNullable(value, "nullable"),
    R.mapError((err) => {
      return `[Error]: ${err}`;
    }),
    R.flip,
    R.toOption
  );
};
