// Exercice 6: Récupérer la valeur d'une clé avec sécurité
// Fonctions à utiliser : get, getUnsafe
// Objectif : Récupérer la valeur de la clé 'price' de manière sécurisée (avec get),
// puis tenter de récupérer la valeur de la clé 'stock' sans sécurité (avec getUnsafe).

import { pipe, D, O } from "@mobily/ts-belt";

type dic = { name: string; price: number; stock?: boolean };

export const DictFn6 = (obj: dic) => {
  const opt1 = D.get(obj, "price");
  const opt2 = D.getUnsafe(obj, "stock");
  return pipe(opt1, O.zip(opt2));
};
