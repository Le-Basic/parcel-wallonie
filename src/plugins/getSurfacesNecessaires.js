import axios from "axios";

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

export async function getSurfaceNecessaire() {
  const bodyFormData = new FormData();
  const codesTerritoireParcel = ["mun91114"];
  console.log(codesTerritoireParcel);
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios.post(
    window.apiURL + "parcel/belgique/surfaces_necessaires",
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

export async function getSurfaceAMobiliser() {
  var data = await getSurfaceNecessaire();
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
      };
      surfaces_a_mobiliser_parcel_niveau_1.push(
        res[valeur.libelle_parcel_niveau_1]
      );
    }
    res[valeur.libelle_parcel_niveau_1].surface_necessaire_conventionnel +=
      valeur.surface_necessaire_conventionnel;
    return res;
  }, {});
  console.log("test", surfaces_a_mobiliser_parcel_niveau_1);

  return {
    surfaces_a_mobiliser: surfaces_a_mobiliser,
    surfaces_a_mobiliser_parcel_niveau_1: surfaces_a_mobiliser_parcel_niveau_1,
  };
}
