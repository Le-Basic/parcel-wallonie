export const CATEGORIE_APPORTS = [
  {
    nomApport: "Energie Totale",
    listeIcones: ["icon-cereales2", "icon-oleagineux", "icon-viande-rouge"],
  },
  {
    nomApport: "Protéines",
    listeIcones: [
      "icon-oeuf",
      "icon-viande-blanche",
      "icon-viande-rouge",
      "icon-lait",
      "icon-secs",
    ],
  },
  {
    nomApport: "Glucides",
    listeIcones: ["icon-pdt", "icon-huile", "icon-cereales2", "icon-lait"],
  },
  {
    nomApport: "Lipides",
    listeIcones: ["icon-sucre", "icon-cereales2", "icon-huile"],
  },
  {
    nomApport: "Fibres",
    listeIcones: ["icon-legumes2", "icon-fruit2"],
  },
];

export function getListeIconesProduits(nomApport) {
  return CATEGORIE_APPORTS.find(
    (categorie) => categorie.nomApport === nomApport
  ).listeIcones;
}
