export function formatterSurfacesNecessaires(chiffreSurface) {
  return "Environ " + chiffreSurface.toLocaleString("fr-FR") + " hectares";
}

export function formatterChiffres(chiffreSurface) {
  return chiffreSurface.toLocaleString("fr-FR");
}
