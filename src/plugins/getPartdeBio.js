import axios from "axios";

export async function getPartdeBio(url, codesTerritoireParcel) {
  const bodyFormData = new FormData();
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  let uri = "parcel/belgique/curseurs_bio";
  console.log("uri", uri);
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
