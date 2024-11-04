import {
  fetchSurfaceNecessairePourRegimePersonnalise,
  fetchSurfaceNecessaire,
  fetchSurfaceNecessaireInstitutions,
  fetchSurfacesActuellesPaysage,
  fetchSurfacesActuelles,
  calculerResultatSimulation,
} from "@/plugins/getSurfacesNecessaires";

import { CHOIX_POPULATION_IDS } from "@/config/TypeChoixPopulation";
import { IDS_REGIMES_ALIMENTAIRES } from "@/config/regimeIds";

export async function recalculerResultatSimulation(
  codesTerritoireParcel,
  idRegimeAlimentaire,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes,
  part_relocalisee,
  resultatReference,
  pctDiffRegimePersonnalise
) {
  console.log(
    "recalculerResultatSimulation",
    codesTerritoireParcel,
    idRegimeAlimentaire,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    part_relocalisee,
    resultatReference,
    pctDiffRegimePersonnalise
  );

  let necessaires__url = window.apiURL + "parcel/belgique/surfaces_necessaires";
  let necessaires_paysage__url =
    window.apiURL + "parcel/belgique/surfaces_necessaires_paysage";

  let surfaceNecessaireResponseApi = null;
  let surfaceNecessairePaysageResponseApi = null;
  if (store.state.population.part != CHOIX_POPULATION_IDS.INSTITUTIONS) {
    if (idRegimeAlimentaire === IDS_REGIMES_ALIMENTAIRES.PERSONNALISE) {
      necessaires__url =
        window.apiURL +
        "parcel/belgique/surfaces_necessaires_paysage_regime_personnalise";
      necessaires_paysage__url =
        window.apiURL +
        "parcel/belgique/surfaces_necessaires_regime_personnalise";
      surfaceNecessaireResponseApi =
        await fetchSurfaceNecessairePourRegimePersonnalise(
          necessaires__url,
          codesTerritoireParcel,
          idRegimeAlimentaire,
          pctDiffRegimePersonnalise
        );
      surfaceNecessairePaysageResponseApi =
        await fetchSurfaceNecessairePourRegimePersonnalise(
          necessaires_paysage__url,
          codesTerritoireParcel,
          idRegimeAlimentaire,
          pctDiffRegimePersonnalise
        );
    } else {
      surfaceNecessaireResponseApi = await fetchSurfaceNecessaire(
        necessaires__url,
        codesTerritoireParcel,
        idRegimeAlimentaire
      );
      surfaceNecessairePaysageResponseApi = await fetchSurfaceNecessaire(
        necessaires_paysage__url,
        codesTerritoireParcel,
        idRegimeAlimentaire
      );
    }
  } else if (store.state.population.part == CHOIX_POPULATION_IDS.INSTITUTIONS) {
    necessaires__url =
      window.apiURL + "parcel/belgique/surfaces_necessaires/institutions";
    surfaceNecessaireResponseApi = await fetchSurfaceNecessaireInstitutions(
      necessaires__url,
      idRegimeAlimentaire,
      pctDiffRegimePersonnalise
    );
    necessaires_paysage__url =
      window.apiURL +
      "parcel/belgique/surfaces_necessaires_paysage/institutions";
    // TODO FAIRE POUR la version institution
    surfaceNecessairePaysageResponseApi =
      await fetchSurfaceNecessaireInstitutions(
        necessaires_paysage__url,
        idRegimeAlimentaire,
        pctDiffRegimePersonnalise
      );
  }
  const actuelles_url =
    window.apiURL + "parcel/belgique/surfaces_actuels_produit_par_categorie";

  const actuellespaysage__url =
    window.apiURL + "parcel/belgique/surfaces_actuels_paysage";
  var surfaceActuelleResponseApiPaysage = await fetchSurfacesActuellesPaysage(
    actuellespaysage__url,
    codesTerritoireParcel
  );
  var surfaceActuelleResponseApi = await fetchSurfacesActuelles(
    actuelles_url,
    codesTerritoireParcel
  );

  let resultatSimulation = calculerResultatSimulation(
    surfaceActuelleResponseApi,
    surfaceNecessaireResponseApi,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    surfaceActuelleResponseApiPaysage,
    surfaceNecessairePaysageResponseApi,
    part_relocalisee,
    resultatReference
  );
  return resultatSimulation;
}
