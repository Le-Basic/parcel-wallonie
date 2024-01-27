export function calculerResultatSimulation(
  surfaceActuelleReponseApi,
  surfaceNecessaireResponseApi,
  partBioElevage,
  partPertes
) {
  const {
    surfaces_a_mobiliser,
    emplois_a_mobiliser,
    surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfaces_actuelles,
    surfaces_actuelles_parcel_niveau_1,
  } = calculerSurfacesEtEmploisAMobiliser(
    surfaceActuelleReponseApi,
    surfaceNecessaireResponseApi,
    partBioElevage,
    partPertes
  );
  const potentielNourricier = Math.round(
    (surfaces_actuelles * 100) / surfaces_a_mobiliser
  );

  return {
    surfaceAMobiliser: surfaces_a_mobiliser,
    emploisAMobiliser: emplois_a_mobiliser,
    surfacesEmploisAMobiliser: surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfacesActuelles: surfaces_actuelles,
    surfacesActuellesParcelNiveau1: surfaces_actuelles_parcel_niveau_1,
    potentielNourricier: potentielNourricier,
  };
}

function calculerSurfacesEtEmploisAMobiliser(
  surfaceActuelleResponseApi,
  surfaceNecessaireResponseApi,
  partBioElevage,
  partPertes
) {
  const surfaceNecessaireBioElevage = surfaceNecessaireResponseApi
    .filter((item) => {
      return item.libelle_parcel_niveau_1 === "Elevage";
    })
    .map((item) => {
      return item.surface_necessaire_bio;
    })
    .reduce((somme, surface) => somme + surface, 0);

  const surfaces_a_mobiliser =
    ((partBioElevage * surfaceNecessaireBioElevage +
      (1 - partBioElevage) * surfaceNecessaireBioElevage) *
      (1 - 0.18)) /
    (1 - 0.18 * partPertes);

  const emplois_a_mobiliser = surfaceNecessaireResponseApi
    .map((item) => {
      return item.emploi_conventionnel;
    })
    .reduce((somme, emploi) => somme + emploi, 0);
  const surfaces_emplois_a_mobiliser_parcel_niveau_1 = [];
  surfaceNecessaireResponseApi.reduce(function (res, valeur) {
    if (!res[valeur.libelle_parcel_niveau_1]) {
      res[valeur.libelle_parcel_niveau_1] = {
        libelle_parcel_niveau_1: valeur.libelle_parcel_niveau_1,
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
        emploi_conventionnel: 0,
        emploi_bio: 0,
        part_surfaces_a_mobiliser: 0,
        part_emplois_a_mobiliser: 0,
      };
      surfaces_emplois_a_mobiliser_parcel_niveau_1.push(
        res[valeur.libelle_parcel_niveau_1]
      );
    }
    res[valeur.libelle_parcel_niveau_1].surface_necessaire_conventionnel +=
      valeur.surface_necessaire_conventionnel;
    res[valeur.libelle_parcel_niveau_1].surface_necessaire_bio +=
      valeur.surface_necessaire_bio;
    res[valeur.libelle_parcel_niveau_1].emploi_conventionnel +=
      valeur.emploi_conventionnel;
    res[valeur.libelle_parcel_niveau_1].emploi_bio += valeur.emploi_bio;
    res[valeur.libelle_parcel_niveau_1].part_surfaces_a_mobiliser +=
      valeur.surface_necessaire_conventionnel / surfaces_a_mobiliser;
    res[valeur.libelle_parcel_niveau_1].part_emplois_a_mobiliser +=
      valeur.emploi_conventionnel / emplois_a_mobiliser;
    return res;
  }, {});

  const surfaces_actuelles = surfaceActuelleResponseApi
    .map((item) => {
      return item.sau_ha;
    })
    .reduce((somme, surface) => somme + surface, 0);
  const surfaces_actuelles_parcel_niveau_1 = surfaceActuelleResponseApi.map(
    (item) => ({
      ...item,
      part_surfaces_actuelles: item.sau_ha / surfaces_actuelles,
    })
  );
  return {
    surfaces_a_mobiliser: surfaces_a_mobiliser,
    emplois_a_mobiliser: emplois_a_mobiliser,
    surfaces_emplois_a_mobiliser_parcel_niveau_1:
      surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfaces_actuelles: surfaces_actuelles,
    surfaces_actuelles_parcel_niveau_1: surfaces_actuelles_parcel_niveau_1,
  };
}
