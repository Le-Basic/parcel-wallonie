import { calculerSurfacesEtEmploisAMobiliser } from "../plugins/getSurfacesNecessaires";

export function calculerResultatSimulation(
  surfaceActuelleReponseApi,
  surfaceNecessaireResponseApi
) {
  const {
    surfaces_a_mobiliser,
    emplois_a_mobiliser,
    surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfaces_actuelles,
    surfaces_actuelles_parcel_niveau_1,
  } = calculerSurfacesEtEmploisAMobiliser(
    surfaceActuelleReponseApi,
    surfaceNecessaireResponseApi
  );
  return {
    surfaceAMobiliser: surfaces_a_mobiliser,
    emploisAMobiliser: emplois_a_mobiliser,
    surfacesEmploisAMobiliser: surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfacesActuelles: surfaces_actuelles,
    surfacesActuellesParcelNiveau1: surfaces_actuelles_parcel_niveau_1,
  };
}
