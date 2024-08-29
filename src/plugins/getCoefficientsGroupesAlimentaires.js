import axios from "axios";

export async function fetchCoefficientsGroupesAlimentaires({
  url,
  idRegimeAlimentaire,
}) {
  const response = await axios.get(
    `${url}?id_regime_alimentaire=${idRegimeAlimentaire}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
