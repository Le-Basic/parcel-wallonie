import axios from "axios";

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
