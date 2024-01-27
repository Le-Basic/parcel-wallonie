import { Treemap } from "d3plus-hierarchy";

export function pushDataViz(data) {
  var data1 = [
    {
      surface: 2,
      name: "Légumes",
      libelle_parcel_niveau_1: "Légumes",
      image: "../assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#91C423",
    },
    {
      surface: 10,
      name: "Fruits",
      libelle_parcel_niveau_1: "Fruits",
      image: "../assets/img/icons/cat/ico_CATEGORIES_fruits.svg",
      color: "#A261C0",
    },
    {
      surface: 8,
      name: "céréales",
      libelle_parcel_niveau_1: "Céréales et autres cultures",
      image: "../assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#F5A623",
    },
    {
      surface: 24,
      name: "Viandes et œufs ",
      libelle_parcel_niveau_1: "Elevage",
      image: "../assets/img/icons/cat/ico_CATEGORIES_viande.svg",
      color: "#B57A60",
    },
    {
      surface: 46,
      name: "Produits laitiers",
      libelle_parcel_niveau_1: "test",
      image: "../assets/img/icons/cat/ico_CATEGORIES_viande.svg",
      color: "#B57A60",
    },
  ];
  const trouverCouleur = (libelle_parcel_niveau_1) => {
    return data1.find(
      (el) => el.libelle_parcel_niveau_1 == libelle_parcel_niveau_1
    ).color;
  };
  if (data) {
    const Vizdata = data.map((el) => {
      return {
        ...el,
        color: trouverCouleur(el.libelle_parcel_niveau_1),
      };
    });
    var container = document.getElementById("viz");
    container.innerHTML = "";
    console.log("VizData", Vizdata);
    new Treemap()
      .select("#viz")
      .data(Vizdata)
      .groupBy("libelle_parcel_niveau_1")
      .sum("surface_a_mobiliser")
      .color("color")
      .height(500)
      .legend(0)
      .tooltip({
        share: false,
      })
      .render();
    return Vizdata;
  } else {
    return undefined;
  }
}
