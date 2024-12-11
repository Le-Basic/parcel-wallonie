import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "../config/categorieProduitsPotentielNourricier";
export function calculerResultatSimulation(
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
  donneesReference
) {
  const {
    surfaces_a_mobiliser,
    emplois_a_mobiliser,
    consommation_kg,
    emission_kg_co2e,
    empreinte_eau_bleue_m3,
    surfaces_ha_soja_importes,
    abondances_especes,
    richesses_des_sols,
    surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfaces_actuelles,
    surfaces_actuelles_parcel_niveau_1,
    surfaces_actuelles_paysage,
    surfaces_a_mobiliser_paysage,
  } = calculerSurfacesEtEmploisAMobiliser(
    surfaceActuelleReponseApi,
    surfaceNecessaireResponseApi,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    //TODO RENAME CELUI CI
    surfaceActuelleResponseApiPaysage,
    surfaceNecessairePaysageResponseApi,
    part_relocalisee
  );
  const potentielNourricier = Math.round(
    (surfaces_actuelles * 100) / surfaces_a_mobiliser
  );
  let pct_difference_emission_kg_co2e = null;
  if (donneesReference?.emission_kg_co2e) {
    pct_difference_emission_kg_co2e =
      emission_kg_co2e / donneesReference.emission_kg_co2e - 1;
  }

  return {
    surfaceAMobiliser: surfaces_a_mobiliser,
    emploisAMobiliser: emplois_a_mobiliser,
    consommation_kg: consommation_kg,
    emission_kg_co2e: emission_kg_co2e,
    empreinte_eau_bleue_m3: empreinte_eau_bleue_m3,
    surfaces_ha_soja_importes: surfaces_ha_soja_importes,
    abondances_especes: abondances_especes,
    richesses_des_sols: richesses_des_sols,
    surfacesEmploisAMobiliser: surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfacesActuelles: surfaces_actuelles,
    surfacesActuellesParcelNiveau1: surfaces_actuelles_parcel_niveau_1,
    potentielNourricier: potentielNourricier,
    surfacesActuellesPaysage: surfaces_actuelles_paysage,
    surfaceNecessairePaysage: surfaces_a_mobiliser_paysage,
    pctDifferenceEmissionKGCo2: pct_difference_emission_kg_co2e,
  };
}

function calculerSurfacesEtEmploisAMobiliser(
  surfaceActuelleResponseApi,
  surfaceNecessaireResponseApi,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes,
  surfaceActuelleResponseApiPaysage,
  surfaceNecessairePaysageResponseApi,
  part_relocalisee
) {
  let surfaces_emplois_a_mobiliser_parcel_niveau_1 = [];
  surfaceNecessaireResponseApi.reduce(function (res, valeur) {
    if (!res[valeur.libelle_parcel_niveau_3]) {
      res[valeur.libelle_parcel_niveau_3] = {
        libelle_parcel_niveau_1: valeur.libelle_parcel_niveau_1,
        libelle_parcel_niveau_2: valeur.libelle_parcel_niveau_2,
        libelle_parcel_niveau_3: valeur.libelle_parcel_niveau_3,
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
        emploi_conventionnel: 0,
        emploi_bio: 0,
        surface_a_mobiliser: 0,
        emplois_a_mobiliser: 0,
        consommation_kg: 0,
        emission_kg_co2e: 0,
        empreinte_eau_bleue_m3: 0,
        surfaces_ha_soja_importes: 0,
        abondances_especes: 0,
        richesses_des_sols: 0,
      };
      surfaces_emplois_a_mobiliser_parcel_niveau_1.push(
        res[valeur.libelle_parcel_niveau_3]
      );
    }
    res[valeur.libelle_parcel_niveau_3].surface_necessaire_conventionnel +=
      valeur.surface_necessaire_conventionnel;

    res[valeur.libelle_parcel_niveau_3].surface_necessaire_bio +=
      valeur.surface_necessaire_bio;
    res[valeur.libelle_parcel_niveau_3].emploi_conventionnel +=
      valeur.emploi_conventionnel;
    res[valeur.libelle_parcel_niveau_3].emploi_bio += valeur.emploi_bio;
    res[valeur.libelle_parcel_niveau_3].consommation_kg +=
      (valeur.consommation_kg * (1 - 0.18)) /
      (1 - 0.18 * (1 - partPertes / 100));
    res[valeur.libelle_parcel_niveau_3].surface_a_mobiliser +=
      calculSurfAMobiliser(
        valeur.libelle_parcel_niveau_1,
        valeur.surface_necessaire_bio,
        valeur.surface_necessaire_conventionnel,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes,
        part_relocalisee
      );
    res[valeur.libelle_parcel_niveau_3].emplois_a_mobiliser +=
      calculSurfAMobiliser(
        valeur.libelle_parcel_niveau_1,
        valeur.emploi_bio,
        valeur.emploi_conventionnel,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes,
        part_relocalisee
      );

    res[valeur.libelle_parcel_niveau_3].emission_kg_co2e +=
      calculSurfAMobiliser(
        valeur.libelle_parcel_niveau_1,
        valeur.emission_kg_co2e_bio,
        valeur.emission_kg_co2e,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes,
        100
      );

    // TODO: RELOC A 100%
    res[valeur.libelle_parcel_niveau_3].surfaces_ha_soja_importes +=
      calculSurfAMobiliser(
        valeur.libelle_parcel_niveau_1,
        valeur.surfaces_ha_soja_importes,
        valeur.surfaces_ha_soja_importes,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes,
        100
      );
    res[valeur.libelle_parcel_niveau_3].empreinte_eau_bleue_m3 +=
      valeur.empreinte_eau_bleue_m3;
    res[valeur.libelle_parcel_niveau_3].abondances_especes =
      valeur.abondance_des_especes_ratio_impact_bio;
    res[valeur.libelle_parcel_niveau_3].richesses_des_sols =
      valeur.richesse_des_sols_ratio_impact_bio;
    return res;
  }, {});

  const surfaces_a_mobiliser = surfaces_emplois_a_mobiliser_parcel_niveau_1
    .map((item) => {
      return item.surface_a_mobiliser;
    })
    .reduce((somme, surface_a_mobiliser) => somme + surface_a_mobiliser, 0);

  const emplois_a_mobiliser = surfaces_emplois_a_mobiliser_parcel_niveau_1
    .map((item) => {
      return item.emplois_a_mobiliser;
    })
    .reduce((somme, emplois_a_mobiliser) => somme + emplois_a_mobiliser, 0);

  const consommation_kg = surfaces_emplois_a_mobiliser_parcel_niveau_1
    .map((item) => {
      return item.consommation_kg;
    })
    .reduce((somme, consommation_kg) => somme + consommation_kg, 0);

  const emission_kg_co2e = surfaces_emplois_a_mobiliser_parcel_niveau_1
    .map((item) => {
      return item.emission_kg_co2e;
    })
    .reduce((somme, emission_kg_co2e) => somme + emission_kg_co2e, 0);

  const empreinte_eau_bleue_m3 = surfaces_emplois_a_mobiliser_parcel_niveau_1
    .map((item) => {
      return item.empreinte_eau_bleue_m3;
    })
    .reduce(
      (somme, empreinte_eau_bleue_m3) => somme + empreinte_eau_bleue_m3,
      0
    );

  const surfaces_ha_soja_importes = surfaces_emplois_a_mobiliser_parcel_niveau_1
    .map((item) => {
      return item.surfaces_ha_soja_importes;
    })
    .reduce(
      (somme, surfaces_ha_soja_importes) => somme + surfaces_ha_soja_importes,
      0
    );

  const abondances_especes =
    surfaces_emplois_a_mobiliser_parcel_niveau_1
      .map((item) => {
        switch (item.libelle_parcel_niveau_1) {
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle:
            return (
              partBioElevage *
                item.surface_a_mobiliser *
                item.abondances_especes +
              (100 - partBioElevage) * item.surface_a_mobiliser
            );
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle:
            return (
              partBioFruits *
                item.surface_a_mobiliser *
                item.abondances_especes +
              (100 - partBioFruits) * item.surface_a_mobiliser
            );
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle:
            return (
              partBioLegumes *
                item.surface_a_mobiliser *
                item.abondances_especes +
              (100 - partBioLegumes) * item.surface_a_mobiliser
            );
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle:
            return (
              partBioCereales *
                item.surface_a_mobiliser *
                item.abondances_especes +
              (100 - partBioCereales) * item.surface_a_mobiliser
            );
        }
      })
      .reduce((somme, surface_a_mobiliser) => somme + surface_a_mobiliser, 0) /
    surfaces_emplois_a_mobiliser_parcel_niveau_1
      .map((item) => {
        return item.surface_a_mobiliser;
      })
      .reduce((somme, surfaceAMobiliser) => somme + surfaceAMobiliser, 0);

  const richesses_des_sols =
    surfaces_emplois_a_mobiliser_parcel_niveau_1
      .map((item) => {
        switch (item.libelle_parcel_niveau_1) {
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle:
            return (
              partBioElevage *
                item.surface_a_mobiliser *
                item.richesses_des_sols +
              (100 - partBioElevage) * item.surface_a_mobiliser
            );
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle:
            return (
              partBioFruits *
                item.surface_a_mobiliser *
                item.richesses_des_sols +
              (100 - partBioFruits) * item.surface_a_mobiliser
            );
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle:
            return (
              partBioLegumes *
                item.surface_a_mobiliser *
                item.richesses_des_sols +
              (100 - partBioLegumes) * item.surface_a_mobiliser
            );
          case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle:
            return (
              partBioCereales *
                item.surface_a_mobiliser *
                item.richesses_des_sols +
              (100 - partBioCereales) * item.surface_a_mobiliser
            );
        }
      })
      .reduce((somme, surface_a_mobiliser) => somme + surface_a_mobiliser, 0) /
    surfaces_emplois_a_mobiliser_parcel_niveau_1
      .map((item) => {
        return item.surface_a_mobiliser;
      })
      .reduce((somme, surfaceAMobiliser) => somme + surfaceAMobiliser, 0);
  const surfaces_actuelles = surfaceActuelleResponseApi
    .map((item) => {
      return item.sau_ha;
    })
    .reduce((somme, surface) => somme + surface, 0);

  const surfaces_actuelles_parcel_niveau_1 = surfaceActuelleResponseApi.map(
    (item) => ({
      ...item,
      part_surfaces_actuelles: (item.sau_ha * 100) / surfaces_actuelles,
    })
  );

  const surfaces_actuelles_paysage = surfaceActuelleResponseApiPaysage.map(
    (item) => ({
      ...item,
      part_surfaces_actuelles: (item.sau_ha * 100) / surfaces_actuelles,
    })
  );
  const groupedData = {};
  console.log(
    "surfaceNecessairePaysageResponseApi",
    surfaceNecessairePaysageResponseApi
  );
  surfaceNecessairePaysageResponseApi
    .map((item) => ({
      ...item,
      surface_a_mobiliser: calculSurfAMobiliser(
        item.libelle_parcel_niveau_1,
        item.surface_necessaire_bio,
        item.surface_necessaire_conventionnel,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes,
        part_relocalisee
      ),
    }))
    .forEach((entry) => {
      const key = entry.libelle_parcel_paysage_actuel;
      groupedData[key] = groupedData[key] || {
        libelle_parcel_paysage_actuel: key,
        surface_a_mobiliser: 0,
      };
      groupedData[key].surface_a_mobiliser += entry.surface_a_mobiliser;
    });
  let surfaces_a_mobiliser_paysage = Object.values(groupedData);
  surfaces_emplois_a_mobiliser_parcel_niveau_1 =
    surfaces_emplois_a_mobiliser_parcel_niveau_1.map((item) => ({
      ...item,
      part_surface_a_mobiliser: Math.round(
        (item.surface_a_mobiliser * 100) / surfaces_a_mobiliser
      ),
      part_emplois_a_mobiliser: Math.round(
        (item.emplois_a_mobiliser * 100) / emplois_a_mobiliser
      ),
    }));

  surfaces_a_mobiliser_paysage = surfaces_a_mobiliser_paysage.map((item) => ({
    ...item,
    part_surface_a_mobiliser: Math.round(
      (item.surface_a_mobiliser * 100) / surfaces_a_mobiliser
    ),
  }));
  return {
    surfaces_a_mobiliser: surfaces_a_mobiliser,
    emplois_a_mobiliser: emplois_a_mobiliser,
    consommation_kg: consommation_kg,
    emission_kg_co2e: emission_kg_co2e,
    empreinte_eau_bleue_m3: empreinte_eau_bleue_m3,
    surfaces_ha_soja_importes: surfaces_ha_soja_importes,
    abondances_especes: abondances_especes,
    richesses_des_sols: richesses_des_sols,
    surfaces_emplois_a_mobiliser_parcel_niveau_1:
      surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfaces_actuelles: surfaces_actuelles,
    surfaces_actuelles_parcel_niveau_1: surfaces_actuelles_parcel_niveau_1,
    surfaces_actuelles_paysage: surfaces_actuelles_paysage,
    surfaces_a_mobiliser_paysage: surfaces_a_mobiliser_paysage,
  };
}

// TODO: refacto les parametres pour les mettre dans le meme objet dans le store
// TODO: renommer proprement les variables pour que ca soit descriptif
function calculSurfAMobiliser(
  libelle_parcel_niveau_1,
  surfaces_a_mobiliser_bio,
  surfaces_a_mobiliser_conventionnel,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes,
  part_relocalisee
) {
  var partBio;
  if (
    libelle_parcel_niveau_1 ===
    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle
  ) {
    partBio = partBioElevage / 100;
  } else if (
    libelle_parcel_niveau_1 ===
    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle
  ) {
    partBio = partBioFruits / 100;
  } else if (
    libelle_parcel_niveau_1 ===
    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle
  ) {
    partBio = partBioLegumes / 100;
  } else if (
    libelle_parcel_niveau_1 ===
    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle
  ) {
    partBio = partBioCereales / 100;
  }
  const surfaces_a_mobiliser =
    ((((partBio * surfaces_a_mobiliser_bio +
      (1 - partBio) * surfaces_a_mobiliser_conventionnel) *
      (1 - 0.18)) /
      (1 - 0.18 * (1 - partPertes / 100))) *
      part_relocalisee) /
    100;

  return surfaces_a_mobiliser;
}
