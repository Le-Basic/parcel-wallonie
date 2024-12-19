export const INSTITUTIONS_IDS = {
  MATERNELLES: 1,
  PRIMAIRES: 2,
  COLLEGES: 3,
  LYCEES: 4,
  UNIVERSITES: 5,
  ENTREPRISES: 6,
  MAISONS_DE_RETRAITE: 7,
  HOPITAUX: 8,
  AUTRES: 9,
};

export const INSTITUTIONS = [
  {
    id: INSTITUTIONS_IDS.MATERNELLES,
    libelle_pluriel: "Maternelle(s)",
    libelle_singulier: "Maternelle",
    nb_repas: "Déjeuner , 180 jours par an",
  },
  {
    id: INSTITUTIONS_IDS.PRIMAIRES,
    libelle_pluriel: "Primaire(s)",
    libelle_singulier: "Primaire",
    nb_repas: "Déjeuner , 180 jours par an",
  },
  {
    id: INSTITUTIONS_IDS.COLLEGES,
    libelle_pluriel: "Secondaire(s)",
    libelle_singulier: "Secondaire",
    nb_repas: "Déjeuner , 180 jours par an",
  },
  // {
  //   id: INSTITUTIONS_IDS.LYCEES,
  //   libelle_pluriel: "Lycée(s)",
  //   libelle_singulier: "Lycée",
  // },
  {
    id: INSTITUTIONS_IDS.UNIVERSITES,
    libelle_pluriel: "Université(s) et Haute(s) école(s)",
    libelle_singulier: "Université et Haute école",
    nb_repas: "Déjeuner , 170 jours par an",
  },
  {
    id: INSTITUTIONS_IDS.ENTREPRISES,
    libelle_pluriel: "Entreprise(s)",
    libelle_singulier: "Entreprise",
    nb_repas: "Déjeuner , 216 jours par an",
  },
  {
    id: INSTITUTIONS_IDS.MAISONS_DE_RETRAITE,
    libelle_pluriel: "Maison(s) de retraite",
    libelle_singulier: "Maison de retraite",
    nb_repas: "3 repas par jour, 365 jours par an",
  },
  {
    id: INSTITUTIONS_IDS.HOPITAUX,
    libelle_pluriel: "Hôpital(aux)",
    libelle_singulier: "Hôpital",
    nb_repas: "3 repas par jour, 365 jours par an",
  },
  {
    id: INSTITUTIONS_IDS.AUTRES,
    libelle_pluriel: "Autre (Prison(s)...)",
    libelle_singulier: "Autre",
    nb_repas: "3 repas par jour, 365 jours par an",
  },
];
