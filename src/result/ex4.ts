// // Exercice 4: Inverser un Result et gérer l'erreur
// Fonctions à utiliser : flip, mapError, recover
// Objectif : Inverser les valeurs Ok et Error d'un Result,
// transformer l'erreur en ajoutant un message personnalisé, puis récupérer une valeur par défaut.

// const result = R.fromNullable(null, 'Erreur');

import { R, pipe } from "@mobily/ts-belt";
export type Value = string | null;

export const resultFn4 = (value: Value) => {
  // type Value = string | null
  return pipe(
    // ⬇️ const value: Value = 'Joe'
    R.fromNullable(value, "Erreur nullable"),
    R.flip,
    R.mapError((err) => {
      return `[ERROR]: ${err}`;
    }),
    R.getWithDefault<Value, string>("defaultValue")
  );
};
