export function formatterSurfacesNecessaires(chiffreSurface) {
  return (
    "Environ " +
    Math.round(chiffreSurface).toLocaleString("fr-FR") +
    " hectares"
  );
}

export function formatterChiffres(chiffreSurface) {
  return Math.round(chiffreSurface).toLocaleString("fr-FR");
}
