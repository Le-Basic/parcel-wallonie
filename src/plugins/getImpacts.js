import store from "@/store";
import axios from "axios";
export async function getImpacts(partPertes = 0) {
  const ratioGaspi = (1 - 0.18) / (1 - 0.18 * (1 - partPertes / 100));
  const bodyFormData = new FormData();
  const codesTerritoireParcel = ["mun91114"];
  console.log(codesTerritoireParcel);
  bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
  console.log("store", store.state);
  // const url = `https://convertisseur.azurewebsites.net/API/EcoImpact/GetEcoImpactbyGeoLocale_V2?GeoLocale=[1]&Landarea=227.5&RatioLegumes=25&RatioFruits=25&RatioGC=25&RatioElevage=25&ID_Assiette=3&PartBioLegumes=${store.state.partbiolegumes}&PartBioFruits=${store.state.partbiofruits}&PartBioGC=${store.state.partbiocereales}&PartBioElevage=${store.state.partbioelevage}&RatioGaspi=1`;
  const response = await axios
    .get(
      `https://convertisseur.azurewebsites.net/API/EcoImpact/GetEcoImpactbyGeoLocale_V2?GeoLocale=[1]&Landarea=227.5&RatioLegumes=25&RatioFruits=25&RatioGC=25&RatioElevage=25&ID_Assiette=${store.state.regime_alimentaire.id}&PartBioLegumes=${store.state.partbiolegumes}&PartBioFruits=${store.state.partbiofruits}&PartBioGC=${store.state.partbiocereales}&PartBioElevage=${store.state.partbioelevage}&RatioGaspi=${ratioGaspi}`
    )
    .then((response) => response.data);
  return response;
}
