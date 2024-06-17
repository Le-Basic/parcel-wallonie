import axios from "axios";
import store from "@/store";

async function fetchData(api_route) {
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
// TODO : extraire l'url en param comme pour fetchSurfaceNecessaire (permet de faire des tests, et ne rend pas le code dépendant à window.apiURL)
export async function fetchIndicateursActuels(url, codesTerritoireParcel) {
  const bodyFormData = new FormData();
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios.post(
    `${url}`,
    codesTerritoireParcel, // Request body data
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data[0];
}
// TODO : extraire l'url en param comme pour fetchSurfaceNecessaire (permet de faire des tests, et ne rend pas le code dépendant à window.apiURL)
export async function fetchSurfaceActuelle() {
  const data = await fetchData("parcel/belgique/surfaces_agregees");
  return data[0];
}

export async function fetchSurfacesActuelles(url, codesTerritoireParcel) {
  const bodyFormData = new FormData();
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios.post(
    `${url}`,
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
export async function fetchSurfacesActuellesPaysage(
  url,
  codesTerritoireParcel
) {
  const bodyFormData = new FormData();
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios.post(
    `${url}`,
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

export async function fetchSurfaceNecessaire(
  url,
  codesTerritoireParcel,
  idRegimeAlimentaire
) {
  const part_population = store.state["population"].part;
  const population = store.state["population"];
  var groupes = "";
  if (part_population == "groupe") {
    groupes = `&nombre_enfants=${population.nombreEnfants}&nombre_adultes=${population.nombreAdultes}&nombre_seniors=${population.nombreSeniors}`;
  } else {
    groupes = "";
  }
  const bodyFormData = new FormData();
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios.post(
    `${url}?id_menu=${idRegimeAlimentaire}${groupes}`,
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
