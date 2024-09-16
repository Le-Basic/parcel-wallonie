import axios from "axios";
import store from "@/store";
import _ from "lodash";

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

export async function fetchPortrait(url, codesTerritoireParcel) {
  const bodyFormData = new FormData();
  console.log("terr", codesTerritoireParcel);
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

export const throttledfetchSurfaceNecessaire = _.throttle(
  fetchSurfaceNecessaire,
  200
);

export async function fetchSurfaceNecessairePourRegimePersonnalise(
  url,
  codesTerritoireParcel,
  idRegimeAlimentaire,
  pctDiffRegimePersonnalise = null
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
  console.log("terr", codesTerritoireParcel);
  console.log("pctDiffRegimePersonnalise", pctDiffRegimePersonnalise);
  bodyFormData.append("Codes_territoire_parcel", [codesTerritoireParcel]);
  bodyFormData.append("pctDiffRegimePersonnalise", pctDiffRegimePersonnalise);
  const response = await axios.post(
    `${url}?id_menu=${idRegimeAlimentaire}${groupes}`,
    {
      Codes_territoire_parcel: codesTerritoireParcel,
      pctDiffRegimePersonnalise: pctDiffRegimePersonnalise,
    }, // Request body data
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export async function fetchSurfaceNecessaireInstitutions(
  url,
  idRegimeAlimentaire,
  pctDiffRegimePersonnalise = []
) {
  const nbCouvertsParInstitution = store.state["nbCouvertsParInstitution"];

  const bodyFormData = new FormData();
  bodyFormData.append("pctDiffRegimePersonnalise", pctDiffRegimePersonnalise);
  const response = await axios.post(
    `${url}`,

    {
      Institutions: nbCouvertsParInstitution,
      pctDiffRegimePersonnalise: pctDiffRegimePersonnalise,
    }, // Request body data
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export async function fetchCurseurs(url, codesTerritoireParcel) {
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
  console.log("curseurs", response.data);
  return response.data;
}
