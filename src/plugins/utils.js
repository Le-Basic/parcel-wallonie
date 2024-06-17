// REFACTO: champ_libelle en paramètre
export function trouverChiffre(
  listeObjets,
  libelle,
  champ,
  champ_libelle = "libelle_parcel_niveau_1"
) {
  const objet = listeObjets.find((item) => {
    return item[champ_libelle] === libelle;
  });
  return objet ? objet[champ] : 0;
}

export function AfficherEntier(nombre) {
  return nombre.toLocaleString("fr-FR", {
    maximumFractionDigits: 0,
  });
}

export function FormatterPourcentage(nombre) {
  return nombre.toLocaleString("fr-FR", {
    style: "percent",
    maximumFractionDigits: 0,
  });
}
