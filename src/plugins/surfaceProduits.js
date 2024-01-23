export function formatterSurfacesNecessaires(chiffreSurface) {
  return (
    "Environ " +
    Math.round(chiffreSurface).toLocaleString("fr-FR") +
    " hectares"
  );
}
