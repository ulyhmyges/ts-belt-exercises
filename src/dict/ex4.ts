// Exercice 4: Filtrer les propriétés dont le nom commence par une lettre spécifique
// Fonctions à utiliser : filterWithKey, keys
// Objectif : Filtrer l'objet obj pour ne conserver que les propriétés dont le nom commence par 'p', puis récupérer les clés restantes.

import { D, pipe, G, S } from "@mobily/ts-belt";

const obj = { price: 1000, stock: true, brand: "Dell", processor: "Intel" };
export const DictFn4 = () => {
  return pipe(
    obj,
    D.filterWithKey((k, _v) => S.startsWith(k, "p")),
    D.keys
  );
};
