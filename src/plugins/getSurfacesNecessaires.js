import axios from "axios";
import { IDS_REGIMES_ALIMENTAIRES } from "../config/regimeIds";

export async function fetchData(api_route) {
  const bodyFormData = new FormData();
  const codesTerritoireParcel = ["mun91114"];
  console.log(codesTerritoireParcel);
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios
    .post(
      window.apiURL + api_route,
      codesTerritoireParcel, // Request body data
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
  return response.data;
}

export async function fetchSurfaceNecessaire(
  url,
  codesTerritoireParcel,
  idRegimeAlimentaire
) {
  const bodyFormData = new FormData();
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios.post(
    `${url}?id_menu=${idRegimeAlimentaire}`,
    codesTerritoireParcel, // Request body data
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export async function getSurfaceActuelle() {
  const data = await fetchData("parcel/belgique/surfaces_agregees");
  console.log(data[0]);
  return data[0];
}

export async function getSurfaceAMobiliser(
  idRegimeAlimentaire = IDS_REGIMES_ALIMENTAIRES.ACTUEL
) {
  const url = window.apiURL + "parcel/belgique/surfaces_necessaires";
  const codesTerritoireParcel = ["mun91114"];
  var data = await fetchSurfaceNecessaire(
    url,
    codesTerritoireParcel,
    idRegimeAlimentaire
  );
  const surfaces_a_mobiliser = data
    .map((item) => {
      return item.surface_necessaire_conventionnel;
    })
    .reduce((somme, surface) => somme + surface, 0);

  const surfaces_a_mobiliser_parcel_niveau_1 = [];
  data.reduce(function (res, valeur) {
    if (!res[valeur.libelle_parcel_niveau_1]) {
      res[valeur.libelle_parcel_niveau_1] = {
        libelle_parcel_niveau_1: valeur.libelle_parcel_niveau_1,
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
      };
      surfaces_a_mobiliser_parcel_niveau_1.push(
        res[valeur.libelle_parcel_niveau_1]
      );
    }
    res[valeur.libelle_parcel_niveau_1].surface_necessaire_conventionnel +=
      valeur.surface_necessaire_conventionnel;
    res[valeur.libelle_parcel_niveau_1].surface_necessaire_bio +=
      valeur.surface_necessaire_bio;
    return res;
  }, {});

  return {
    surfaces_a_mobiliser: surfaces_a_mobiliser,
    surfaces_a_mobiliser_parcel_niveau_1: surfaces_a_mobiliser_parcel_niveau_1,
  };
}
