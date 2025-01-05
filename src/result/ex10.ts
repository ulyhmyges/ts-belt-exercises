// // Exercice 10: Appliquer une fonction de transformation sur le succès et une fonction sur l'erreur
// Fonctions à utiliser : match, map, recover
// Objectif : Utiliser match pour appliquer une fonction de transformation différente selon que le Result est un succès ou une erreur.
import { R, pipe } from "@mobily/ts-belt";

export const resultFn10 = (value: number | null) => {
  return pipe(
    R.fromNullable<number | null, string>(value, "nullable"),
    R.match<number | null, string, number | null>(
      (nb) => (nb ? nb / 10 : 0),
      (str) => -1
    )
  );
};
