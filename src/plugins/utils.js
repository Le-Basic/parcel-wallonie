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
