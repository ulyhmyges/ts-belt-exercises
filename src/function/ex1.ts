// Exercice 1: Exécuter une fonction après plusieurs appels
// Fonctions à utiliser : after, always, identity
// Objectif : Crée une fonction qui retourne toujours 'Appel réussi' après avoir été appelée 3 fois, puis renvoie la valeur d'origine avec identity.

import { F, pipe } from "@mobily/ts-belt";

// const calls = 3;
export const functionFn1 = (calls: number) => {
  const fun = () => F.after(calls, () => "Appel réussi");
  const f1 = fun();
  const f2 = fun();
  const f3 = fun();
  const f4 = fun();
  return pipe("tt", f4);
};
