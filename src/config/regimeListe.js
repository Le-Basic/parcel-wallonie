import { IDS_REGIMES_ALIMENTAIRES } from "./regimeIds";

export const regimeListe = [
  {
    nom: "Régime actuel",
    img: require("@/assets/img/parcours/regime-actuel.svg"),
    nomCourt: "actuel",
    libelle: "Régime actuel",
    id: IDS_REGIMES_ALIMENTAIRES.ACTUEL,
    default: true,
  },
  {
    nom: "Diminution d'1/4 des produits animaux",
    img: require("@/assets/img/parcours/regime-quart.svg"),
    nomCourt: "quart",
    libelle: "Diminution d'1/4 des produits animaux",
    id: IDS_REGIMES_ALIMENTAIRES.MOINS_25_POURCENTS,
  },
  {
    nom: "Diminution de moitié des produits animaux",
    img: require("@/assets/img/parcours/regime-moitie.svg"),
    nomCourt: "moitie",
    libelle: "Diminution de moitié des produits animaux",
    id: IDS_REGIMES_ALIMENTAIRES.MOINS_50_POURCENTS,
  },
  {
    nom: "VÉGÉTARIEN",
    img: require("@/assets/img/parcours/regime-vegetarien.svg"),
    nomCourt: "vegetarien",
    libelle: "Végétarien",
    id: IDS_REGIMES_ALIMENTAIRES.VEGETARIEN,
  },
  {
    nom: "VÉGÉTALIEN",
    img: require("@/assets/img/parcours/regime-vegetalien.svg"),
    nomCourt: "vegetalien",
    id: IDS_REGIMES_ALIMENTAIRES.VEGETALIEN,
  },
];

export function getRegimeParId(idRegime) {
  return regimeListe.find((r) => r.id == idRegime);
}
export function getRegimeParNomCourt(nomCourtRegime) {
  return regimeListe.find((r) => r.nomCourt == nomCourtRegime);
}
