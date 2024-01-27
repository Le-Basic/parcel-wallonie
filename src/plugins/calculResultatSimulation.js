import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "../config/categorieProduitsPotentielNourricier";
export function calculerResultatSimulation(
  surfaceActuelleReponseApi,
  surfaceNecessaireResponseApi,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
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
    partBioFruits,
    partBioLegumes,
    partBioCereales,
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
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes
) {
  let surfaces_emplois_a_mobiliser_parcel_niveau_1 = [];
  surfaceNecessaireResponseApi.reduce(function (res, valeur) {
    if (!res[valeur.libelle_parcel_niveau_1]) {
      res[valeur.libelle_parcel_niveau_1] = {
        libelle_parcel_niveau_1: valeur.libelle_parcel_niveau_1,
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
        emploi_conventionnel: 0,
        emploi_bio: 0,
        surface_a_mobiliser: 0,
        emplois_a_mobiliser: 0,
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
    res[valeur.libelle_parcel_niveau_1].surface_a_mobiliser +=
      calculSurfAMobiliser(
        valeur.libelle_parcel_niveau_1,
        valeur.surface_necessaire_bio,
        valeur.surface_necessaire_conventionnel,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes
      );
    res[valeur.libelle_parcel_niveau_1].emplois_a_mobiliser +=
      calculSurfAMobiliser(
        valeur.libelle_parcel_niveau_1,
        valeur.emploi_bio,
        valeur.emploi_conventionnel,
        partBioElevage,
        partBioFruits,
        partBioLegumes,
        partBioCereales,
        partPertes
      );
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
  return {
    surfaces_a_mobiliser: surfaces_a_mobiliser,
    emplois_a_mobiliser: emplois_a_mobiliser,
    surfaces_emplois_a_mobiliser_parcel_niveau_1:
      surfaces_emplois_a_mobiliser_parcel_niveau_1,
    surfaces_actuelles: surfaces_actuelles,
    surfaces_actuelles_parcel_niveau_1: surfaces_actuelles_parcel_niveau_1,
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
  partPertes
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
    ((partBio * surfaces_a_mobiliser_bio +
      (1 - partBio) * surfaces_a_mobiliser_conventionnel) *
      (1 - 0.18)) /
    (1 - 0.18 * (1 - partPertes / 100));
  return Math.round(surfaces_a_mobiliser);
}
