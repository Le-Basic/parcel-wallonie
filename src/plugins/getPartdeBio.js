import axios from "axios";

export async function fetchCurseurBio(url, codesTerritoireParcel) {
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
