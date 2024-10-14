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
      min: 1300.33,
      max: 2600.26,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 1635,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 1731,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 2115,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 2291,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 2600.26,
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
      min: 55,
      max: 94,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 61,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 67,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 82,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 88,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 94,
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
      min: 191,
      max: 314,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 215,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeurMax: 227,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeurMax: 278,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 290,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 314,
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
      min: 35,
      max: 75,
    },
    categorieJaugeAlimentaire: [
      {
        nom: "Fort déficit",
        valeurMax: 40,
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
        valeurMax: 60,
        couleur: "#8BC903",
        classe: "correct",
      },
      {
        nom: "Léger excédent",
        valeurMax: 70,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Fort Excédent",
        valeurMax: 75,
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
