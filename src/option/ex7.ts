// Exercice 7: Transformer une option falsy en valeur par défaut et l'utiliser avec un tuple
// Fonctions à utiliser : fromFalsy, getWithDefault, zip
// Objectif : Créer une option à partir d'une valeur falsy, récupérer la valeur par défaut 'Inconnu', puis l'associer à une autre option pour former un tuple.

import { O, pipe } from "@mobily/ts-belt";

const value = "";
const option2 = O.fromNullable("Validé");
export const optionFn7 = () => {
  return pipe(
    value,
    O.fromFalsy,
    O.getWithDefault<string>("Inconnu"),
    O.fromNullable,
    O.zip(option2)
  );
};
