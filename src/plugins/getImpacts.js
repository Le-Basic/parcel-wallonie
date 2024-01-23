import axios from "axios";

export async function getImpacts() {
  const bodyFormData = new FormData();
  const codesTerritoireParcel = ["mun91114"];
  console.log(codesTerritoireParcel);
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  const response = await axios
    .get(
      "https://convertisseur.azurewebsites.net/API/EcoImpact/GetEcoImpactbyGeoLocale_V2?GeoLocale=[1]&Landarea=227.5&RatioLegumes=25&RatioFruits=25&RatioGC=25&RatioElevage=25&ID_Assiette=3&PartBioLegumes=0&PartBioFruits=0&PartBioGC=0&PartBioElevage=0&RatioGaspi=1"
    )
    .then((response) => response.data);
  return response;
}
