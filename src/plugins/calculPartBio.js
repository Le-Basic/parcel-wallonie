import store from "../store";

export default function calculerPartBio(valeur, cle, nomAction) {
  let valeurMax = Math.max(valeur, store.state.curseursBioMin[cle]);
  console.log(valeurMax);
  store.dispatch(nomAction, valeurMax);
  return valeurMax;
}

export function CalculPartBioGlobale(
  { partBioCereales, partBioFruits, partBioLegumes, partBioElevage },
  {
    surfacesNecessairesCereales,
    surfacesNecessairesFruits,
    surfacesNecessairesLegumes,
    surfacesNecessairesElevage,
  }
) {
  console.log(partBioCereales, partBioFruits, partBioLegumes, partBioElevage);
  let partBioGlobale =
    (partBioCereales * surfacesNecessairesCereales +
      partBioFruits * surfacesNecessairesFruits +
      partBioLegumes * surfacesNecessairesLegumes +
      partBioElevage * surfacesNecessairesElevage) /
    (Number(surfacesNecessairesCereales) +
      Number(surfacesNecessairesFruits) +
      Number(surfacesNecessairesLegumes) +
      Number(surfacesNecessairesElevage)) /
    100; // 100 to convert to percentage
  return partBioGlobale;
}
