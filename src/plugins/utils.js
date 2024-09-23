// REFACTO: champ_libelle en paramètre
export function trouverChiffre(
  listeObjets,
  libelle,
  champ,
  champ_libelle = "libelle_parcel_niveau_1",
  chiffreApresVirgule = 0
) {
  const listeFiltree = listeObjets.filter((item) => {
    return item[champ_libelle] === libelle;
  });
  const valeur = listeFiltree.reduce((acc, item) => {
    return acc + item[champ] ?? 0;
  }, 0);
  return parseFloat(valeur).toFixed(chiffreApresVirgule);
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

// permet pour les régimes personnalisés de mapper les coefficients multiplicateurs avec la lisste de produits détaillée de PARCEL
export function MapProduitsCoefficientMultiplicateurRegime(
  ProduitCategorieMapping,
  produitcoefficientMultiplicateur
) {
  let mapping = ProduitCategorieMapping;
  mapping.map((produit) => {
    produit.coefficientMultiplicateur =
      produitcoefficientMultiplicateur[produit.id_categorieRegime];
    return produit;
  });
  return mapping;
}
