import axios from "axios";

export async function fetchApportsEnergetiques(url, listeCategoriesRegimes) {
  const bodyFormData = new FormData();
  bodyFormData.append("listeCategoriesRegimes", listeCategoriesRegimes);
  const response = await axios.post(
    `${url}`,
    listeCategoriesRegimes, // Request body data
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
