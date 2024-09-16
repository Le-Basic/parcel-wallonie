export const CATEGORIE_APPORT_IDS = {
  ENERGIE: 0,
  PROTEINES: 1,
  GLUCIDES: 2,
  LIPIDES: 3,
  FIBRES_ALIMENTAIRES: 4,
};

export const CATEGORIE_APPORTS = [
  {
    id: CATEGORIE_APPORT_IDS.ENERGIE,
    nomApport: "Energie Totale",
    listeIcones: ["icon-cereales2", "icon-oleagineux", "icon-viande-rouge"],
    jaugeAlimentaireMinMax: {
      min: 1308.33,
      max: 2942.26,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 1608.33,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 1952.98,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 2274.64,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 2642.26,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 2942.26,
        couleur: "#FF0000",
        classe: "fort",
      },
    ],
  },
  {
    id: CATEGORIE_APPORT_IDS.PROTEINES,
    nomApport: "Protéines",
    listeIcones: [
      "icon-oeuf",
      "icon-viande-blanche",
      "icon-viande-rouge",
      "icon-lait",
      "icon-secs",
    ],
    jaugeAlimentaireMinMax: {
      min: 30.21,
      max: 109.08,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 40.21,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 50,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 71,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 99.08,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 109.08,
        couleur: "#FF0000",
        classe: "fort",
      },
    ],
  },
  {
    id: CATEGORIE_APPORT_IDS.GLUCIDES,
    nomApport: "Glucides",
    listeIcones: ["icon-pdt", "icon-huile", "icon-cereales2", "icon-lait"],
    jaugeAlimentaireMinMax: {
      min: 171.04,
      max: 393.31,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 201.04,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 244.12,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 312.76,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 363.31,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 393.31,
        couleur: "#FF0000",
        classe: "fort",
      },
    ],
  },
  {
    id: CATEGORIE_APPORT_IDS.LIPIDES,
    nomApport: "Lipides",
    listeIcones: ["icon-sucre", "icon-cereales2", "icon-huile"],
    jaugeAlimentaireMinMax: {
      min: 43.61,
      max: 127.43,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 53.61,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 65.1,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 101.1,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 117.43,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 127.43,
        couleur: "#FF0000",
        classe: "fort",
      },
    ],
  },
  {
    id: CATEGORIE_APPORT_IDS.FIBRES_ALIMENTAIRES,
    nomApport: "Fibres",
    listeIcones: ["icon-legumes2", "icon-fruit2"],
    jaugeAlimentaireMinMax: {
      min: 10,
      max: 30,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 15,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 25,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 30,
        couleur: "#8BC903",
        classe: "correct",
      },
    ],
  },
];

export function getListeIconesProduits(nomApport) {
  return CATEGORIE_APPORTS.find(
    (categorie) => categorie.nomApport === nomApport
  ).listeIcones;
}

export function getCategoriesJaugeAlimentaire(nomApport) {
  console.log(
    nomApport,
    CATEGORIE_APPORTS.find((categorie) => categorie.id === nomApport)
      .categorieJaugeAlimentaire
  );
  return CATEGORIE_APPORTS.find((categorie) => categorie.id === nomApport)
    .categorieJaugeAlimentaire;
}

export function getMinMaxJaugeAlimentaire(nomApport) {
  return CATEGORIE_APPORTS.find((categorie) => categorie.id === nomApport)
    .jaugeAlimentaireMinMax;
}
