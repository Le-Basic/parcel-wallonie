import { calculerResultatSimulation } from "./calculResultatSimulation";
export function calculerResultatSimulationAvecSurface(
  surfaceActuelleReponseApi,
  surfaceNecessaireResponseApi,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes,
  surfaceActuelleResponseApiPaysage,
  surfaceNecessairePaysageResponseApi,
  part_relocalisee,
  surfaceMobilisable,
  population
) {
  console.log("commmencer", population);
  const resultat_simulation = calculerResultatSimulation(
    surfaceActuelleReponseApi,
    surfaceNecessaireResponseApi,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    surfaceActuelleResponseApiPaysage,
    surfaceNecessairePaysageResponseApi,
    part_relocalisee
  );
  //    aggreger les surfaces actuelles et necessaires
  const surfacesAMobiliser = resultat_simulation.surfaceAMobiliser;
  const pctMobilisables = surfaceMobilisable / surfacesAMobiliser;
  const populationAvecBesoinComblé = Math.round(population * pctMobilisables);
  const surfacesEmploisAMobiliser =
    resultat_simulation.surfacesEmploisAMobiliser.map((culture) => {
      return {
        libelle_parcel_niveau_1: culture.libelle_parcel_niveau_1,
        libelle_parcel_niveau_2: culture.libelle_parcel_niveau_2,
        libelle_parcel_niveau_3: culture.libelle_parcel_niveau_3,
        surface_a_mobiliser: culture.surface_a_mobiliser * pctMobilisables,
        part_surface_a_mobiliser: culture.part_surface_a_mobiliser,
      };
    });
  return {
    population,
    populationAvecBesoinComblé,
    surfacesEmploisAMobiliser,
  };
}
