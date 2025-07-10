import { describe, it, expect } from "vitest";
import { fetchSurfaceNecessaire } from "./getSurfacesNecessaires";

import { IDS_REGIMES_ALIMENTAIRES } from "../config/regimeIds";

describe("Test du plugin getSurfacesNecessaires", () => {
  it("Test appel API surfaces_necessaires, Régime alimentaire ACTUEL", async () => {
    const response = await fetchSurfaceNecessaire(
      "https://api.basic.coop/parcel/belgique/surfaces_necessaires",
      ["mun91114"],
      IDS_REGIMES_ALIMENTAIRES.ACTUEL,
    );
    let surfaceNecessaireBioViandeBovine = response.find(
      (e) => e.code_parcel === "EL.BVV",
    ).surface_necessaire_bio;
    expect(surfaceNecessaireBioViandeBovine).toEqual(3222);
  });
  it("Test appel API surfaces_necessaires, Régime alimentaire VEGETARIEN", async () => {
    const response = await fetchSurfaceNecessaire(
      "https://api.basic.coop/parcel/belgique/surfaces_necessaires",
      ["mun91114"],
      IDS_REGIMES_ALIMENTAIRES.VEGETARIEN,
    );
    let surfaceNecessaireBioViandeBovine = response.find(
      (e) => e.code_parcel === "EL.BVV",
    ).surface_necessaire_bio;
    expect(surfaceNecessaireBioViandeBovine).toEqual(483);
  });

  it("Test appel API surfaces_actuelles", async () => {
    const response = await fetchSurfaceNecessaire(
      "https://api.basic.coop/parcel/belgique/surfaces_actuels_produit",
      ["mun91114"],
    );
    let sauHaCulturesAnnuellesAlimentationHumaine = response.find(
      (e) => e.couleur === "#F5A623",
    ).sau_ha;
    expect(sauHaCulturesAnnuellesAlimentationHumaine).toBeCloseTo(693.9);
  });
});
