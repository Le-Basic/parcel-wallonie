import axios from 'axios';
import { IDS_REGIMES_ALIMENTAIRES } from '../config/regimeIds';

async function fetchData(api_route) {
    const bodyFormData = new FormData();
    const codesTerritoireParcel = ['mun91114'];
    console.log(codesTerritoireParcel);
    bodyFormData.append('Codes_territoire_parcel', codesTerritoireParcel);
    const response = await axios
        .post(
            window.apiURL + api_route,
            codesTerritoireParcel, // Request body data
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .catch((error) => {
            console.log(error);
        });
    return response.data;
}

// TODO : extraire l'url en param comme pour fetchSurfaceNecessaire (permet de faire des tests, et ne rend pas le code dépendant à window.apiURL)
export async function fetchSurfaceActuelle() {
    const data = await fetchData('parcel/belgique/surfaces_agregees');
    return data[0];
}

export async function fetchSurfaceNecessaire(url, codesTerritoireParcel, idRegimeAlimentaire) {
    const bodyFormData = new FormData();
    bodyFormData.append('Codes_territoire_parcel', codesTerritoireParcel);
    const response = await axios.post(
        `${url}?id_menu=${idRegimeAlimentaire}`,
        codesTerritoireParcel, // Request body data
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
    return response.data;
}

// TODO : fait partie des règles de calcul => a bouger dans le plugin calculResultatSimulation.js
export function calculerSurfacesEtEmploisAMobiliser(surfaceNecessaireResponseApi) {
    const surfaces_a_mobiliser = surfaceNecessaireResponseApi
        .map((item) => {
            return item.surface_necessaire_conventionnel;
        })
        .reduce((somme, surface) => somme + surface, 0);

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
                emploi_bio: 0
            };
            surfaces_emplois_a_mobiliser_parcel_niveau_1.push(res[valeur.libelle_parcel_niveau_1]);
        }
        res[valeur.libelle_parcel_niveau_1].surface_necessaire_conventionnel += valeur.surface_necessaire_conventionnel;
        res[valeur.libelle_parcel_niveau_1].surface_necessaire_bio += valeur.surface_necessaire_bio;
        res[valeur.libelle_parcel_niveau_1].emploi_conventionnel += valeur.emploi_conventionnel;
        res[valeur.libelle_parcel_niveau_1].emploi_bio += valeur.emploi_bio;
        return res;
    }, {});

    return {
        surfaces_a_mobiliser: surfaces_a_mobiliser,
        emplois_a_mobiliser: emplois_a_mobiliser,
        surfaces_emplois_a_mobiliser_parcel_niveau_1: surfaces_emplois_a_mobiliser_parcel_niveau_1
    };
}

// TODO : Fonction DEPRECATED => ce point d'entrée est async car il enchaine l'appel d'api + règle de calcul
// Bascule progressive à faire sur fetchSurfaceNecessaire et calculerSurfaceAMobiliser, qui sont appelés par les actions du store
export async function getSurfaceAMobiliser(idRegimeAlimentaire = IDS_REGIMES_ALIMENTAIRES.ACTUEL) {
    const url = window.apiURL + 'parcel/belgique/surfaces_necessaires';
    const codesTerritoireParcel = ['mun91114'];
    var surfaceNecessaireResponseApi = await fetchSurfaceNecessaire(url, codesTerritoireParcel, idRegimeAlimentaire);
    return calculerSurfacesEtEmploisAMobiliser(surfaceNecessaireResponseApi);
}
