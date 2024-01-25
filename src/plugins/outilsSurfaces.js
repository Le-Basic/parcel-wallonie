export function formaterSurfacesNecessaires(chiffreSurface) {
  return (
    "Environ " +
    Math.round(chiffreSurface).toLocaleString("fr-FR") +
    " hectares"
  );
}
