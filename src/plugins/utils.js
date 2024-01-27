export function trouverChiffre(listeObjets, libelle, champ) {
    const objet = listeObjets.find((item) => {
        return item.libelle_parcel_niveau_1 === libelle;
    });
    return objet ? objet[champ] : 0;
}
