import axios from "axios";

export async function getAssets(path) {
  let response = await axios.get(
    `https://cdn.jsdelivr.net/gh/mathieulebasic/parcel-assets${path}`
  );
  console.log(response);
  return response; // Adjust based on actual response structure
}
