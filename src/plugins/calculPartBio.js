import store from "../store";

export default function calculerPartBio(valeur, cle, nomAction) {
  let valeurMax = Math.max(valeur, store.state.curseursBioMin[cle]);
  console.log(valeurMax);
  store.dispatch(nomAction, valeurMax);
  return valeurMax;
}
