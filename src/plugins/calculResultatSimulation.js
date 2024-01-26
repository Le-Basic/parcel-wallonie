import { calculerSurfacesEtEmploisAMobiliser } from "../plugins/getSurfacesNecessaires";

export function calculerResultatSimulation(surfaceNecessaireResponseApi) {
  const {
    surfaces_a_mobiliser,
    emplois_a_mobiliser,
    surfaces_emplois_a_mobiliser_parcel_niveau_1,
  } = calculerSurfacesEtEmploisAMobiliser(surfaceNecessaireResponseApi);
  return {
    surfaceAMobiliser: surfaces_a_mobiliser,
    emploisAMobiliser: emplois_a_mobiliser,
    surfacesEmploisAMobiliser: surfaces_emplois_a_mobiliser_parcel_niveau_1,
  };
}
