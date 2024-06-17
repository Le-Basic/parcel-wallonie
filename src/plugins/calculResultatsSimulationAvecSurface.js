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
  console.log("population", population);
  return {
    population,
    populationAvecBesoinComblé,
  };
}
