function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

function majlocalites(localites, item) {
  //console.log('function majlocalites()');
  var fulllocalites = JSON.parse(localStorage.getItem("fulllocalites"));
  fulllocalites.splice($.inArray(item, localites), 1);
  localites.splice($.inArray(item, localites), 1);
  if ($("#log").html() == "undefined") $("#log").html("");
  if (fulllocalites == "[]") $("#log").html("");
  var strselect = $("#log").html();
  var strselect2 = replaceAll(
    strselect,
    "API Error: Internal Server Error",
    ""
  );
  var strselect3 = replaceAll(strselect2, "<div></div>", "");
  var strselect4 = strselect3.replace("API Error: Internal Server Error", "");
  $("#log").empty();
  $("#log").html(strselect4);
  localStorage.setItem("fulllocalites", JSON.stringify(fulllocalites));
  //console.log(fulllocalites);
  $("#span" + item).remove();
  localStorage.setItem("localites", JSON.stringify(localites));
  localStorage.setItem("selection", $("#log").html());
  var mylocalites = JSON.parse(localStorage.getItem("localites"));
  if (mylocalites == "[]") {
    localStorage.setItem("localites", "");
    localStorage.setItem("selection", "");
    $("#log").html("");
  }
  $("#localites").val(JSON.stringify(localites));
  //alert('majlocalites('+localites+','+item+')')
}

function majlocalitester(localites, item) {
  //console.log('function majlocalitester()');
  var fulllocalites = JSON.parse(localStorage.getItem("fulllocalitester"));
  fulllocalites.splice($.inArray(item, localites), 1);
  localites.splice($.inArray(item, localites), 1);

  localStorage.setItem("fulllocalitester", JSON.stringify(fulllocalites));
  //console.log(fulllocalites);
  $("#span" + item).remove();
  localStorage.setItem("localitester", JSON.stringify(localites));
  localStorage.setItem("selection", $("#log2").html());
  $("#localites2").val(JSON.stringify(localites));
}

function log(message) {
  //console.log('function log()');
  if (
    message != "API Error: Bad Request" &&
    message != "undefined" &&
    message != "API Error: Internal Server Error"
  ) {
    var message2 = replaceAll(message, "API Error: Internal Server Error", "");
    var message3 = replaceAll(message, "<div></div>", "");

    $("<div>").html(message3).prependTo("#log");
    $("<div>").html(message3).prependTo("#log2");
  }
  //alert(message);

  $("#log").scrollTop(0);
}

function log2(message) {}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function getLandAreaResultsByCategory(GeoAreaCode) {}

function getMultiLandAreaResultsByCategory2(
  ArrayGeoAreaCode,
  majratios = true,
  contexte = ""
) {
  if (
    ArrayGeoAreaCode == null ||
    ArrayGeoAreaCode == "null" ||
    ArrayGeoAreaCode == ""
  ) {
    var ArrayGeoAreaCode = localStorage.getItem("localitester");
  }
  if (ArrayGeoAreaCode != "[]") {
    //console.log('function getMultiLandAreaResultsByCategory2() : Calcul des surfaces, vérification du minimum bio , construction du graphique par surface et détails répartition du tableau de gauche');
    if (contexte == "") $("#parameters").empty();
    //var id = $('#prodId').val();
    var rowHtml = "";
    var SNTotal = 0; //running total for Surface Nécessaire
    var SNBTotal = 0; //running total for Surface Nécessaire BIO
    var ENTotal = 0; //running total for EMPLOIS_NECESSAIRE
    var ENOTotal = 0; //running total for EMPLOIS_NECESSAIRE_ORGANIC
    var TotalLandUse = 0;
    var TotalSurfaceArea = 0;
    var TotalSurfaceAreaBio = 0;
    var TotalEMPLOIS_NECESSAIRE = 0;
    var TotalEMPLOIS_NECESSAIRE_ORGANIC = 0;
    var totallegumes = 0;
    var totalfruits = 0;
    var totalgcultures = 0;
    var totallelevage = 0;
    var totaljoblegumes = 0;
    var totaljobfruits = 0;
    var totaljobgcultures = 0;
    var totaljobelevage = 0;
    var totallegumesbio = 0;
    var totalfruitsbio = 0;
    var totalgculturesbio = 0;
    var totallelevagebio = 0;
    var totaljoblegumesbio = 0;
    var totaljobfruitsbio = 0;
    var totaljobgculturesbio = 0;
    var totaljobelevagebio = 0;
    var totalviande = 0;
    var totallait = 0;
    var totalviandebio = 0;
    var totallaitbio = 0;
    var viande = 0;
    var lait = 0;
    var laitbio = 0;
    var strafftotallegumes = "";
    var strafftotalfruits = "";
    var strafftotalgcultures = "";
    var strafftotallelevage = "";

    // Paysage
    var surface_paysage_cereales_olea_proteagineux = 0;
    var surface_paysage_legumineuses = 0;
    var surface_paysage_cultures_fourrageres = 0;
    var surface_paysage_cultures_industrielles = 0;
    var surface_paysage_prairies_estives_landes = 0;
    var surface_paysage_legumes = 0;
    var surface_paysage_fruits = 0;

    var coeff_cereales = 1;
    var coeff_cultures_fourrageres = 1;
    var coeff_prairies = 1;

    var paysage_cereales_olea_proteagineux_coeff = new Array(
      58,
      57,
      55,
      63,
      54,
      53
    );

    var paysage_prairies_estives_landes = new Array(63, 54, 53);
    var paysage_cultures_fourrageres = new Array(63, 54, 53);
    var paysage_legumineuses = new Array(47, 48, 50);
    var paysage_cereales_olea_proteagineux = new Array(
      43,
      44,
      45,
      46,
      49,
      52,
      59,
      60,
      61
    );
    var paysage_cultures_industrielles = new Array(51, 64);

    //var id =  value;
    rowHtml = "";
    // ASSIETTE
    var ID_Assiette = "0";
    if (localStorage.getItem("partviande") == "flexi0") ID_Assiette = "0";
    if (localStorage.getItem("partviande") == "flexi1") ID_Assiette = "1";
    if (localStorage.getItem("partviande") == "flexi2") ID_Assiette = "2";
    if (localStorage.getItem("partviande") == "vegetarienne") ID_Assiette = "3";
    if (localStorage.getItem("partviande") == "vegetalienne") ID_Assiette = "4";
    if (contexte == "actuel") ID_Assiette = "0";
    //console.log('totallegumes' + totallegumes);
    //console.log('totallegumesbio' + totallegumesbio);
    //console.log('totalfruits' + totalfruits);
    //console.log('totalfruitsbio' + totalfruitsbio);
    //console.log('totalgcultures' + totalgcultures);
    //console.log('totalgculturesbio' + totalgculturesbio);
    //console.log('totallelevage' + totallelevage);
    //console.log('totallelevagebio' + totallelevagebio);
    // Initialisation part bio
    var partbiofruits = localStorage.getItem(contexte + "partbiofruits");
    var partbiolegumes = localStorage.getItem(contexte + "partbiolegumes");
    var partbiocereales = localStorage.getItem(contexte + "partbiocereales");
    var partbioelevage = localStorage.getItem(contexte + "partbioelevage");

    var minbiofruits = localStorage.getItem("minbiofruits");
    var minbiolegumes = localStorage.getItem("minbiolegumes");
    var minbiogcultures = localStorage.getItem("minbiogcultures");
    var minbioelevage = localStorage.getItem("minbioelevage");
    if (contexte == "actuel") {
      var partbiofruits = minbiofruits;
      var partbiolegumes = minbiolegumes;
      var partbiocereales = minbiogcultures;
      var partbioelevage = minbioelevage;
    }
    // Parcours 2
    var verifp2 = localStorage.getItem("localitester");
    var verifp2bis = localStorage.getItem("choixsurfaceha");

    if (
      verifp2 != "" &&
      verifp2 != "null" &&
      verifp2bis != "" &&
      verifp2bis != "null" &&
      verifp2 != null &&
      verifp2bis != null
    ) {
      var minbiofruits = 0;
      var minbiolegumes = 0;
      var minbiogcultures = 0;
      var minbioelevage = 0;
    }
    //alert(verifp2+'|'+verifp2bis+'|'+minbiolegumes);
    if (partbiolegumes < parseFloat(minbiolegumes)) {
      if (contexte == "") {
        $("#partbiolegumes").val(minbiolegumes);
        $("#partbiolegumesval").html(minbiolegumes);
        //$(".range-min").html(minbiolegumes);
        $("#partbiolegumes").rangeslider("update", true);
      }
      localStorage.setItem(contexte + "partbiolegumes", minbiolegumes);
      var partbiolegumes = localStorage.getItem(contexte + "partbiolegumes");
    }
    if (partbiofruits < parseFloat(minbiofruits)) {
      if (contexte == "") {
        ////console.log(partbiofruits+'<'+minbiofruits);
        $("#partbiofruits").val(minbiofruits);
        $("#partbiofruitsval").html(minbiofruits);
        //$(".range-min").html(minbiofruits);
        $("#partbiofruits").rangeslider("update", true);
      }
      localStorage.setItem(contexte + "partbiofruits", minbiofruits);
      var partbiofruits = localStorage.getItem(contexte + "partbiofruits");
    }
    if (partbiocereales < parseFloat(minbiogcultures)) {
      if (contexte == "") {
        $("#partbiocereales").val(minbiogcultures);
        $("#partbiocerealesval").html(minbiogcultures);
        //$(".range-min").html(minbiogcultures);
        $("#partbiocereales").rangeslider("update", true);
      }
      localStorage.setItem(contexte + "partbiocereales", minbiogcultures);
      var partbiocereales = localStorage.getItem(contexte + "partbiocereales");
    }
    if (partbioelevage < parseFloat(minbioelevage)) {
      if (contexte == "") {
        $("#partbioelevage").val(minbioelevage);
        $("#partbioelevageval").html(minbioelevage);
        //$(".range-min").html(minbiolegumes);
        $("#partbioelevage").rangeslider("update", true);
      }
      localStorage.setItem(contexte + "partbioelevage", minbioelevage);
      var partbioelevage = localStorage.getItem(contexte + "partbioelevage");
    }
    minbio();

    var population = localStorage.getItem("population");
    //if (contexte == 'actuel') population = 'toute';
    if (population == "type" || population == "groupe") {
      var ORGTYPE = "8";
      var org_covers = [];
      var str_org_covers = "[]";
      if (localStorage.getItem("nbmaternelle")) {
        org_covers.push("1," + localStorage.getItem("nbmaternelle"));
      }
      if (localStorage.getItem("nbprimaire")) {
        org_covers.push("2," + localStorage.getItem("nbprimaire"));
        //var ORGTYPE='2';
      }
      if (localStorage.getItem("nbcollege")) {
        org_covers.push("3," + localStorage.getItem("nbcollege"));
        //var ORGTYPE='3';
      }
      if (localStorage.getItem("nblycee")) {
        //var ORGTYPE='4';
        org_covers.push("4," + localStorage.getItem("nblycee"));
      }
      if (localStorage.getItem("nbuniversite")) {
        //var ORGTYPE='5';
        org_covers.push("5," + localStorage.getItem("nbuniversite"));
      }
      if (localStorage.getItem("nbrestaurant")) {
        //var ORGTYPE='7';
        org_covers.push("7," + localStorage.getItem("nbrestaurant"));
      }
      if (localStorage.getItem("nbehpad")) {
        //var ORGTYPE='6';
        org_covers.push("6," + localStorage.getItem("nbehpad"));
      }
      if (localStorage.getItem("nbhopital")) {
        var ORGTYPE = "8";
        org_covers.push("8," + localStorage.getItem("nbhopital"));
      }
      if (localStorage.getItem("nbautre")) {
        //var ORGTYPE='8';
        org_covers.push("8," + localStorage.getItem("nbautre"));
      }
      str_org_covers = "[" + org_covers.join(";") + "]";
      //var urlws='https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreaOrg?GeoLocale='+ArrayGeoAreaCode+'&ORGTYPE='+ORGTYPE+'&COVERS='+parseInt(COVERS)+'&ID_Assiette='+ID_Assiette;
      var urlws =
        "https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreaOrgV2?GeoLocale=" +
        ArrayGeoAreaCode +
        "&Org_Covers=" +
        str_org_covers +
        "&ID_Assiette=" +
        ID_Assiette;
      //console.log(urlws);
      var urlws2 = "popu";
      var urlwstoute =
        "https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreabyCategory?GeoLocale=" +
        ArrayGeoAreaCode +
        "&ID_Assiette=" +
        ID_Assiette;

      if (population == "groupe") {
        var ORGTYPE = "0";
        var COVERS1 = localStorage.getItem("nbenfants");
        var COVERS2 = localStorage.getItem("nbadultes");
        var COVERS3 = localStorage.getItem("nbseniors");
        var COVERS = parseInt(COVERS1) + parseInt(COVERS2) + parseInt(COVERS3);
        var urlws =
          "https://convertisseur.azurewebsites.net/API/LandArea/GetLandareabyConsommateurProfile?GeoLocale=" +
          ArrayGeoAreaCode +
          "&NoCE=" +
          parseInt(COVERS1) +
          "&NoCA=" +
          parseInt(COVERS2) +
          "&NoCPA=" +
          parseInt(COVERS3) +
          "&ID_Assiette=" +
          ID_Assiette;
        //console.log('284');
        var urlws2 = "groupe";
      }
      ////console.log(COVERS);
      //var urlws='https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreabyCategory?GeoLocale='+ArrayGeoAreaCode+'&ORGTYPE='+ORGTYPE+'&COVERS='+COVERS+'&ID_Assiette='+ID_Assiette;
    } else {
      //var urlws = 'https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreabyCategory?GeoLocale=' + ArrayGeoAreaCode + '&ID_Assiette=' + ID_Assiette;
      //var urlwstoute = 'https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreabyCategory?GeoLocale=' + ArrayGeoAreaCode + '&ID_Assiette=' + ID_Assiette;
      var urlwsminbio =
        "https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreabyCategory?GeoLocale=" +
        ArrayGeoAreaCode +
        "&ID_Assiette=" +
        ID_Assiette;
      var urlws =
        "https://convertisseur.azurewebsites.net/api/LandArea/GetAllLandAreabyProduct?GeoLocale=" +
        ArrayGeoAreaCode +
        "&ID_Category_CDTL=99&ID_Assiette=" +
        ID_Assiette;
      var urlwstoute =
        "https://convertisseur.azurewebsites.net/api/LandArea/GetAllLandAreabyProduct?GeoLocale=" +
        ArrayGeoAreaCode +
        "&ID_Category_CDTL=99&ID_Assiette=" +
        ID_Assiette;
      var urlws2 = "toute";
    }
    var regime_perso = 0;
    var ws_params = [];
    var is_perso = localStorage.getItem("partviande2");
    if (is_perso == "perso") {
      var regimes = [
        "cereales",
        "fruits",
        "oleagineux",
        "huile",
        "legumes",
        "legumineuses",
        "oeufs",
        "patates",
        "produits_laitiers",
        "sucre",
        "viande_blanche",
        "viande_rouge",
      ];
      $.each(regimes, function (key, item) {
        regime_perso =
          regime_perso + 100 + parseInt(localStorage.getItem("tx_" + item));
        ws_params.push(
          (100 + parseInt(localStorage.getItem("tx_" + item))) / 100
        );
      });
      //alert(regime_perso);
      if (regime_perso != 1200 && regime_perso > 0) {
        var population = localStorage.getItem("population");
        if (population == "toute") {
          urlws =
            "https://convertisseur.azurewebsites.net/API/LandArea/GetLandAreabyProductIDbyCustomAssiette?GeoLocale=" +
            ArrayGeoAreaCode +
            "&ID_Product_CDTL=99&Custom_Assiette=[" +
            ws_params.join(",") +
            "]";
        }
        if (population == "groupe") {
          var ORGTYPE = "0";
          var COVERS1 = localStorage.getItem("nbenfants");
          var COVERS2 = localStorage.getItem("nbadultes");
          var COVERS3 = localStorage.getItem("nbseniors");
          var COVERS =
            parseInt(COVERS1) + parseInt(COVERS2) + parseInt(COVERS3);
          urlws =
            "https://convertisseur.azurewebsites.net/API/LandArea/GetLandareabyConsommateurProfilebyCustomAssiette?GeoLocale=" +
            ArrayGeoAreaCode +
            "&NoCE=" +
            parseInt(COVERS1) +
            "&NoCA=" +
            parseInt(COVERS2) +
            "&NoCPA=" +
            parseInt(COVERS3) +
            "&Custom_Assiette=[" +
            ws_params.join(",") +
            "]";
          //console.log('318');
        }
        if (population == "type") {
          var ORGTYPE = "8";
          var org_covers = [];
          var str_org_covers = "[]";
          if (localStorage.getItem("nbmaternelle")) {
            org_covers.push("1," + localStorage.getItem("nbmaternelle"));
          }
          if (localStorage.getItem("nbprimaire")) {
            org_covers.push("2," + localStorage.getItem("nbprimaire"));
          }
          if (localStorage.getItem("nbcollege")) {
            org_covers.push("3," + localStorage.getItem("nbcollege"));
          }
          if (localStorage.getItem("nblycee")) {
            org_covers.push("4," + localStorage.getItem("nblycee"));
          }
          if (localStorage.getItem("nbuniversite")) {
            org_covers.push("5," + localStorage.getItem("nbuniversite"));
          }
          if (localStorage.getItem("nbrestaurant")) {
            org_covers.push("7," + localStorage.getItem("nbrestaurant"));
          }
          if (localStorage.getItem("nbehpad")) {
            org_covers.push("6," + localStorage.getItem("nbehpad"));
          }
          if (localStorage.getItem("nbhopital")) {
            org_covers.push("8," + localStorage.getItem("nbhopital"));
          }
          if (localStorage.getItem("nbautre")) {
            org_covers.push("8," + localStorage.getItem("nbautre"));
          }
          str_org_covers = "[" + org_covers.join(";") + "]";
          urlws =
            "https://convertisseur.azurewebsites.net/API/LandArea/GetAllLandAreaOrg_CustomAlimentaion?GeoLocale=" +
            ArrayGeoAreaCode +
            "&Org_Covers=" +
            str_org_covers +
            "&Custom_Assiette=[" +
            ws_params.join(",") +
            "]";
        }
      }
    }
    //if (contexte == 'actuel') urlws = 'https://convertisseur.azurewebsites.net/api/LandArea/GetAllLandAreabyProduct?GeoLocale=' + ArrayGeoAreaCode + '&ID_Category_CDTL=99&ID_Assiette=' + ID_Assiette;

    // Récupération des minima bio
    $.getJSON(urlwsminbio).done(function (data) {
      $.each(data, function (key, item) {
        if (item.LandUse == "Légumes") {
          minbiolegumes = round(item.Curseur_Min_Bio * 100, 0);
          localStorage.setItem("minbiolegumes", minbiolegumes);
        }
        if (item.LandUse == "Fruits") {
          minbiofruits = round(item.Curseur_Min_Bio * 100, 0);
          localStorage.setItem("minbiofruits", minbiofruits);
        }
        if (item.LandUse == "Grandes Cultures") {
          minbiogcultures = round(item.Curseur_Min_Bio * 100, 0);
          localStorage.setItem("minbiogcultures", minbiogcultures);
        }
        if (item.LandUse == "Produits de l'élevage") {
          minbioelevage = round(item.Curseur_Min_Bio * 100, 0);
          localStorage.setItem("minbioelevage", minbioelevage);
        }
      });
    });

    // var urlws='https://convertisseur.azurewebsites.net/API/Landarea/GetAllLandAreaString?GeoLocale=';
    $.getJSON(urlws)
      .done(function (data) {
        //console.log('urlws:' + urlws);
        localStorage.setItem(
          "getMultiLandAreaResultsByCategory2",
          JSON.stringify(data)
        );
        if (contexte == "") {
          $("#CategoryresultsTable tbody").find("tr:gt(0)").remove();
          $("#CategoryresultsTable tfoot").remove();
        }
        var surfaceimport = 0;
        $.each(data, function (key, item) {
          TotalLandUse += item.LandUse;
          TotalSurfaceArea += item.SurfaceArea;
          TotalSurfaceAreaBio += item.SurfaceAreaBio;
          TotalEMPLOIS_NECESSAIRE += item.EMPLOIS_NECESSAIRE;
          TotalEMPLOIS_NECESSAIRE_ORGANIC += item.EMPLOIS_NECESSAIRE_ORGANIC;
          //                           rowHtml+= '<tr><td>' + item.ID + '</td><td>' + item.LandUse + '</td><td>' + round(TotalSurfaceArea, 2) + '</td ><td>' + round(TotalSurfaceAreaBio, 2) + '</td><td>' + round(TotalEMPLOIS_NECESSAIRE, 2) + '</td><td>' + round(TotalEMPLOIS_NECESSAIRE_ORGANIC, 2) + '</td></tr >';
          if (item.LandUse != "" && contexte == "")
            rowHtml =
              "<tr><td>" +
              item.ID +
              '</td><td id="pc' +
              item.ID +
              '"></td><td>' +
              item.LandUse +
              "</td><td>" +
              round(item.SurfaceArea, 2) +
              "</td ></tr >";
          var partlocale = localStorage.getItem("partlocale");
          if (partlocale == null || partlocale == "") {
            partlocale = 100;
          }
          var coeffpertes = 1;
          if (localStorage.getItem("coeffpertes") !== null) {
            coeffpertes = parseFloat(localStorage.getItem("coeffpertes"));
          }

          var totalviande = 0;
          var totallait = 0;
          if (contexte == "actuel") {
            coeffpertes = 1;
            partlocale = 100;
          }
          ////console.log('(partlocale/100)='+(partlocale/100));
          if (urlws2 == "toute_old") {
            /*
                        //console.log('urlws2' + urlws2);
                        if (item.LandUse == 'Légumes') {
                            totallegumes = (partlocale*coeffpertes / 100) * round(item.SurfaceArea, 2);
                            totallegumesbio = (partlocale*coeffpertes / 100) * round(item.SurfaceAreaBio, 2);
                            minbiolegumes = round(item.Curseur_Min_Bio * 100, 0);
                            localStorage.setItem("minbiolegumes", minbiolegumes);
                            //	$("#partbiolegumes").attr({"min" : minbiolegumes });
                        }
                        if (item.LandUse == 'Fruits') {
                            totalfruits = (partlocale*coeffpertes / 100) * round(item.SurfaceArea, 2);
                            totalfruitsbio = (partlocale*coeffpertes / 100) * round(item.SurfaceAreaBio, 2);
                            minbiofruits = round(item.Curseur_Min_Bio * 100, 0);
                            localStorage.setItem("minbiofruits", minbiofruits);
                            //	$("#partbiofruits").attr({"min" : minbiofruits });
                        }
                        if (item.LandUse == 'Grandes Cultures') {
                            totalgcultures = (partlocale*coeffpertes / 100) * round(item.SurfaceArea, 2);
                            totalgculturesbio = (partlocale*coeffpertes / 100) * round(item.SurfaceAreaBio, 2);
                            minbiogcultures = round(item.Curseur_Min_Bio * 100, 0);
                            localStorage.setItem("minbiogcultures", minbiogcultures);
                            //	$("#partbiocereales").attr({"min" : minbiogcultures });
                        }
                        if (item.LandUse == "Produits de l'élevage") {
                            totallelevage = (partlocale*coeffpertes / 100) * round(item.SurfaceArea, 2);
                            totallelevagebio = (partlocale*coeffpertes / 100) * round(item.SurfaceAreaBio, 2);
                            minbioelevage = round(item.Curseur_Min_Bio * 100, 0);
                            localStorage.setItem("minbioelevage", minbioelevage);

                            //	$("#partbioelevage").attr({"min" : minbioelevage });
                        }
                        if (item.LandUse == 'Légumes') {
                            totaljoblegumes = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE, 15);
                            totaljoblegumesbio = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE_ORGANIC, 15);
                        }
                        if (item.LandUse == 'Fruits') {
                            totaljobfruits = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE, 15);
                            totaljobfruitsbio = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE_ORGANIC, 15);
                        }
                        if (item.LandUse == 'Grandes Cultures') {
                            totaljobgcultures = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE, 15);
                            totaljobgculturesbio = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE_ORGANIC, 15);
                        }
                        if (item.LandUse == "Produits de l'élevage") {
                            totaljobelevage = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE, 15);
                            totaljobelevagebio = (partlocale*coeffpertes / 100) * round(item.EMPLOIS_NECESSAIRE_ORGANIC, 15);
                        }
                        */
            // WS par population
            //alert('ici1');
          } else {
            var itemslegumes = new Array(
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              18,
              19,
              20,
              21,
              22
            );
            var itemsfruits = new Array(
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39,
              40,
              41,
              42
            );
            var itemscereales = new Array(
              43,
              44,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              52,
              59,
              60,
              61,
              64
            );
            var itemsviande = new Array(54, 55, 56, 57, 58, 62, 63);
            var itemsviandelait = new Array(53);

            //var itemsviande = new Array(54, 55, 56, 57, 58, 62, 63);

            //alert('ici');
            ////console.log('itemslegumes'+itemslegumes);
            if (itemslegumes.indexOf(item.ID) != -1) {
              //alert('legumes');
              if (item.SurfaceArea)
                totallegumes +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceArea).toFixed(2);
              if (item.SurfaceAreaBio)
                totallegumesbio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceAreaBio).toFixed(2);
              ////console.log('totallegumesbio detail '+item.ID+' : '+parseFloat(item.SurfaceAreaBio).toFixed(2));

              if (item.EMPLOIS_NECESSAIRE)
                totaljoblegumes +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE).toFixed(15);
              if (item.EMPLOIS_NECESSAIRE_ORGANIC)
                totaljoblegumesbio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC).toFixed(15);
              //	//console.log('Legumes item.ID : '+item.ID+' / Surface :'+totallegumes);
              //minbiolegumes=round(item.Curseur_Min_Bio*100, 0);
              var minbiolegumes = localStorage.getItem("minbiolegumes");
              //console.log(item.ID+' : totaljobelevagebio'+totaljobelevagebio);
            }

            if (itemsfruits.indexOf(item.ID) != -1) {
              if (item.SurfaceArea)
                totalfruits +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceArea).toFixed(2);
              if (item.SurfaceAreaBio)
                totalfruitsbio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceAreaBio).toFixed(2);
              if (item.EMPLOIS_NECESSAIRE)
                totaljobfruits +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE).toFixed(15);
              if (item.EMPLOIS_NECESSAIRE_ORGANIC)
                totaljobfruitsbio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC).toFixed(15);
              //	minbiofruits=round(item.Curseur_Min_Bio*100, 0);
              var minbiofruits = localStorage.getItem("minbiofruits");
              //console.log(item.ID+' : totaljobelevagebio'+totaljobelevagebio);
            }
            if (itemscereales.indexOf(item.ID) != -1) {
              if (item.SurfaceArea)
                totalgcultures +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceArea).toFixed(2);
              if (item.SurfaceAreaBio)
                totalgculturesbio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceAreaBio).toFixed(2);
              if (item.EMPLOIS_NECESSAIRE)
                totaljobgcultures +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE).toFixed(15);
              if (item.EMPLOIS_NECESSAIRE_ORGANIC)
                totaljobgculturesbio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC).toFixed(15);
              ////console.log('totaljobgcultures'+totaljobgcultures);
              ////console.log('totaljobgculturesbio'+totaljobgculturesbio);
              ////console.log('totaljobgcultures detail '+item.ID+' : '+item.EMPLOIS_NECESSAIRE + ' | '+ parseFloat(item.EMPLOIS_NECESSAIRE).toFixed(2));
              ////console.log('totaljobgculturesbio detail '+item.ID+' : '+item.EMPLOIS_NECESSAIRE_ORGANIC + ' | '+ parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC).toFixed(2));

              //	minbiogcultures=round(item.Curseur_Min_Bio*100, 0);
              var minbiogcultures = localStorage.getItem("minbiogcultures");
              //console.log(item.ID+' : totaljobelevagebio'+totaljobelevagebio);
            }

            if (itemsviande.indexOf(item.ID) != -1) {
              //console.log(item.ID + '|'+item.SurfaceArea+ '|'+item.SurfaceAreaBio+ '|'+item.EMPLOIS_NECESSAIRE+ '|'+item.EMPLOIS_NECESSAIRE_ORGANIC);
              //viande+=parseInt(round(item.SurfaceArea, 2));
              if (item.SurfaceArea)
                totallelevage +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceArea).toFixed(2);
              if (item.SurfaceAreaBio)
                totallelevagebio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceAreaBio).toFixed(2);
              if (item.EMPLOIS_NECESSAIRE)
                totaljobelevage +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE).toFixed(15);
              if (item.EMPLOIS_NECESSAIRE_ORGANIC)
                totaljobelevagebio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC).toFixed(15);
              //	minbioelevage=round(item.Curseur_Min_Bio*100, 0);
              var minbioelevage = localStorage.getItem("minbioelevage");
              //console.log(item.ID+' : totaljobelevagebio'+totaljobelevagebio);
              var PartBioElevage = localStorage.getItem(
                contexte + "partbioelevage"
              );
              var partimportelevage =
                (parseFloat(item.SurfaceAreaBioImportee) * PartBioElevage) /
                  100 +
                (parseFloat(item.SurfaceAreaImportee) *
                  (100 - PartBioElevage)) /
                  100;
              surfaceimport += partimportelevage;
              //console.log('import3:'+url)
              //onsole.log('surfaceimport3:'+surfaceimport)
            }

            if (item.ID == "53") {
              ////console.log('testlait '+round(item.SurfaceArea, 2));
              if (item.SurfaceArea)
                lait =
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceArea).toFixed(2);
              if (item.SurfaceAreaBio)
                laitbio =
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceAreaBio).toFixed(2);
              if (item.SurfaceArea)
                totallelevage +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceArea).toFixed(2);
              if (item.SurfaceAreaBio)
                totallelevagebio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.SurfaceAreaBio).toFixed(2);
              if (item.EMPLOIS_NECESSAIRE)
                totaljobelevage +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE).toFixed(15);
              if (item.EMPLOIS_NECESSAIRE_ORGANIC)
                totaljobelevagebio +=
                  ((partlocale * coeffpertes) / 100) *
                  parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC).toFixed(15);
              //console.log(item.ID+' : totaljobelevagebio'+totaljobelevagebio);
              var PartBioElevage = localStorage.getItem(
                contexte + "partbioelevage"
              );
              var partimportelevage =
                (parseFloat(item.SurfaceAreaBioImportee) * PartBioElevage) /
                  100 +
                (parseFloat(item.SurfaceAreaImportee) *
                  (100 - PartBioElevage)) /
                  100;
              surfaceimport += partimportelevage;
              //console.log('import3:'+url)
              //console.log('surfaceimport3:'+surfaceimport)
            }

            // Empreinte spatiale paysage
            if (paysage_cereales_olea_proteagineux.indexOf(item.ID) != -1) {
              if (itemslegumes.indexOf(item.ID) != -1)
                partbio_paysage = partbiolegumes;
              if (itemsfruits.indexOf(item.ID) != -1)
                partbio_paysage = partbiofruits;
              if (itemscereales.indexOf(item.ID) != -1)
                partbio_paysage = partbiocereales;
              if (
                itemsviande.indexOf(item.ID) != -1 ||
                itemsviandelait.indexOf(item.ID) != -1
              )
                partbio_paysage = partbioelevage;

              surface_paysage_cereales_olea_proteagineux +=
                ((100 - partbio_paysage) / 100) *
                ((partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceArea).toFixed(2);
              surface_paysage_cereales_olea_proteagineux +=
                (partbio_paysage / 100) *
                ((partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceAreaBio).toFixed(2);

              // console.log("surface_paysage_cereales_olea_proteagineux ("+item.ID+") coeff: 1 : "+((100 - partbio_paysage) / 100) * (partlocale * coeffpertes / 100) * parseFloat(item.SurfaceArea).toFixed(2));
              // console.log("surface_paysage_cereales_olea_proteagineux ("+item.ID+")  (bio) coeff: 1 : "+ (partbio_paysage / 100) * (partlocale * coeffpertes / 100) * parseFloat(item.SurfaceAreaBio).toFixed(2));
            }
            if (
              paysage_cereales_olea_proteagineux_coeff.indexOf(item.ID) != -1
            ) {
              if (itemslegumes.indexOf(item.ID) != -1)
                partbio_paysage = partbiolegumes;
              if (itemsfruits.indexOf(item.ID) != -1)
                partbio_paysage = partbiofruits;
              if (itemscereales.indexOf(item.ID) != -1)
                partbio_paysage = partbiocereales;
              if (
                itemsviande.indexOf(item.ID) != -1 ||
                itemsviandelait.indexOf(item.ID) != -1
              )
                partbio_paysage = partbioelevage;
              coeff_cereales = 1;
              if (item.ID == 58)
                coeff_cereales = localStorage.getItem("coeff_cereales_oeufs");
              if (item.ID == 53)
                coeff_cereales = localStorage.getItem("coeff_cereales_lait");
              if (item.ID == 54)
                coeff_cereales = localStorage.getItem("coeff_cereales_bovins");
              if (item.ID == 63)
                coeff_cereales = localStorage.getItem("coeff_cereales_ovins");
              if (item.ID == 55)
                coeff_cereales = localStorage.getItem("coeff_cereales_porcins");
              if (item.ID == 57)
                coeff_cereales = localStorage.getItem(
                  "coeff_cereales_volailles"
                );

              // console.log("surface_paysage_cereales_olea_proteagineux ("+item.ID+") coeff: "+coeff_cereales+" : "+ ((100 - partbio_paysage) / 100) * (coeff_cereales * partlocale * coeffpertes / 100) * parseFloat(item.SurfaceArea).toFixed(2));
              // console.log("surface_paysage_cereales_olea_proteagineux ("+item.ID+")  (bio) coeff: "+coeff_cereales+" : "+ (partbio_paysage / 100) * (coeff_cereales * partlocale * coeffpertes / 100) * parseFloat(item.SurfaceAreaBio).toFixed(2));

              surface_paysage_cereales_olea_proteagineux +=
                ((100 - partbio_paysage) / 100) *
                ((coeff_cereales * partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceArea).toFixed(2);
              surface_paysage_cereales_olea_proteagineux +=
                (partbio_paysage / 100) *
                ((coeff_cereales * partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceAreaBio).toFixed(2);
            }
            if (paysage_legumineuses.indexOf(item.ID) != -1) {
              if (itemslegumes.indexOf(item.ID) != -1)
                partbio_paysage = partbiolegumes;
              if (itemsfruits.indexOf(item.ID) != -1)
                partbio_paysage = partbiofruits;
              if (itemscereales.indexOf(item.ID) != -1)
                partbio_paysage = partbiocereales;
              if (
                itemsviande.indexOf(item.ID) != -1 ||
                itemsviandelait.indexOf(item.ID) != -1
              )
                partbio_paysage = partbioelevage;
              surface_paysage_legumineuses +=
                ((100 - partbio_paysage) / 100) *
                ((partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceArea).toFixed(2);
              surface_paysage_legumineuses +=
                (partbio_paysage / 100) *
                ((partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceAreaBio).toFixed(2);

              // console.log("surface_paysage_legumineuses ("+item.ID+") coeff: 1 : "+ ((100 - partbio_paysage) / 100) * (partlocale * coeffpertes / 100) * parseFloat(item.SurfaceArea).toFixed(2));
              // console.log("surface_paysage_legumineuses ("+item.ID+")  (bio) coeff: 1 : "+(partbio_paysage / 100) * (partlocale * coeffpertes / 100) * parseFloat(item.SurfaceAreaBio).toFixed(2));
            }
            if (paysage_cultures_fourrageres.indexOf(item.ID) != -1) {
              if (itemslegumes.indexOf(item.ID) != -1)
                partbio_paysage = partbiolegumes;
              if (itemsfruits.indexOf(item.ID) != -1)
                partbio_paysage = partbiofruits;
              if (itemscereales.indexOf(item.ID) != -1)
                partbio_paysage = partbiocereales;
              if (
                itemsviande.indexOf(item.ID) != -1 ||
                itemsviandelait.indexOf(item.ID) != -1
              )
                partbio_paysage = partbioelevage;
              coeff_cultures_fourrageres = 1;
              if (item.ID == 58)
                coeff_cultures_fourrageres = localStorage.getItem(
                  "coeff_cultures_oeufs"
                );
              if (item.ID == 53)
                coeff_cultures_fourrageres = localStorage.getItem(
                  "coeff_cultures_lait"
                );
              if (item.ID == 54)
                coeff_cultures_fourrageres = localStorage.getItem(
                  "coeff_cultures_bovins"
                );
              if (item.ID == 63)
                coeff_cultures_fourrageres = localStorage.getItem(
                  "coeff_cultures_ovins"
                );
              if (item.ID == 55)
                coeff_cultures_fourrageres = localStorage.getItem(
                  "coeff_cultures_porcins"
                );
              if (item.ID == 57)
                coeff_cultures_fourrageres = localStorage.getItem(
                  "coeff_cultures_volailles"
                );
              surface_paysage_cultures_fourrageres +=
                ((100 - partbio_paysage) / 100) *
                ((coeff_cultures_fourrageres * partlocale * coeffpertes) /
                  100) *
                parseFloat(item.SurfaceArea).toFixed(2);
              surface_paysage_cultures_fourrageres +=
                (partbio_paysage / 100) *
                ((coeff_cultures_fourrageres * partlocale * coeffpertes) /
                  100) *
                parseFloat(item.SurfaceAreaBio).toFixed(2);

              // console.log("surface_paysage_cultures_fourrageres ("+item.ID+") coeff: "+coeff_cultures_fourrageres+" : "+((100 - partbio_paysage) / 100) * (coeff_cultures_fourrageres * partlocale * coeffpertes / 100) * parseFloat(item.SurfaceArea).toFixed(2));
              // console.log("surface_paysage_cultures_fourrageres ("+item.ID+")  (bio) coeff: "+coeff_cultures_fourrageres+" : "+(partbio_paysage / 100) * (coeff_cultures_fourrageres * partlocale * coeffpertes / 100) * parseFloat(item.SurfaceAreaBio).toFixed(2));
            }
            if (paysage_cultures_industrielles.indexOf(item.ID) != -1) {
              if (itemslegumes.indexOf(item.ID) != -1)
                partbio_paysage = partbiolegumes;
              if (itemsfruits.indexOf(item.ID) != -1)
                partbio_paysage = partbiofruits;
              if (itemscereales.indexOf(item.ID) != -1)
                partbio_paysage = partbiocereales;
              if (
                itemsviande.indexOf(item.ID) != -1 ||
                itemsviandelait.indexOf(item.ID) != -1
              )
                partbio_paysage = partbioelevage;
              surface_paysage_cultures_industrielles +=
                ((100 - partbio_paysage) / 100) *
                ((partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceArea).toFixed(2);
              surface_paysage_cultures_industrielles +=
                (partbio_paysage / 100) *
                ((partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceAreaBio).toFixed(2);

              // console.log("surface_paysage_cultures_industrielles ("+item.ID+") coeff: 1: "+((100 - partbio_paysage) / 100) * (partlocale * coeffpertes / 100) * parseFloat(item.SurfaceArea).toFixed(2));
              // console.log("surface_paysage_cultures_industrielles ("+item.ID+")  (bio) coeff: 1 : "+(partbio_paysage / 100) * (partlocale * coeffpertes / 100) * parseFloat(item.SurfaceAreaBio).toFixed(2));
            }
            if (paysage_prairies_estives_landes.indexOf(item.ID) != -1) {
              if (itemslegumes.indexOf(item.ID) != -1)
                partbio_paysage = partbiolegumes;
              if (itemsfruits.indexOf(item.ID) != -1)
                partbio_paysage = partbiofruits;
              if (itemscereales.indexOf(item.ID) != -1)
                partbio_paysage = partbiocereales;
              if (
                itemsviande.indexOf(item.ID) != -1 ||
                itemsviandelait.indexOf(item.ID) != -1
              )
                partbio_paysage = partbioelevage;
              coeff_prairies = 1;
              if (item.ID == 58)
                coeff_prairies = localStorage.getItem("coeff_prairies_oeufs");
              if (item.ID == 53)
                coeff_prairies = localStorage.getItem("coeff_prairies_lait");
              if (item.ID == 54)
                coeff_prairies = localStorage.getItem("coeff_prairies_bovins");
              if (item.ID == 63)
                coeff_prairies = localStorage.getItem("coeff_prairies_ovins");
              if (item.ID == 55)
                coeff_prairies = localStorage.getItem("coeff_prairies_porcins");
              if (item.ID == 57)
                coeff_prairies = localStorage.getItem(
                  "coeff_prairies_volailles"
                );

              surface_paysage_prairies_estives_landes +=
                ((100 - partbio_paysage) / 100) *
                ((coeff_prairies * partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceArea).toFixed(2);
              surface_paysage_prairies_estives_landes +=
                (partbio_paysage / 100) *
                ((coeff_prairies * partlocale * coeffpertes) / 100) *
                parseFloat(item.SurfaceAreaBio).toFixed(2);

              // console.log("surface_paysage_prairies_estives_landes ("+item.ID+") coeff: "+coeff_prairies+" : "+((100 - partbio_paysage) / 100) * (coeff_prairies * partlocale * coeffpertes / 100) * parseFloat(item.SurfaceArea).toFixed(2));
              // console.log("surface_paysage_prairies_estives_landes ("+item.ID+")  (bio) coeff: "+coeff_prairies+" : "+(partbio_paysage / 100) * (coeff_prairies * partlocale * coeffpertes / 100) * parseFloat(item.SurfaceAreaBio).toFixed(2));
            }
          }
          SNTotal += item.SurfaceArea;
          ////console.log('surface '+SNTotal);
          SNBTotal += item.SurfaceAreaBio;
          ENTotal += item.EMPLOIS_NECESSAIRE;
          ENOTotal += item.EMPLOIS_NECESSAIRE_ORGANIC;
          //console.log(item.ID+' : totaljobelevagebio'+totaljobelevagebio);
          // $('#CategoryresultsTable').append(rowHtml);
        });
        //console.log(' totaljobelevagebio'+totaljobelevagebio);
        surface_paysage_legumes =
          ((100 - partbiolegumes) / 100) * totallegumes +
          (partbiolegumes / 100) * totallegumesbio;
        surface_paysage_fruits =
          ((100 - partbiofruits) / 100) * totalfruits +
          (partbiofruits / 100) * totalfruitsbio;
        ////console.log('totallegumesbio : '+totallegumesbio);

        //    $('#CategoryresultsTable').append(rowHtml);
        var viande = parseInt(totallelevage) - parseInt(lait);
        localStorage.setItem(contexte + "repartitionviande", viande);
        localStorage.setItem(contexte + "repartitionlait", lait);
        localStorage.setItem(contexte + "repartitionlegumes", totallegumes);
        localStorage.setItem(contexte + "repartitionfruits", totalfruits);
        localStorage.setItem(contexte + "repartitioncereales", totalgcultures);

        //minbiolegumes=round(item.Curseur_Min_Bio, 0);
        //	minbiofruits=round(item.Curseur_Min_Bio, 0);
        //	minbiogcultures=round(item.Curseur_Min_Bio, 0);
        //	minbioelevage=round(item.Curseur_Min_Bio, 0);

        var viande = totallelevage - lait;
        var viandebio = totallelevagebio - laitbio;

        var totallegumesdef =
          (parseFloat(totallegumesbio) * partbiolegumes) / 100 +
          (parseFloat(totallegumes) * (100 - partbiolegumes)) / 100;
        var totallegumesdefbio =
          (parseFloat(totallegumesbio) * partbiolegumes) / totallegumesdef;
        var totalfruitsdef =
          (parseFloat(totalfruitsbio) * partbiofruits) / 100 +
          (parseFloat(totalfruits) * (100 - partbiofruits)) / 100;
        var totalfruitsdefbio =
          (parseFloat(totalfruitsbio) * partbiofruits) / totalfruitsdef;
        var totalgculturesdef =
          (parseFloat(totalgculturesbio) * partbiocereales) / 100 +
          (parseFloat(totalgcultures) * (100 - partbiocereales)) / 100;
        var totalgculturesdefbio =
          (parseFloat(totalgculturesbio) * partbiocereales) / totalgculturesdef;
        var totalelevagedef =
          (parseFloat(totallelevagebio) * partbioelevage) / 100 +
          (parseFloat(totallelevage) * (100 - partbioelevage)) / 100;
        var totalelevagedefbio =
          (parseFloat(totallelevagebio) * partbioelevage) / totalelevagedef;

        var totallaitdef =
          (parseFloat(laitbio) * partbioelevage) / 100 +
          (parseFloat(lait) * (100 - partbioelevage)) / 100;
        var totalviandedef =
          (parseFloat(viandebio) * partbioelevage) / 100 +
          (parseFloat(viande) * (100 - partbioelevage)) / 100;

        localStorage.setItem(contexte + "totallegumesdef", totallegumesdef);
        localStorage.setItem(contexte + "totalfruitsdef", totalfruitsdef);
        localStorage.setItem(contexte + "totalgculturesdef", totalgculturesdef);
        localStorage.setItem(contexte + "totalelevagedef", totalelevagedef);
        localStorage.setItem(contexte + "totallaitdef", totallaitdef);
        localStorage.setItem(contexte + "totalviandedef", totalviandedef);

        var totalp2 =
          totallegumesdef +
          totalfruitsdef +
          totalgculturesdef +
          totalelevagedef;
        //var totallaitdef=(parseFloat(laitbio)*partbioelevage/100)+(parseFloat(lait)*(100-partbioelevage)/100);
        //var totalviandedef=(parseFloat(viandebio)*partbioelevage/100)+(parseFloat(viande)*(100-partbioelevage)/100);

        var partsurfaceelevage = totalelevagedef / totalp2;
        var partsurfacelegumes = totallegumesdef / totalp2;
        var partsurfacefruits = totalfruitsdef / totalp2;
        var partsurfacecereales = totalgculturesdef / totalp2;
        //console.log('partsurfaceelevage' + partsurfaceelevage);
        //console.log('partsurfacelegumes' + partsurfacelegumes);
        //console.log('partsurfacefruits' + partsurfacefruits);
        //console.log('partsurfacecereales' + partsurfacecereales);
        if (majratios !== false)
          localStorage.setItem(
            contexte + "partsurfaceelevage",
            100 * partsurfaceelevage
          );
        if (majratios !== false)
          localStorage.setItem(
            contexte + "partsurfacelegumes",
            100 * partsurfacelegumes
          );
        if (majratios !== false)
          localStorage.setItem(
            contexte + "partsurfacefruits",
            100 * partsurfacefruits
          );
        if (majratios !== false)
          localStorage.setItem(
            contexte + "partsurfacecereales",
            100 * partsurfacecereales
          );

        //console.log('veriftotallegumesdef' + totallegumesdef);
        //console.log('veriftotalfruitsdef' + totalfruitsdef);
        //console.log('veriftotalgculturesdef' + totalgculturesdef);
        //console.log('veriftotalelevagedef' + totalelevagedef);
        if (round(totallegumesdef, 1) < 10) {
          var afftotallegumes = round(totallegumesdef, 1).toLocaleString();
        } else {
          var afftotallegumes = round(totallegumesdef, 0).toLocaleString();
        }
        if (round(totalfruitsdef, 1) < 10) {
          var afftotalfruits = round(totalfruitsdef, 1).toLocaleString();
        } else {
          var afftotalfruits = round(totalfruitsdef, 0).toLocaleString();
        }
        if (round(totalgculturesdef, 1) < 10) {
          var afftotalgcultures = round(totalgculturesdef, 1).toLocaleString();
        } else {
          var afftotalgcultures = round(totalgculturesdef, 0).toLocaleString();
        }
        if (round(totalelevagedef, 1) < 10) {
          var afftotallelevage = round(totalelevagedef, 1).toLocaleString();
        } else {
          var afftotallelevage = round(totalelevagedef, 0).toLocaleString();
        }
        //var afftotalfruits= round(totalfruitsdef, 1).toLocaleString();
        //var afftotalgcultures= round(totalgculturesdef, 1).toLocaleString();
        //var afftotallelevage= round(totalelevagedef, 1).toLocaleString();

        //var afftotallegumesbio= round(totallegumesdefbio, 0).toLocaleString();
        //var afftotalfruitsbio= round(totalfruitsdefbio, 0).toLocaleString();
        //var afftotalgculturesbio= round(totalgculturesdefbio, 0).toLocaleString();
        //var afftotallelevagebio= round(totalelevagedefbio, 0).toLocaleString();
        //console.log(' totaljobelevagebio'+totaljobelevagebio);
        //console.log(' totaljobelevagebio'+round(totaljobelevagebio, 1));

        localStorage.setItem(contexte + "emplois", round(ENTotal, 5));
        localStorage.setItem(contexte + "surface", round(SNTotal, 1));
        localStorage.setItem(
          contexte + "totaljoblegumes",
          round(totaljoblegumes, 5)
        );
        localStorage.setItem(
          contexte + "totaljoblegumesbio",
          round(totaljoblegumesbio, 5)
        );
        localStorage.setItem(
          contexte + "totaljobfruits",
          round(totaljobfruits, 5)
        );
        localStorage.setItem(
          contexte + "totaljobfruitsbio",
          round(totaljobfruitsbio, 5)
        );
        localStorage.setItem(
          contexte + "totaljobgcultures",
          round(totaljobgcultures, 5)
        );
        localStorage.setItem(
          contexte + "totaljobgculturesbio",
          round(totaljobgculturesbio, 5)
        );
        localStorage.setItem(
          contexte + "totaljobelevage",
          round(totaljobelevage, 5)
        );
        localStorage.setItem(
          contexte + "totaljobelevagebio",
          round(totaljobelevagebio, 5)
        );
        localStorage.setItem(contexte + "totallegumes", round(totallegumes, 1));
        localStorage.setItem(
          contexte + "totallegumesbio",
          round(totallegumesbio, 1)
        );
        localStorage.setItem(contexte + "totalfruits", round(totalfruits, 1));
        localStorage.setItem(
          contexte + "totalfruitsbio",
          round(totalfruitsbio, 1)
        );
        localStorage.setItem(
          contexte + "totalgcultures",
          round(totalgcultures, 1)
        );
        localStorage.setItem(
          contexte + "totalgculturesbio",
          round(totalgculturesbio, 1)
        );
        localStorage.setItem(
          contexte + "totalelevage",
          round(totallelevage, 1)
        );
        localStorage.setItem(
          contexte + "totalelevagebio",
          round(totallelevagebio, 1)
        );
        localStorage.setItem(contexte + "totallait", round(lait, 1));
        localStorage.setItem(contexte + "totallaitbio", round(laitbio, 1));
        localStorage.setItem(contexte + "totalviande", round(viande, 1));
        localStorage.setItem(contexte + "totalviandebio", round(viandebio, 1));
        localStorage.setItem(
          contexte + "surfaceimport",
          round(surfaceimport, 1)
        );
        $("#surfaceimport").html(round(surfaceimport, 0) + "");
        // PARCOURS 2
        var afftotallegumes2 = significatifsurface(round(totallegumesdef, 2));
        var afftotalfruits2 = significatifsurface(round(totalfruitsdef, 2));
        var afftotalgcultures2 = significatifsurface(
          round(totalgculturesdef, 2)
        );
        var afftotallelevage2 = significatifsurface(round(totalelevagedef, 2));

        var choixsurface = localStorage.getItem("choixsurfaceha");

        if (
          choixsurface != "" &&
          choixsurface != "null" &&
          choixsurface != null &&
          choixsurface != "0"
        ) {
          var total =
            round(totallegumesdef, 0) +
            round(totalfruitsdef, 0) +
            round(totalgculturesdef, 0) +
            round(totalelevagedef, 0);
          var rapport = round(choixsurface, 0) / total;
          var afftotallegumes2 = significatifsurface(
            round(totallegumesdef * rapport, 2)
          );
          var afftotalfruits2 = significatifsurface(
            round(totalfruitsdef * rapport, 2)
          );
          var afftotalgcultures2 = significatifsurface(
            round(totalgculturesdef * rapport, 2)
          );
          var afftotallelevage2 = significatifsurface(
            round(totalelevagedef * rapport, 2)
          );

          localStorage.setItem("afftotallegumes2", afftotallegumes2);
          localStorage.setItem("afftotalfruits2", afftotalfruits2);
          localStorage.setItem("afftotalgcultures2", afftotalgcultures2);
          localStorage.setItem("afftotallelevage2", afftotallelevage2);
          //alert('ici');
        }

        // FIN PARCOURS 2

        if (afftotallegumes2) {
          if (afftotallegumes < 0) {
            strafftotallegumes = "< 1 hectare";
          } else {
            strafftotallegumes =
              '<span id="totallegumes">Environ ' +
              afftotallegumes2.toLocaleString() +
              "</span> hectares";
          }
        }
        if (afftotalfruits2) {
          if (afftotalfruits < 0) {
            strafftotalfruits = "< 1 hectare";
          } else {
            strafftotalfruits =
              '<span id="totalfruits">Environ ' +
              afftotalfruits2.toLocaleString() +
              "</span> hectares";
          }
        }
        if (afftotalgcultures2) {
          if (afftotalgcultures < 0) {
            strafftotalgcultures = "< 1 hectare";
          } else {
            strafftotalgcultures =
              '<span id="totalcereales">Environ ' +
              afftotalgcultures2.toLocaleString() +
              "</span> hectares";
          }
        }
        if (afftotallelevage2) {
          if (afftotallelevage < 0) {
            strafftotallelevage = "< 1 hectare";
          } else {
            strafftotallelevage =
              '<span id="totalelevage">Environ ' +
              afftotallelevage2.toLocaleString() +
              "</span> hectares";
          }
        }

        if (strafftotallegumes && contexte == "")
          rowHtml1 =
            '<tr><td colspan="5"><div class="cadre-categorie legumes animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-legumes" style="cursor: pointer;"><div class="result-graph" id="pc1" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumes"></span></div><div class="result-chiffres"><div class="titre-categorie">Légumes</div><div class="hectares">' +
            strafftotallegumes +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon legumes" ></span></div></td></tr >';
        if (strafftotalfruits && contexte == "")
          rowHtml2 =
            '<tr><td colspan="5"><div class="cadre-categorie fruits animated fadeIn  delay-1-5s" onclick="" data-toggle="modal" data-target="#modal-fruits" style="cursor: pointer;"><div class="result-graph" id="pc2" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruits"></span></div><div class="result-chiffres"><div class="titre-categorie">Fruits</div><div class="hectares">' +
            strafftotalfruits +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon fruits"></span></div></div></td></tr >';
        if (strafftotalgcultures && contexte == "")
          rowHtml3 =
            '<tr><td colspan="5"><div class="cadre-categorie cereales animated fadeIn delay-2s" onclick="" data-toggle="modal" data-target="#modal-cereales" style="cursor: pointer;"><div class="result-graph" id="pc3" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_cereales ico-medium cereales"></span></div><div class="result-chiffres"><div class="titre-categorie">Céréales et autres cultures...</div><div class="hectares">' +
            strafftotalgcultures +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon cereales"></span></div></div></td></tr >';
        if (strafftotallelevage && contexte == "")
          rowHtml4 =
            '<tr><td colspan="5"><div class="cadre-categorie viande animated fadeIn  delay-2-5s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-graph" id="pc4" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_viande ico-medium viande"></span></div><div class="result-chiffres"><div class="titre-categorie">Elevage</div><div class="hectares">' +
            strafftotallelevage +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon viande"></span></div></div></td></tr >';

        //add a footer row with the totals for each column
        //rowHtml1 = '<tr><td colspan="5"><div class="cadre-categorie legumes animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-legumes" style="cursor: pointer;"><div class="result-graph" id="pc1" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumes"></span></div><div class="result-chiffres"><div class="titre-categorie">Légumes</div><div class="hectares"><span id="totallegumes">' + afftotallegumes + '</span> hectares (dont surfaces bio '+afftotallegumesbio+'%)</div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon legumes" ></span></div></td></tr >';
        //rowHtml2 = '<tr><td colspan="5"><div class="cadre-categorie fruits animated fadeIn  delay-1-5s" onclick="" data-toggle="modal" data-target="#modal-fruits" style="cursor: pointer;"><div class="result-graph" id="pc2" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruits"></span></div><div class="result-chiffres"><div class="titre-categorie">Fruits</div><div class="hectares"><span id="totalfruits">' + afftotalfruits + '</span> hectares (dont surfaces bio '+afftotalfruitsbio+'%)</div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon fruits"></span></div></div></td></tr >';
        //rowHtml3 = '<tr><td colspan="5"><div class="cadre-categorie cereales animated fadeIn delay-2s" onclick="" data-toggle="modal" data-target="#modal-cereales" style="cursor: pointer;"><div class="result-graph" id="pc3" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_cereales ico-medium cereales"></span></div><div class="result-chiffres"><div class="titre-categorie">Céréales et autres cultures...</div><div class="hectares"><span id="totalcereales">' + afftotalgcultures + '</span> hectares (dont surfaces bio '+afftotalgculturesbio+'%)</div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon cereales"></span></div></div></td></tr >';
        //rowHtml4 = '<tr><td colspan="5"><div class="cadre-categorie viande animated fadeIn  delay-2-5s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-graph" id="pc4" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_viande ico-medium viande"></span></div><div class="result-chiffres"><div class="titre-categorie">Elevage</div><div class="hectares"><span id="totalelevage">' + afftotallelevage + '</span> hectares (dont surfaces bio '+afftotallelevagebio+'%)</div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon viande"></span></div></div></td></tr >';
        if (contexte == "")
          var rowHtml1 =
            '<tr><td colspan="5"><div class="cadre-categorie legumes animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-legumes" style="cursor: pointer;"><div class="result-graph" id="pc1" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumes"></span></div><div class="result-chiffres"><div class="titre-categorie">Légumes</div><div class="hectares">' +
            strafftotallegumes +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon legumes" ></span></div></td></tr >';
        if (contexte == "")
          var rowHtml2 =
            '<tr><td colspan="5"><div class="cadre-categorie fruits animated fadeIn  delay-1s" onclick="" data-toggle="modal" data-target="#modal-fruits" style="cursor: pointer;"><div class="result-graph" id="pc2" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruits"></span></div><div class="result-chiffres"><div class="titre-categorie">Fruits</div><div class="hectares">' +
            strafftotalfruits +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon fruits"></span></div></div></td></tr >';
        if (contexte == "")
          var rowHtml3 =
            '<tr><td colspan="5"><div class="cadre-categorie cereales animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-cereales" style="cursor: pointer;"><div class="result-graph" id="pc3" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_cereales ico-medium cereales"></span></div><div class="result-chiffres"><div class="titre-categorie">Céréales et autres cultures...</div><div class="hectares">' +
            strafftotalgcultures +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon cereales"></span></div></div></td></tr >';
        if (contexte == "")
          var rowHtml4 =
            '<tr><td colspan="5"><div class="cadre-categorie viande animated fadeIn  delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-graph" id="pc4" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_viande ico-medium viande"></span></div><div class="result-chiffres"><div class="titre-categorie">Elevage <a href="#" class="info pb-3" style="font-style:normal;font-weight:normal;" data-tooltip="Les surfaces d\'élevage comptabilisent les surfaces des fermes d\'élevage ainsi que toutes les surfaces liées à la production de l\'alimentation pour l\'élevage." data-placement="left"><span class="icon-ico_element_info"></span></a></div><div class="hectares">' +
            strafftotallelevage +
            ' </div></div><div class="result-plus"><span class="icon-ico_fleche_detail_gros icon viande"></span></div></div></td></tr >';
        if (contexte == "")
          var rowHtml =
            '<tfoot style="display:none;"><tr><td></td><td></td><td>TOTAL</td><td><span id="fun-level">' +
            round(SNTotal, 2) +
            "</span></td><td></td></tr ></tfoot>";

        if (urlws2 == "toute") {
          //var totalviande=
          //var totallait
          var viande = parseInt(totalelevagedef) * parseFloat(0.49);
          var lait = parseInt(totalelevagedef) * parseFloat(0.51);
          totalviandedef = localStorage.getItem(contexte + "totalviandedef");
          totallaitdef = localStorage.getItem(contexte + "totallaitdef");
        }
        var coeffpertes = 1;
        if (localStorage.getItem("coeffpertes") !== null) {
          coeffpertes = parseFloat(localStorage.getItem("coeffpertes"));
        }
        if (contexte == "actuel") coeffpertes = 0;
        var totsurfacefruits =
          (parseFloat(localStorage.getItem(contexte + "newtotalfruitsbio")) *
            partbiofruits) /
            100 +
          (parseFloat(localStorage.getItem(contexte + "newtotalfruits")) *
            (100 - partbiofruits)) /
            100;
        var totsurfacelegumes =
          (parseFloat(localStorage.getItem(contexte + "newtotallegumesbio")) *
            partbiolegumes) /
            100 +
          (parseFloat(localStorage.getItem(contexte + "newtotallegumes")) *
            (100 - partbiolegumes)) /
            100;
        var totsurfacecereales =
          (parseFloat(localStorage.getItem(contexte + "newtotalcerealesbio")) *
            partbiocereales) /
            100 +
          (parseFloat(localStorage.getItem(contexte + "newtotalcereales")) *
            (100 - partbiocereales)) /
            100;
        var totsurfaceviande =
          (parseFloat(localStorage.getItem(contexte + "newtotalviandebio")) *
            partbioelevage) /
            100 +
          (parseFloat(localStorage.getItem(contexte + "newtotalviande")) *
            (100 - partbioelevage)) /
            100;
        var totsurfacelait =
          (parseFloat(localStorage.getItem(contexte + "newtotallaitbio")) *
            partbioelevage) /
            100 +
          (parseFloat(localStorage.getItem(contexte + "newtotallait")) *
            (100 - partbioelevage)) /
            100;
        var totsurface =
          parseFloat(totsurfacefruits) +
          parseFloat(totsurfacelegumes) +
          parseFloat(totsurfacecereales) +
          parseFloat(totsurfaceviande) +
          parseFloat(totsurfacelait);
        var totsurfacepondere =
          (totsurface *
            parseInt(localStorage.getItem("partlocale")) *
            coeffpertes) /
          100;
        var ratiows = parseFloat(SNTotal / totsurface);
        //console.log('SNTotal : ' + parseFloat(SNTotal));

        console.log("veriftotsurfacefruits " + totsurfacefruits);
        //console.log('veriftotsurfacelegumes' + totsurfacelegumes);
        //console.log('veriftotsurfacecereales' + totsurfacecereales);
        //console.log('veriftotsurfaceviande' + totsurfaceviande);
        //console.log('veriftotsurfacelait' + totsurfacelait);

        localStorage.setItem(contexte + "totsurface", round(totsurface, 1));
        localStorage.setItem(
          contexte + "totsurfacelegumes",
          round(totsurfacelegumes, 1)
        );
        localStorage.setItem(
          contexte + "totsurfacefruits",
          round(totsurfacefruits, 1)
        );
        localStorage.setItem(
          contexte + "totsurfacecereales",
          round(totsurfacecereales, 1)
        );
        localStorage.setItem(
          contexte + "totsurfaceelevage",
          round(totsurfaceviande + totsurfacelait, 1)
        );
        localStorage.setItem(
          contexte + "totsurfacelait",
          round(totsurfacelait, 1)
        );
        localStorage.setItem(
          contexte + "totsurfaceviande",
          round(totsurfaceviande, 1)
        );

        if (contexte == "") {
          // On ne gère que l'affichage, donc le contexte ne doit pas changer les données
          var pays_spat_rowHtml1 = "";
          var pays_spat_rowHtml2 = "";
          var pays_spat_rowHtml3 = "";
          var pays_spat_rowHtml4 = "";
          var pays_spat_rowHtml5 = "";
          var pays_spat_rowHtml6 = "";
          var pays_spat_rowHtml7 = "";

          if (surface_paysage_prairies_estives_landes != 0) {
            if (surface_paysage_prairies_estives_landes < 1) {
              strsurface_paysage_prairies_estives_landes = "< 1 hectare";
            } else {
              strsurface_paysage_prairies_estives_landes =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_prairies_estives_landes, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (surface_paysage_cultures_fourrageres != 0) {
            if (surface_paysage_cultures_fourrageres < 1) {
              strsurface_paysage_cultures_fourrageres = "< 1 hectare";
            } else {
              strsurface_paysage_cultures_fourrageres =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_cultures_fourrageres, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (surface_paysage_legumineuses != 0) {
            if (surface_paysage_legumineuses < 1) {
              strsurface_paysage_legumineuses = "< 1 hectare";
            } else {
              strsurface_paysage_legumineuses =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_legumineuses, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (surface_paysage_cereales_olea_proteagineux != 0) {
            if (surface_paysage_cereales_olea_proteagineux < 1) {
              strsurface_paysage_cereales_olea_proteagineux = "< 1 hectare";
            } else {
              strsurface_paysage_cereales_olea_proteagineux =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_cereales_olea_proteagineux, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (surface_paysage_cultures_industrielles != 0) {
            if (surface_paysage_cultures_industrielles < 1) {
              strsurface_paysage_cultures_industrielles = "< 1 hectare";
            } else {
              strsurface_paysage_cultures_industrielles =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_cultures_industrielles, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (surface_paysage_fruits != 0) {
            if (surface_paysage_fruits < 1) {
              strsurface_paysage_fruits = "< 1 hectare";
            } else {
              strsurface_paysage_fruits =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_fruits, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (surface_paysage_legumes != 0) {
            if (surface_paysage_legumes < 1) {
              strsurface_paysage_legumes = "< 1 hectare";
            } else {
              strsurface_paysage_legumes =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(surface_paysage_legumes, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }

          if (surface_paysage_prairies_estives_landes != 0)
            pays_spat_rowHtml1 =
              '<tr><td colspan="5"><div class="cadre-categorie  prairie animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-legumes" style="cursor: pointer;"><div class="result-type"><span class="icon-prairie ico-medium prairie"></span></div><div class="result-chiffres row align-items-center"><div class="col titre-categorie mb-0 ">Prairies, estives, landes</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_prairies_estives_landes +
              "</div></div></td></tr>";
          if (surface_paysage_cultures_fourrageres != 0)
            pays_spat_rowHtml2 =
              '<tr><td colspan="5"><div class="cadre-categorie fourrage animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-fruits" style="cursor: pointer;"><div class="result-type"><span class="icon-fourragere ico-medium fourrage"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Cultures fourragères</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_cultures_fourrageres +
              "</div></div></div></td></tr>";
          if (surface_paysage_legumineuses != 0)
            pays_spat_rowHtml3 =
              '<tr><td colspan="5"><div class="cadre-categorie legumineuse animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-cereales" style="cursor: pointer;"><div class="result-type"><span class="icon-legumineuses ico-medium legumineuse"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Légumineuses</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_legumineuses +
              "</div></div></div></td></tr>";
          if (surface_paysage_cereales_olea_proteagineux != 0)
            pays_spat_rowHtml4 =
              '<tr><td colspan="5"><div class="cadre-categorie oleagineux animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-oleagineux ico-medium oleagineux"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Céréales, Oléagineux, protéagineux</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_cereales_olea_proteagineux +
              "</div></div></div></td></tr>";
          if (surface_paysage_cultures_industrielles != 0)
            pays_spat_rowHtml5 =
              '<tr><td colspan="5"><div class="cadre-categorie pdt animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-cereales2 ico-medium pdt"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_cultures_industrielles +
              "</div></div></div></td></tr>";
          if (surface_paysage_fruits != 0)
            pays_spat_rowHtml6 =
              '<tr><td colspan="5"><div class="cadre-categorie fruitssurface animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruitssurface"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Fruits</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_fruits +
              "</div></div></div></td></tr>";
          if (surface_paysage_legumes != 0)
            pays_spat_rowHtml7 =
              '<tr><td colspan="5"><div class="cadre-categorie legumessurface animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumessurface"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Légumes</div><div class="col-auto ml-auto hectares">' +
              strsurface_paysage_legumes +
              "</div></div></div></td></tr>";

          localStorage.setItem(
            "surface_paysage_prairies_estives_landes",
            surface_paysage_prairies_estives_landes
          );
          localStorage.setItem(
            "surface_paysage_cultures_fourrageres",
            surface_paysage_cultures_fourrageres
          );
          localStorage.setItem(
            "surface_paysage_legumineuses",
            surface_paysage_legumineuses
          );
          localStorage.setItem(
            "surface_paysage_cereales_olea_proteagineux",
            surface_paysage_cereales_olea_proteagineux
          );
          localStorage.setItem(
            "surface_paysage_cultures_industrielles",
            surface_paysage_cultures_industrielles
          );
          localStorage.setItem(
            "surface_paysage_fruits",
            surface_paysage_fruits
          );
          localStorage.setItem(
            "surface_paysage_legumes",
            surface_paysage_legumes
          );
          localStorage.setItem(
            "surface_paysage_total",
            surface_paysage_prairies_estives_landes +
              surface_paysage_cultures_fourrageres +
              surface_paysage_legumineuses +
              surface_paysage_cereales_olea_proteagineux +
              surface_paysage_cultures_industrielles +
              surface_paysage_cultures_industrielles +
              surface_paysage_fruits +
              surface_paysage_legumes
          );

          $("#PaysSpatCategoryresultsTable").html("");
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml1);
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml2);
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml3);
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml4);
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml5);
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml6);
          $("#PaysSpatCategoryresultsTable").append(pays_spat_rowHtml7);

          var rowHtmljob1 =
            '<tr class="rowHtmljob"><td colspan="4"><div class="cadre-categorie legumes animated fadeIn fast " onclick="" data-toggle="modal" data-target="#modal-emplois-legumes" style="cursor: pointer;">' +
            '<div class="result-emploi"><span class="icon-emploi ico-medium"></span></div>' +
            '<div class="result-type"><div class="result-graph" id="pcj1" style="width:65px;height:65px;"></div><span class="icon-ico_CATEGORIES_legumes ico-medium legumes"></span></div>' +
            '<div class="result-chiffres"><div class="hectares">Emplois en maraîchage</div></div>' +
            '<div class="d-flex flex-grow align-items-center ml-auto"><div class="chiffre-emploi legumes animated flipInX" id="totaljoblegumes">' +
            parseFloat(totaljoblegumes).toFixed(0) +
            "</div>" +
            '<div class="result-plus"><span class="icon-ico_fleche_detail_gros icon legumes"></span></div></div>' +
            "</div></td>";
          var rowHtmljob2 =
            '<tr class="rowHtmljob"><td colspan="4"><div class="cadre-categorie fruits animated fadeIn fast " onclick="" data-toggle="modal" data-target="#modal-emplois-fruits" style="cursor: pointer;">' +
            '<div class="result-emploi"><span class="icon-emploi ico-medium"></span></div>' +
            '<div class="result-type"><div class="result-graph" id="pcj2" style="width:65px;height:65px;"></div><span class="icon-ico_CATEGORIES_fruits ico-medium fruits"></span></div>' +
            '<div class="result-chiffres"><div class="hectares">Emplois en arboriculture</div></div>' +
            '<div class="d-flex flex-grow align-items-center ml-auto"><div class="chiffre-emploi fruits animated flipInX" id="totaljobfruits">' +
            parseFloat(totaljobfruits).toFixed(0) +
            "</div>" +
            '<div class="result-plus"><span class="icon-ico_fleche_detail_gros icon fruits"></span></div></div>' +
            "</div></td></tr >";
          var rowHtmljob3 =
            '<tr class="rowHtmljob"><td colspan="4"><div class="cadre-categorie cereales animated fadeIn fast " onclick="" data-toggle="modal" data-target="#modal-emplois-cereales" style="cursor: pointer;">' +
            '<div class="result-emploi"><span class="icon-emploi ico-medium"></span></div>' +
            '<div class="result-type"><div class="result-graph" id="pcj3" style="width:65px;height:65px;"></div><span class="icon-ico_CATEGORIES_cereales ico-medium cereales"></span></div>' +
            '<div class="result-chiffres"><div class="hectares">Emplois en cultures céréalières et autres cultures…</div></div>' +
            '<div class="d-flex flex-grow align-items-center ml-auto"><div class="chiffre-emploi cereales animated flipInX" id="totaljobgcultures">' +
            parseFloat(totaljobgcultures).toFixed(0) +
            "</div>" +
            '<div class="result-plus"><span class="icon-ico_fleche_detail_gros icon cereales"></span></div></div>' +
            "</div></td></tr >";
          var rowHtmljob4 =
            '<tr class="rowHtmljob"><td colspan="4"><div class="cadre-categorie viande animated fadeIn fast " onclick="" data-toggle="modal" data-target="#modal-emplois-viande" style="cursor: pointer;">' +
            '<div class="result-emploi"><span class="icon-emploi ico-medium"></span></div>' +
            '<div class="result-type"><div class="result-graph" id="pcj4" style="width:65px;height:65px;"></div><span class="icon-ico_CATEGORIES_viande ico-medium viande"></span></div>' +
            '<div class="result-chiffres"><div class="hectares">Emplois générés par l\'élevage <a href="#" class="info pb-3" style="font-style:normal;" data-tooltip="Les emplois générés par l\'élevage comptabilisent les emplois de l\'élevage ainsi que les emplois liés à la production de l\'alimentation pour l\'élevage." data-placement="left"><span class="icon-ico_element_info"></span></a></div></div>' +
            '<div class="d-flex flex-grow align-items-center ml-auto"><div class="chiffre-emploi viande animated flipInX"  id="totaljobelevage">' +
            parseFloat(totaljobelevage).toFixed(0) +
            "</div>" +
            '<div class="result-plus"><span class="icon-ico_fleche_detail_gros icon viande"></span></div></div>' +
            "</div></td></tr >";

          var data = [
            {
              name: "Emplois en maraîchage",
              value: round(totaljoblegumes, 0),
              image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
              color: "#91C423",
            },
            {
              name: "Emplois en arboriculture",
              value: round(totaljobfruits, 0),
              image: "/assets/img/icons/cat/ico_CATEGORIES_fruits.svg",
              color: "#A261C0",
            },
            {
              name: "Emplois en cultures céréalières et autres cultures…",
              value: round(totaljobgcultures, 0),
              image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
              color: "#F5A623",
            },
            {
              name: "Emplois générés par l'élevage",
              value: round(totaljobelevage, 0),
              image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
              color: "#B57A60",
            },
          ];

          //rowHtml = '<tfoot><tr><td></td><td>TOTALS</td><td><span id="fun-level"></span></td ><td>' + round(SNBTotal, 2) + '</td>><td>' + round(ENTotal, 2) + '</td>><td>' + round(ENOTotal, 2) + '</td></tr ></tfoot>';
          $("#CategoryresultsTable").append(rowHtml1);
          $("#CategoryresultsTable").append(rowHtml2);
          $("#CategoryresultsTable").append(rowHtml3);
          $("#CategoryresultsTable").append(rowHtml4);
          $(".rowHtmljob").remove();
          $("#CategoryresultsTableJob").append(rowHtmljob1);
          $("#CategoryresultsTableJob").append(rowHtmljob2);
          $("#CategoryresultsTableJob").append(rowHtmljob3);
          $("#CategoryresultsTableJob").append(rowHtmljob4);
          $("#CategoryresultsTable").append(rowHtml);
          $("#detaillegumes").html(round(totallegumes, 2) + " Hectares");
          $("#detailfruits").html(round(totalfruits, 2) + " Hectares");
          $("#detailcereales").html(round(totalgcultures, 2) + " Hectares");
          $("#detailviandes").html(round(totallelevage, 2) + " Hectares");
          $("#totaljoblegumes2").html(round(totaljoblegumes, 0) + " emplois");
          $("#totaljobfruits2").html(round(totaljobfruits, 0) + " emplois");
          $("#totaljobcereales2").html(
            round(totaljobgcultures, 0) + " emplois"
          );
          $("#totaljobviande2").html(round(totaljobelevage, 0) + " emplois");

          var totalemplois = round(
            round(totaljoblegumes, 2) +
              round(totaljobfruits, 2) +
              round(totaljobgcultures, 2) +
              round(totaljobelevage, 2),
            2
          );
          //console.log('totaljobelevage' + totaljobelevage);
          //console.log('totalemplois' + totalemplois);
          //console.log('pourcentelevage' + round(parseFloat(totaljobelevage) * 100 / totalemplois, 0));
          //https://codepen.io/sergiopedercini/pen/jmKdbj/
          var totalpondere =
            (SNTotal *
              parseInt(localStorage.getItem("partlocale")) *
              coeffpertes) /
            100;
          var totalpondere =
            (SNTotal *
              parseInt(localStorage.getItem("partlocale")) *
              coeffpertes) /
            100;
          //console.log('totalpondere' + totalpondere + '-SNTotal' + SNTotal + '-localStorage.getItem("partlocale")' + localStorage.getItem("partlocale"));
          setTimeout(function () {
            $("#pc1").html(
              '<svg viewBox="0 0 36 36" class="circular-chart vert"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                round((totsurfacelegumes * 100) / totsurface, 0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((totsurfacelegumes * 100) / totsurface, 0) +
                " %</text></svg>"
            );
            $("#pc2").html(
              '<svg viewBox="0 0 36 36" class="circular-chart bleu"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                round((totsurfacefruits * 100) / totsurface, 0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((totsurfacefruits * 100) / totsurface, 0) +
                " %</text></svg>"
            );
            $("#pc3").html(
              '<svg viewBox="0 0 36 36" class="circular-chart orange"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                round((totsurfacecereales * 100) / totsurface, 0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((totsurfacecereales * 100) / totsurface, 0) +
                " %</text></svg>"
            );
            $("#pc4").html(
              '<svg viewBox="0 0 36 36" class="circular-chart rouge"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                round(
                  ((totsurfaceviande + totsurfacelait) * 100) / totsurface,
                  0
                ) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round(
                  ((totsurfaceviande + totsurfacelait) * 100) / totsurface,
                  0
                ) +
                " %</text></svg>"
            );
          }, 100);
          //$('#pcj1').html('<svg viewBox="0 0 36 36" class="circular-chart vert"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="'+round(totaljoblegumes*100/totalemplois, 0)+', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">'+round(totaljoblegumes*100/totalemplois, 0)+ ' %</text></svg>');
          //$('#pcj2').html('<svg viewBox="0 0 36 36" class="circular-chart bleu"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="'+round(totaljobfruits*100/totalemplois, 0)+', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">'+round(totaljobfruits*100/totalemplois, 0)+' %</text></svg>');
          //$('#pcj3').html('<svg viewBox="0 0 36 36" class="circular-chart orange"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="'+round(totaljobgcultures*100/totalemplois, 0)+', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">'+round(totaljobgcultures*100/totalemplois, 0)+ ' %</text></svg>');
          //$('#pcj4').html('<svg viewBox="0 0 36 36" class="circular-chart rouge"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="'+round(totaljobelevage*100/totalemplois, 0)+', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">'+round(totaljobelevage*100/totalemplois, 0)+ ' %</text></svg>');

          setTimeout(function () {
            var partbiofruits = localStorage.getItem("partbiofruits");
            var partbiolegumes = localStorage.getItem("partbiolegumes");
            var partbiocereales = localStorage.getItem("partbiocereales");
            var partbioelevage = localStorage.getItem("partbioelevage");
            var totaljoblegumes = localStorage.getItem("totaljoblegumes");
            var totaljoblegumesbio = localStorage.getItem("totaljoblegumesbio");
            var totaljobfruits = localStorage.getItem("totaljobfruits");
            var totaljobfruitsbio = localStorage.getItem("totaljobfruitsbio");
            var totaljobgcultures = localStorage.getItem("totaljobgcultures");
            var totaljobgculturesbio = localStorage.getItem(
              "totaljobgculturesbio"
            );
            var totaljobelevage = localStorage.getItem("totaljobelevage");
            var totaljobelevagebio = localStorage.getItem("totaljobelevagebio");
            var emploisfruits =
              totaljobfruitsbio * (partbiofruits / 100) +
              totaljobfruits * ((100 - partbiofruits) / 100);
            var emploislegumes =
              totaljoblegumesbio * (partbiolegumes / 100) +
              totaljoblegumes * ((100 - partbiolegumes) / 100);
            var emploiscereales =
              totaljobgculturesbio * (partbiocereales / 100) +
              totaljobgcultures * ((100 - partbiocereales) / 100);
            var emploiselevage =
              totaljobelevagebio * (partbioelevage / 100) +
              totaljobelevage * ((100 - partbioelevage) / 100);
            var emploistotal =
              emploisfruits + emploislegumes + emploiscereales + emploiselevage;
            //localStorage.setItem("emploisfruits", round(emploisfruits, 1));
            //localStorage.setItem("emploisfruits", emploisfruits);
            //localStorage.setItem("emploislegumes", emploislegumes);
            //localStorage.setItem("emploiscereales", emploiscereales);
            //localStorage.setItem("emploiselevage", emploiselevage);
            //localStorage.setItem("emploistotal", emploistotal);

            if (emploistotal == 0) emploistotal = 1;
            $("#pcj1").html(
              '<svg viewBox="0 0 36 36" class="circular-chart vert"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                parseFloat(
                  (parseFloat(emploislegumes) * 100) / parseFloat(emploistotal)
                ).toFixed(0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((parseFloat(emploislegumes) * 100) / emploistotal, 0) +
                " %</text></svg>"
            );
            $("#pcj2").html(
              '<svg viewBox="0 0 36 36" class="circular-chart bleu"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                parseFloat(
                  (parseFloat(emploisfruits) * 100) / parseFloat(emploistotal)
                ).toFixed(0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((parseFloat(emploisfruits) * 100) / emploistotal, 0) +
                " %</text></svg>"
            );
            $("#pcj3").html(
              '<svg viewBox="0 0 36 36" class="circular-chart orange"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                parseFloat(
                  (parseFloat(emploiscereales) * 100) / parseFloat(emploistotal)
                ).toFixed(0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((parseFloat(emploiscereales) * 100) / emploistotal, 0) +
                " %</text></svg>"
            );
            $("#pcj4").html(
              '<svg viewBox="0 0 36 36" class="circular-chart rouge"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
                parseFloat(
                  (parseFloat(emploiselevage) * 100) / parseFloat(emploistotal)
                ).toFixed(0) +
                ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
                round((parseFloat(emploiselevage) * 100) / emploistotal, 0) +
                " %</text></svg>"
            );
          }, 70);
          $("#Légumes").val(round((totallegumes * 100) / SNTotal, 0));
          $("#Fruits").val(round((totalfruits * 100) / SNTotal, 0));
          $("#Céréales").val(round((totalgcultures * 100) / SNTotal, 0));
          $("#Viandes").val(round((totallelevage * 100) / SNTotal, 0));
          var totalemplois = round(
            round(totaljoblegumes, 0) +
              round(totaljobfruits, 0) +
              round(totaljobgcultures, 0) +
              round(totaljobelevage, 0),
            0
          );
          $("#surface").html(round(SNTotal, 0) + "");
          //$('#surface5').html(round(SNTotal, 0).toLocaleString() + ' Hectares');
          //$('#surface6').html(round(SNTotal, 0));
          if (round(SNTotal, 0).toLocaleString() < 1) {
            var stremplois = "< 1";
          } else {
            var stremplois = round(SNTotal, 0).toLocaleString();
          }

          $("#surface2").html(round(SNTotal, 0) + " Hectares");
          $("#surface3").html(round(SNTotal, 0) + " Hectares");
          $("#surface4").html(round(SNTotal, 0) + " Hectares");
          $("#terrains").html(round(SNTotal / 0.7, 0).toLocaleString());
          $("#emplois").html(
            round(totaljoblegumes, 0) +
              "+" +
              round(totaljobfruits, 0) +
              "+" +
              round(totaljobgcultures, 0) +
              "+" +
              round(totaljobelevage, 0) +
              "=" +
              totalemplois
          );
          //$('#emplois_repartition').html(totalemplois.toLocaleString());
          $("#emplois2").html(stremplois);
          $("#emplois3").html(stremplois);
          //$('#emplois4').html(round(ENTotal, 0));
          $("#teco2").html(round(ENTotal, 0) + " ");
        }
      })
      .fail(function (jqXHR, textStatus, err) {
        log("API Error: " + err);
        //$('#product').text('Error: ' + err);
      });

    if (contexte == "") {
      $.getJSON(urlwstoute).done(function (data) {
        $.each(data, function (key, item) {
          if (item.LandUse == "Légumes") {
            var minbiolegumes = round(item.Curseur_Min_Bio * 100, 0);
            localStorage.setItem("minbiolegumes", minbiolegumes);
          }
          if (item.LandUse == "Fruits") {
            var minbiofruits = round(item.Curseur_Min_Bio * 100, 0);
            localStorage.setItem("minbiofruits", minbiofruits);
          }
          if (item.LandUse == "Grandes Cultures") {
            var minbiogcultures = round(item.Curseur_Min_Bio * 100, 0);
            localStorage.setItem("minbiogcultures", minbiogcultures);
          }
          if (item.LandUse == "Produits de l'élevage") {
            var minbioelevage = round(item.Curseur_Min_Bio * 100, 0);
            localStorage.setItem("minbioelevage", minbioelevage);
          }
        });
      });

      setTimeout(function () {
        adaptebio();
        minbio();
      }, 50);
      setTimeout(function () {
        //draw_products_graphs();
        //draw_landscape_graphs();
        //draw_shapes();
      }, 2000);
    }
  }
}

// this is now updated to add rows to a table rather than the bullet list 10/9/2018 RJK
//#ProductresultsTable
function getLandAreaResultsByProduct(GeoAreaCode, myCatergoryType = 99) {
  //console.log('function getLandAreaResultsByProduct()');
  $("#parameters").empty();
  var id = $("#prodId").val();
  var rowHtml = "";
  var SNTotal = 0; //running total for Surface Nécessaire
  var SNBTotal = 0; //running total for Surface Nécessaire BIO
  var ENTotal = 0; //running total for EMPLOIS_NECESSAIRE
  var ENOTotal = 0; //running total for EMPLOIS_NECESSAIRE_ORGANIC
  var regime_perso = 0;
  var url = "";
  var ws_params = [];
  var is_perso = localStorage.getItem("partviande2");
  if (is_perso != "perso") {
    url =
      uri +
      "?GeoLocale=" +
      GeoAreaCode +
      "&ID_Category_CDTL=" +
      myCatergoryType;
  } else {
    var regimes = [
      "cereales",
      "fruits",
      "oleagineux",
      "huile",
      "legumes",
      "legumineuses",
      "oeufs",
      "patates",
      "produits_laitiers",
      "sucre",
      "viande_blanche",
      "viande_rouge",
    ];
    $.each(regimes, function (key, item) {
      regime_perso =
        regime_perso + 100 + parseInt(localStorage.getItem("tx_" + item));
      ws_params.push(
        (100 + parseInt(localStorage.getItem("tx_" + item))) / 100
      );
    });
    //alert(regime_perso);
    if (regime_perso != 1200 && regime_perso > 0) {
      //url = 'https://convertisseur.azurewebsites.net/API/LandArea/GetLandAreabyProductIDbyCustomAssiette?GeoLocale=' + GeoAreaCode + '&ID_Product_CDTL=' + myCatergoryType + '&Custom_Assiette=[' + ws_params.join(",") + ']';

      var population = localStorage.getItem("population");
      if (population == "toute") {
        url =
          "https://convertisseur.azurewebsites.net/API/LandArea/GetLandAreabyProductIDbyCustomAssiette?GeoLocale=" +
          ArrayGeoAreaCode +
          "&ID_Product_CDTL=99&Custom_Assiette=[" +
          ws_params.join(",") +
          "]";
      }
      if (population == "groupe") {
        var ORGTYPE = "0";
        var COVERS1 = localStorage.getItem("nbenfants");
        var COVERS2 = localStorage.getItem("nbadultes");
        var COVERS3 = localStorage.getItem("nbseniors");
        var COVERS = parseInt(COVERS1) + parseInt(COVERS2) + parseInt(COVERS3);
        url =
          "https://convertisseur.azurewebsites.net/API/LandArea/GetLandareabyConsommateurProfilebyCustomAssiette?GeoLocale=" +
          ArrayGeoAreaCode +
          "&NoCE=" +
          parseInt(COVERS1) +
          "&NoCA=" +
          parseInt(COVERS2) +
          "&NoCPA=" +
          parseInt(COVERS3) +
          "&Custom_Assiette=[" +
          ws_params.join(",") +
          "]";
      }
      if (population == "type") {
        var ORGTYPE = "8";
        var org_covers = [];
        var str_org_covers = "[]";
        if (localStorage.getItem("nbmaternelle")) {
          org_covers.push("1," + localStorage.getItem("nbmaternelle"));
        }
        if (localStorage.getItem("nbprimaire")) {
          org_covers.push("2," + localStorage.getItem("nbprimaire"));
        }
        if (localStorage.getItem("nbcollege")) {
          org_covers.push("3," + localStorage.getItem("nbcollege"));
        }
        if (localStorage.getItem("nblycee")) {
          org_covers.push("4," + localStorage.getItem("nblycee"));
        }
        if (localStorage.getItem("nbuniversite")) {
          org_covers.push("5," + localStorage.getItem("nbuniversite"));
        }
        if (localStorage.getItem("nbrestaurant")) {
          org_covers.push("7," + localStorage.getItem("nbrestaurant"));
        }
        if (localStorage.getItem("nbehpad")) {
          org_covers.push("6," + localStorage.getItem("nbehpad"));
        }
        if (localStorage.getItem("nbhopital")) {
          org_covers.push("8," + localStorage.getItem("nbhopital"));
        }
        if (localStorage.getItem("nbautre")) {
          org_covers.push("8," + localStorage.getItem("nbautre"));
        }
        str_org_covers = "[" + org_covers.join(";") + "]";
        url =
          "https://convertisseur.azurewebsites.net/API/LandArea/GetAllLandAreaOrg_CustomAlimentaion?GeoLocale=" +
          ArrayGeoAreaCode +
          "&Org_Covers=" +
          str_org_covers +
          "&Custom_Assiette=[" +
          ws_params.join(",") +
          "]";
      }
    } else {
      url =
        uri +
        "?GeoLocale=" +
        GeoAreaCode +
        "&ID_Category_CDTL=" +
        myCatergoryType;
    }
  }
  //console.log('getLandAreaResultsByProduct() : '+ url);
  $.getJSON(url)
    .done(function (data) {
      $("#ProductresultsTable tbody").find("tr:gt(0)").remove();
      $("#ProductresultsTable tfoot").remove();
      $.each(data, function (key, item) {
        rowHtml =
          "<tr><td>" +
          item.ID +
          "</td><td>" +
          item.LandUse +
          "</td><td>" +
          round(item.SurfaceArea, 2) +
          "</td ><td>" +
          round(item.SurfaceAreaBio, 2) +
          "</td><td>" +
          round(item.EMPLOIS_NECESSAIRE, 4) +
          "</td><td>" +
          round(item.EMPLOIS_NECESSAIRE_ORGANIC, 4) +
          "</td></tr >";
        SNTotal += item.SurfaceArea;
        SNBTotal += item.SurfaceAreaBio;
        ENTotal += item.EMPLOIS_NECESSAIRE;
        ENOTotal += item.EMPLOIS_NECESSAIRE_ORGANIC;
        $("#ProductresultsTable tbody").append(rowHtml);
      });
      //add a footer row with the totals for each column
      rowHtml =
        "<tfoot><tr><td></td><td>TOTALS</td><td>" +
        round(SNTotal, 2) +
        "</td ><td>" +
        round(SNBTotal, 2) +
        "</td>><td>" +
        round(ENTotal, 2) +
        "</td>><td>" +
        round(ENOTotal, 2) +
        "</td></tr ></tfoot>";
      $("#ProductresultsTable").append(rowHtml);
      $("#surface").html(round(SNTotal, 0) + "");
      $("#surface2").html(round(SNTotal, 0) + " Hectares");
      $("#surface3").html(round(SNTotal, 0) + " Hectares");
      $("#surface4").html(round(SNTotal, 0) + " Hectares");
      $("#terrains").html(round(SNTotal / 0.7, 0).toLocaleString());
      $("#emplois").html(round(ENTotal, 0) + "");
      $("#teco2").html(round(ENTotal, 0) + " ");
    })
    .fail(function (jqXHR, textStatus, err) {
      log("API Error: " + err);
      //$('#product').text('Error: ' + err);
    });
}

function getMultiLandAreaResultsByProduct(
  ArrayGeoAreaCode,
  myCatergoryType = 99,
  contexte = ""
) {
  if (
    ArrayGeoAreaCode == null ||
    ArrayGeoAreaCode == "null" ||
    ArrayGeoAreaCode == ""
  ) {
    var ArrayGeoAreaCode = localStorage.getItem("localitester");
  }
  if (ArrayGeoAreaCode != "[]") {
    //console.log('function getMultiLandAreaResultsByProduct(' + ArrayGeoAreaCode + ', ' + myCatergoryType + ') : calcul des détails de surface et % par catégorie et par culture et répartition / ws GetAllLandAreabyProduct');
    if (contexte == "") $("#parameters").empty();
    var id = $("#prodId").val();
    var rowHtml = "";
    var SNTotal = 0; //running total for Surface Nécessaire
    var SNBTotal = 0; //running total for Surface Nécessaire BIO
    var ENTotal = 0; //running total for EMPLOIS_NECESSAIRE
    var ENOTotal = 0; //running total for EMPLOIS_NECESSAIRE_ORGANIC
    var TotalLandUse = 0;
    var TotalSurfaceArea = 0;
    var TotalSurfaceAreaBio = 0;
    var TotalEMPLOIS_NECESSAIRE = 0;
    var TotalEMPLOIS_NECESSAIRE_ORGANIC = 0;
    var totallegumes = 0;
    var totalfruits = 0;
    var totalgcultures = 0;
    var totallelevage = 0;
    var totallegumes = localStorage.getItem(contexte + "totallegumes");
    var totallegumesbio = localStorage.getItem(contexte + "totallegumesbio");
    var totalfruits = localStorage.getItem(contexte + "totalfruits");
    var totalfruitsbio = localStorage.getItem(contexte + "totalfruitsbio");
    var totalgcultures = localStorage.getItem(contexte + "totalgcultures");
    var totalgculturesbio = localStorage.getItem(
      contexte + "totalgculturesbio"
    );
    var totalelevage = localStorage.getItem(contexte + "totalelevage");
    var totalelevagebio = localStorage.getItem(contexte + "totalelevagebio");

    //var uri='https://convertisseur.azurewebsites.net/api/LandArea/GetAllLandAreabyCategory';
    var uri =
      "https://convertisseur.azurewebsites.net/api/LandArea/GetAllLandAreabyProduct";
    var assiette = localStorage.getItem("partviande");
    var ID_Assiette = 0;
    if (assiette == "" || assiette == null || assiette == "flexi0")
      ID_Assiette = 0;
    if (assiette == "flexi1") ID_Assiette = 1;
    if (assiette == "flexi2") ID_Assiette = 2;
    if (assiette == "vegetarienne") ID_Assiette = 3;
    if (assiette == "vegetalienne") ID_Assiette = 4;

    if (contexte == "actuel") ID_Assiette = 0;
    var mesitems = new Array();
    var AllSNTotal = new Array();
    var AllSNBTotal = new Array();
    var AllENTotal = new Array();
    var AllENOTotal = new Array();
    var AllSNTotaltot = 0;
    var AllSNBTotaltot = 0;
    var AllENTotaltot = 0;
    var AllENOTotaltot = 0;
    var surfaceTotale_1 = 0;
    var surfaceTotale_2 = 0;
    var surfaceTotale_3 = 0;
    var surfaceTotale_4 = 0;
    var surfaceTotale_5 = 0;

    var surfaceTotale_1bio = 0;
    var surfaceTotale_2bio = 0;
    var surfaceTotale_3bio = 0;
    var surfaceTotale_4bio = 0;
    var surfaceTotale_5bio = 0;
    var surfaceimport = 0;
    // 21/09 : modification de la fonction afin de n'appeler le ws qu'une seule fois.

    var regime_perso = 0;
    var url = "";
    var ws_params = [];
    var is_perso = localStorage.getItem("partviande2");
    if (contexte == "actuel") is_perso = "";
    if (is_perso != "perso") {
      url =
        uri +
        "?GeoLocale=" +
        ArrayGeoAreaCode +
        "&ID_Category_CDTL=99&ID_Assiette=" +
        ID_Assiette;
    } else {
      var regimes = [
        "cereales",
        "fruits",
        "oleagineux",
        "huile",
        "legumes",
        "legumineuses",
        "oeufs",
        "patates",
        "produits_laitiers",
        "sucre",
        "viande_blanche",
        "viande_rouge",
      ];
      $.each(regimes, function (key, item) {
        regime_perso =
          regime_perso + 100 + parseInt(localStorage.getItem("tx_" + item));
        ws_params.push(
          (100 + parseInt(localStorage.getItem("tx_" + item))) / 100
        );
        //ws_params.push(parseInt(localStorage.getItem("tx_" + item)) / 100);
      });
      //alert(regime_perso);
      if (regime_perso != 1200 && regime_perso > 0) {
        var population = localStorage.getItem("population");
        if (population == "toute") {
          url =
            "https://convertisseur.azurewebsites.net/API/LandArea/GetLandAreabyProductIDbyCustomAssiette?GeoLocale=" +
            ArrayGeoAreaCode +
            "&ID_Product_CDTL=99&Custom_Assiette=[" +
            ws_params.join(",") +
            "]";
        }
        if (population == "groupe") {
          var ORGTYPE = "0";
          var COVERS1 = localStorage.getItem("nbenfants");
          var COVERS2 = localStorage.getItem("nbadultes");
          var COVERS3 = localStorage.getItem("nbseniors");
          var COVERS =
            parseInt(COVERS1) + parseInt(COVERS2) + parseInt(COVERS3);
          url =
            "https://convertisseur.azurewebsites.net/API/LandArea/GetLandareabyConsommateurProfilebyCustomAssiette?GeoLocale=" +
            ArrayGeoAreaCode +
            "&NoCE=" +
            parseInt(COVERS1) +
            "&NoCA=" +
            parseInt(COVERS2) +
            "&NoCPA=" +
            parseInt(COVERS3) +
            "&Custom_Assiette=[" +
            ws_params.join(",") +
            "]";
        }
        if (population == "type") {
          var ORGTYPE = "8";
          var org_covers = [];
          var str_org_covers = "[]";
          if (localStorage.getItem("nbmaternelle")) {
            org_covers.push("1," + localStorage.getItem("nbmaternelle"));
          }
          if (localStorage.getItem("nbprimaire")) {
            org_covers.push("2," + localStorage.getItem("nbprimaire"));
          }
          if (localStorage.getItem("nbcollege")) {
            org_covers.push("3," + localStorage.getItem("nbcollege"));
          }
          if (localStorage.getItem("nblycee")) {
            org_covers.push("4," + localStorage.getItem("nblycee"));
          }
          if (localStorage.getItem("nbuniversite")) {
            org_covers.push("5," + localStorage.getItem("nbuniversite"));
          }
          if (localStorage.getItem("nbrestaurant")) {
            org_covers.push("7," + localStorage.getItem("nbrestaurant"));
          }
          if (localStorage.getItem("nbehpad")) {
            org_covers.push("6," + localStorage.getItem("nbehpad"));
          }
          if (localStorage.getItem("nbhopital")) {
            org_covers.push("8," + localStorage.getItem("nbhopital"));
          }
          if (localStorage.getItem("nbautre")) {
            org_covers.push("8," + localStorage.getItem("nbautre"));
          }
          str_org_covers = "[" + org_covers.join(";") + "]";
          url =
            "https://convertisseur.azurewebsites.net/API/LandArea/GetAllLandAreaOrg_CustomAlimentaion?GeoLocale=" +
            ArrayGeoAreaCode +
            "&Org_Covers=" +
            str_org_covers +
            "&Custom_Assiette=[" +
            ws_params.join(",") +
            "]";
        }
      } else {
        url =
          uri +
          "?GeoLocale=" +
          ArrayGeoAreaCode +
          "&ID_Category_CDTL=99&ID_Assiette=" +
          ID_Assiette;
      }
    }
    //console.log('getMultiLandAreaResultsByProduct() : '+ url);

    ////console.log(uri + '?GeoLocale=' + ArrayGeoAreaCode + '&ID_Category_CDTL=99&ID_Assiette=' + ID_Assiette);
    $.getJSON(url)
      .done(function (data) {
        var surfaceimport = 0;
        var itemslegumes = new Array(
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          18,
          19,
          20,
          21,
          22
        );
        var itemsfruits = new Array(
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31,
          32,
          33,
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42
        );
        var itemscereales = new Array(
          43,
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          59,
          60,
          61,
          64
        );
        var itemsviande = new Array(54, 55, 56, 57, 58, 62, 63);
        var itemsviandelait = new Array(53);
        ////console.log(uri + '?GeoLocale=' + ArrayGeoAreaCode + '&ID_Category_CDTL=' + myNewCatergoryType+'&ID_Assiette='+ID_Assiette);

        var maligne = "";
        $.each(data, function (key, item) {
          if (itemslegumes.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 1;
          }
          if (itemsfruits.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 2;
          }
          if (itemscereales.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 3;
          }
          if (itemsviande.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 4;
          }
          if (item.ID == "53") {
            var myNewCatergoryType = 4;
          }
          AllSNTotaltot += parseFloat(item.SurfaceArea);
          AllSNBTotaltot += parseFloat(item.SurfaceAreaBio);
          AllENTotaltot += parseFloat(item.EMPLOIS_NECESSAIRE);
          AllENOTotaltot += parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC);
          AllSNTotal[item.ID] = 0;
          AllSNBTotal[item.ID] = 0;
          AllENTotal[item.ID] = 0;
          AllENOTotal[item.ID] = 0;
          if (myNewCatergoryType == "1") {
            surfaceTotale_1 += parseFloat(item.SurfaceArea);
            //console.log('surfaceTotale_1(' + item.LandUse + ')+=' + surfaceTotale_1);
          }
          if (myNewCatergoryType == "2") {
            surfaceTotale_2 += parseFloat(item.SurfaceArea);
            //console.log('surfaceTotale_2(' + item.LandUse + ')+=' + surfaceTotale_2);
          }
          if (myNewCatergoryType == "3") {
            surfaceTotale_3 += parseFloat(item.SurfaceArea);
            //console.log('surfaceTotale_3(' + item.LandUse + ')+=' + surfaceTotale_3);
          }
          if (myNewCatergoryType == "4" && item.ID != "53") {
            surfaceTotale_4 += parseFloat(item.SurfaceArea);
            //console.log('surfaceTotale_4(' + item.LandUse + ')+=' + surfaceTotale_4);
          }
          if (myNewCatergoryType == "4" && item.ID == "53") {
            surfaceTotale_5 += parseFloat(item.SurfaceArea);
            //console.log('surfaceTotale_5(' + item.LandUse + ')+=' + surfaceTotale_5);
          }
          if (myNewCatergoryType == "1") {
            surfaceTotale_1bio += parseFloat(item.SurfaceAreaBio);
            //console.log('surfaceTotale_1bio(' + item.LandUse + ')+=' + surfaceTotale_1bio);
          }

          if (myNewCatergoryType == "2") {
            surfaceTotale_2bio += parseFloat(item.SurfaceAreaBio);
            //console.log('surfaceTotale_2bio(' + item.LandUse + ')+=' + surfaceTotale_2bio);
          }
          if (myNewCatergoryType == "3") {
            surfaceTotale_3bio += parseFloat(item.SurfaceAreaBio);
            //console.log('surfaceTotale_3bio(' + item.LandUse + ')+=' + surfaceTotale_3bio);
          }
          if (myNewCatergoryType == "4" && item.ID != "53") {
            surfaceTotale_4bio += parseFloat(item.SurfaceAreaBio);
            //console.log('surfaceTotale_4bio(' + item.LandUse + ')+=' + surfaceTotale_4bio);
          }
          if (myNewCatergoryType == "4" && item.ID == "53") {
            surfaceTotale_5bio += parseFloat(item.SurfaceAreaBio);
            //console.log('surfaceTotale_5bio(' + item.LandUse + ')+=' + surfaceTotale_5bio);
          }
        });

        var rowHtmlFR = "";
        var rowHtmlVR = "";
        var rowHtmlNR = "";
        var rowHtmlDP = "";
        var rowHtmlFR1 = "";
        var rowHtmlVR1 = "";
        var rowHtmlNR1 = "";
        var rowHtmlDP1 = "";
        var rowHtmlFR2 = "";
        var rowHtmlVR2 = "";
        var rowHtmlNR2 = "";
        var rowHtmlDP2 = "";
        var rowHtmlFR3 = "";
        var rowHtmlVR3 = "";
        var rowHtmlNR3 = "";
        var rowHtmlDP3 = "";
        var rowHtmlFR4 = "";
        var rowHtmlVR4 = "";
        var rowHtmlNR4 = "";
        var rowHtmlDP4 = "";
        var surfaceimport = 0;
        $.each(data, function (key, item) {
          if (itemslegumes.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 1;
          }
          if (itemsfruits.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 2;
          }
          if (itemscereales.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 3;
          }
          if (itemsviande.indexOf(item.ID) != -1) {
            var myNewCatergoryType = 4;
          }
          if (item.ID == "53") {
            myNewCatergoryType = 4;
          }

          if (mesitems.indexOf(item.ID) != -1) {
          } else {
            mesitems.push(item.ID);
          }
          localStorage.setItem(
            "mesitems" + myNewCatergoryType,
            JSON.stringify(mesitems)
          );
          SNTotal += parseFloat(item.SurfaceArea);
          SNBTotal += parseFloat(item.SurfaceAreaBio);
          ENTotal += parseFloat(item.EMPLOIS_NECESSAIRE);
          ENOTotal += parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC);

          AllSNTotal[item.ID] += parseFloat(item.SurfaceArea);
          AllSNBTotal[item.ID] += parseFloat(item.SurfaceAreaBio);
          AllENTotal[item.ID] += parseFloat(item.EMPLOIS_NECESSAIRE);
          AllENOTotal[item.ID] += parseFloat(item.EMPLOIS_NECESSAIRE_ORGANIC);
          var partlocale = localStorage.getItem("partlocale");
          if (partlocale == null || partlocale == "") {
            partlocale = 100;
          }
          var coeffpertes = 1;
          if (localStorage.getItem("coeffpertes") !== null) {
            coeffpertes = parseFloat(localStorage.getItem("coeffpertes"));
          }
          if (contexte == "actuel") {
            partlocale = 100;
            coeffpertes = 1;
          }
          //rowHtml = '<tr><td colspan="5"><li><span class="badge-detail-produit bg-legumes-fonce">' + round(AllSNTotal[item.ID]/AllSNTotaltot, 2) + '</span><span class="nom-produit">' + item.LandUse + '</span></li></td></tr>';
          // ON calcule des pourcentages de culture tradi sur surface tradi
          ////console.log('AllSNTotal['+item.ID+']'+AllSNTotal[item.ID]);
          var PartBioElevage = localStorage.getItem("partbioelevage");
          if (contexte == "actuel")
            PartBioElevage = localStorage.getItem("minbioelevage");
          if (myNewCatergoryType == "4") {
            var partsurfaceelevage =
              (parseFloat(item.SurfaceAreaBio) * PartBioElevage) / 100 +
              (parseFloat(item.SurfaceArea) * (100 - PartBioElevage)) / 100;
            //var partimportelevage = (parseFloat(item.SurfaceAreaBioImportee) * PartBioElevage / 100) + (parseFloat(item.SurfaceAreaImportee) * (100 - PartBioElevage) / 100);
            //var pourcentimportelevage = round(partimportelevage * 100 / partsurfaceelevage, 2);
            //surfaceimport += partimportelevage;
            //console.log('import:'+url)
            //console.log('surfaceimport:'+surfaceimport)
            if (item.ID == "53") {
              //console.log('testlait' + round(item.SurfaceArea, 2));
              var lait =
                ((partlocale * coeffpertes) / 100) * round(item.SurfaceArea, 2);
              var laitbio =
                ((partlocale * coeffpertes) / 100) *
                round(item.SurfaceAreaBio, 2);
            }
            /*
                    var viande=parseInt(totallelevage)-parseInt(lait);
                    var viandebio=parseInt(totallelevagebio)-parseInt(laitbio);
                    var totallaitdef=(parseFloat(laitbio)*PartBioElevage/100)+(parseFloat(lait)*(100-PartBioElevage)/100);
                    var totalviandedef=(parseFloat(viandebio)*PartBioElevage/100)+(parseFloat(viande)*(100-PartBioElevage)/100);

                                           localStorage.setItem("totallait" ,round(lait, 0));
                                           localStorage.setItem("totallaitbio" ,round(laitbio, 0));
                                           localStorage.setItem("totalviande" ,round(viande, 0));
                                           localStorage.setItem("totalviandebio" ,round(viandebio, 0));
                                           localStorage.setItem("totallaitdef" ,round(totallaitdef, 0));
                                           localStorage.setItem("totalviandedef" ,round(totalviandedef, 0));*/
          }

          if (myNewCatergoryType == "1" && contexte == "") {
            var pourcent = round(
              (AllSNTotal[item.ID] * 100) / surfaceTotale_1,
              2
            );
            //console.log('surfaceTotale_1 : ' + surfaceTotale_1);
            //console.log('item.LandUse : ' + item.LandUse + ' : ' + AllSNTotal[item.ID]);
            if (pourcent >= 1) {
              var strpourcent =
                round((AllSNTotal[item.ID] * 100) / surfaceTotale_1, 0) + " %";
            } else {
              var strpourcent = "< 1 %";
            }
            if (item.Production_Geo_Level == "FR")
              rowHtmlFR1 =
                rowHtmlFR1 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-legumes-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "VR")
              rowHtmlVR1 =
                rowHtmlVR1 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-legumes-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "NR")
              rowHtmlNR1 =
                rowHtmlNR1 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-legumes-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "DP")
              rowHtmlDP1 =
                rowHtmlDP1 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-legumes-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
          }
          if (myNewCatergoryType == "2" && contexte == "") {
            var pourcent = round(
              (AllSNTotal[item.ID] * 100) / surfaceTotale_2,
              2
            );
            if (pourcent >= 1) {
              strpourcent =
                round((AllSNTotal[item.ID] * 100) / surfaceTotale_2, 0) + " %";
            } else {
              strpourcent = "< 1 %";
            }
            //rowHtml = '<tr><td colspan="5"><li><span class="badge-detail-produit bg-fruits-fonce text-nowrap">' + strpourcent + ' </span><span class="nom-produit">' + item.LandUse +  ' (' + item.Production_Geo_Level +')</span></li></td></tr>';
            if (item.Production_Geo_Level == "FR")
              rowHtmlFR2 =
                rowHtmlFR2 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-fruits-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "VR")
              rowHtmlVR2 =
                rowHtmlVR2 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-fruits-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "NR")
              rowHtmlNR2 =
                rowHtmlNR2 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-fruits-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "DP")
              rowHtmlDP2 =
                rowHtmlDP2 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-fruits-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
          }
          if (myNewCatergoryType == "3" && contexte == "") {
            var pourcent = round(
              (AllSNTotal[item.ID] * 100) / surfaceTotale_3,
              2
            );
            if (pourcent >= 1) {
              strpourcent =
                round((AllSNTotal[item.ID] * 100) / surfaceTotale_3, 0) + " %";
            } else {
              strpourcent = "< 1 %";
            }
            //rowHtml = '<tr><td colspan="5"><li><span class="badge-detail-produit bg-cereales-fonce text-nowrap">' + strpourcent + ' </span><span class="nom-produit">' + item.LandUse +  ' (' + item.Production_Geo_Level +')</span></li></td></tr>';
            if (item.Production_Geo_Level == "FR")
              rowHtmlFR3 =
                rowHtmlFR3 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-cereales-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "VR")
              rowHtmlVR3 =
                rowHtmlVR3 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-cereales-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "NR")
              rowHtmlNR3 =
                rowHtmlNR3 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-cereales-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "DP")
              rowHtmlDP3 =
                rowHtmlDP3 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-cereales-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
          }
          //if (myNewCatergoryType=='4')         rowHtml = '<tr><td colspan="5"><li><span class="badge-detail-produit bg-viande-fonce text-nowrap">' + round(AllSNTotal[item.ID]*100/surfaceTotale_4, 2) + ' %</span><span class="nom-produit">' + item.LandUse + ' (dont part importée : '+round(partimportelevage, 2) +' hectares)</span></li></td></tr>';
          if (myNewCatergoryType == "4" && contexte == "") {
            var pourcent = round(
              (AllSNTotal[item.ID] * 100) / (surfaceTotale_4 + surfaceTotale_5),
              2
            );
            if (pourcent >= 1) {
              strpourcent =
                round(
                  (AllSNTotal[item.ID] * 100) /
                    (surfaceTotale_4 + surfaceTotale_5),
                  0
                ) + " %";
            } else {
              strpourcent = "< 1 %";
            }
            //rowHtml = '<tr><td colspan="5"><li><span class="badge-detail-produit bg-viande-fonce text-nowrap">' + strpourcent + ' </span><span class="nom-produit">' + item.LandUse +  ' (' + item.Production_Geo_Level +')</span></li></td></tr>';
            if (item.Production_Geo_Level == "FR")
              rowHtmlFR4 =
                rowHtmlFR4 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-viande-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "VR")
              rowHtmlVR4 =
                rowHtmlVR4 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-viande-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "NR")
              rowHtmlNR4 =
                rowHtmlNR4 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-viande-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (item.Production_Geo_Level == "DP")
              rowHtmlDP4 =
                rowHtmlDP4 +
                '<tr><td colspan="5"><li><span class="badge-detail-produit bg-viande-fonce text-nowrap">' +
                strpourcent +
                ' </span><span class="nom-produit">' +
                item.LandUse +
                "</span></li></td></tr>";
            if (contexte == "")
              var partimportelevage =
                (parseFloat(item.SurfaceAreaBioImportee) * PartBioElevage) /
                  100 +
                (parseFloat(item.SurfaceAreaImportee) *
                  (100 - PartBioElevage)) /
                  100;
            if (contexte == "") surfaceimport += partimportelevage;
            //console.log('import2:'+url)
            //console.log('surfaceimport:'+surfaceimport)
          }

          localStorage.setItem(
            contexte + "newtotallegumes",
            parseInt(surfaceTotale_1)
          );
          localStorage.setItem(
            contexte + "newtotalfruits",
            parseInt(surfaceTotale_2)
          );
          localStorage.setItem(
            contexte + "newtotalcereales",
            parseInt(surfaceTotale_3)
          );
          localStorage.setItem(
            contexte + "newtotalviande",
            parseInt(surfaceTotale_4)
          );
          localStorage.setItem(
            contexte + "newtotallait",
            parseInt(surfaceTotale_5)
          );
          localStorage.setItem(
            contexte + "newtotallegumesbio",
            parseInt(surfaceTotale_1bio)
          );
          localStorage.setItem(
            contexte + "newtotalfruitsbio",
            parseInt(surfaceTotale_2bio)
          );
          localStorage.setItem(
            contexte + "newtotalcerealesbio",
            parseInt(surfaceTotale_3bio)
          );
          localStorage.setItem(
            contexte + "newtotalviandebio",
            parseInt(surfaceTotale_4bio)
          );
          localStorage.setItem(
            contexte + "newtotallaitbio",
            parseInt(surfaceTotale_5bio)
          );

          //rowHtml = '<tr><td>' + item.ID + '</td><td>' + item.LandUse + '</td><td id="ttsurf' + item.ID + '">' + round(AllSNTotal[item.ID], 2) + '</td ><td id="surfbio' + item.ID + '">' + round(AllSNBTotal[item.ID], 2) + '</td><td id="job' + item.ID + '">' + round(AllENTotal[item.ID], 4) + '</td><td id="jobbio' + item.ID + '">' + round(AllENOTotal[item.ID], 4) + '</td></tr >';

          // $('#ProductresultsTable'+ myNewCatergoryType +' tbody').append(rowHtml);
        });
        //add a footer row with the totals for each column

        if (contexte == "") {
          $("#surface").html(round(SNTotal, 0) + " ");
          $("#surfacecouverts1").html(round(SNTotal, 0) + " Hectares");
          $("#surface2").html(round(SNTotal, 0) + " Hectares");
          $("#surface3").html(round(SNTotal, 0) + " Hectares");
          $("#surface4").html(round(SNTotal, 0) + " Hectares");
          $("#surfaceimport").html(round(surfaceimport, 0) + "");
          $("#terrains").html(round(SNTotal / 0.7, 0).toLocaleString());
          $("#emplois").html(round(ENTotal, 0) + "");
          $("#teco2").html(round(ENTotal, 0) + " ");

          var choixsurface = localStorage.getItem("choixsurfaceha");
          if (choixsurface != "" && choixsurface != null) {
            var totalsurface =
              parseInt(totallegumes) +
              parseInt(totalfruits) +
              parseInt(totalgcultures) +
              parseInt(totalelevage);

            var surfacecouverts1 = choixsurface * (totallegumes / totalsurface);
            var surfacecouverts2 = choixsurface * (totalfruits / totalsurface);
            var surfacecouverts3 =
              choixsurface * (totalgcultures / totalsurface);
            var surfacecouverts4 = choixsurface * (totalelevage / totalsurface);
            //console.log('choixsurface' + choixsurface);
            //console.log('totalsurface' + totalsurface);
            //console.log('totallegumes' + totallegumes);
            //console.log('totalfruits' + totalfruits);
            //console.log('totalgcultures' + totalgcultures);
            //console.log('totalelevage' + totalelevage);

            $("#surfacecouverts1").html(
              round(surfacecouverts1, 2) + " Hectares"
            );
            $("#surfacecouverts2").html(
              round(surfacecouverts2, 2) + " Hectares"
            );
            $("#surfacecouverts3").html(
              round(surfacecouverts3, 2) + " Hectares"
            );
            $("#surfacecouverts4").html(
              round(surfacecouverts4, 2) + " Hectares"
            );
          }
          $("#ProductresultsTable1 tbody").empty();
          $("#ProductresultsTable2 tbody").empty();
          $("#ProductresultsTable3 tbody").empty();
          $("#ProductresultsTable4 tbody").empty();

          if (rowHtmlDP1 != "") {
            $("#ProductresultsTable1 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau départemental</strong></li></td></tr>'
            );
            $("#ProductresultsTable1 tbody").append(rowHtmlDP1);
          }
          if (rowHtmlVR1 != "") {
            $("#ProductresultsTable1 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (anciennes régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable1 tbody").append(rowHtmlVR1);
          }
          if (rowHtmlNR1 != "") {
            $("#ProductresultsTable1 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (nouvelles régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable1 tbody").append(rowHtmlNR1);
          }
          if (rowHtmlFR1 != "") {
            $("#ProductresultsTable1 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau national</strong></li></td></tr>'
            );
            $("#ProductresultsTable1 tbody").append(rowHtmlFR1);
          }
          if (rowHtmlDP2 != "") {
            $("#ProductresultsTable2 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau départemental</strong></li></td></tr>'
            );
            $("#ProductresultsTable2 tbody").append(rowHtmlDP2);
          }
          if (rowHtmlVR2 != "") {
            $("#ProductresultsTable2 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (anciennes régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable2 tbody").append(rowHtmlVR2);
          }
          if (rowHtmlNR2 != "") {
            $("#ProductresultsTable2 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (nouvelles régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable2 tbody").append(rowHtmlNR2);
          }
          if (rowHtmlFR2 != "") {
            $("#ProductresultsTable2 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau national</strong></li></td></tr>'
            );
            $("#ProductresultsTable2 tbody").append(rowHtmlFR2);
          }
          if (rowHtmlDP3 != "") {
            $("#ProductresultsTable3 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau départemental</strong></li></td></tr>'
            );
            $("#ProductresultsTable3 tbody").append(rowHtmlDP3);
          }
          if (rowHtmlVR3 != "") {
            $("#ProductresultsTable3 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (anciennes régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable3 tbody").append(rowHtmlVR3);
          }
          if (rowHtmlNR3 != "") {
            $("#ProductresultsTable3 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (nouvelles régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable3 tbody").append(rowHtmlNR3);
          }
          if (rowHtmlFR3 != "") {
            $("#ProductresultsTable3 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau national</strong></li></td></tr>'
            );
            $("#ProductresultsTable3 tbody").append(rowHtmlFR3);
          }
          if (rowHtmlDP4 != "") {
            $("#ProductresultsTable4 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau départemental</strong></li></td></tr>'
            );
            $("#ProductresultsTable4 tbody").append(rowHtmlDP4);
          }
          if (rowHtmlVR4 != "") {
            $("#ProductresultsTable4 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (anciennes régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable4 tbody").append(rowHtmlVR4);
          }
          if (rowHtmlNR4 != "") {
            $("#ProductresultsTable4 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau régional (nouvelles régions)</strong></li></td></tr>'
            );
            $("#ProductresultsTable4 tbody").append(rowHtmlNR4);
          }
          if (rowHtmlFR4 != "") {
            $("#ProductresultsTable4 tbody").append(
              '<tr><td colspan="5" class="text-center"><li><strong>Productions recensées au niveau national</strong></li></td></tr>'
            );
            $("#ProductresultsTable4 tbody").append(rowHtmlFR4);
          }
        }
      })
      .fail(function (jqXHR, textStatus, err) {
        log("API Error: " + err);
        //$('#product').text('Error: ' + err);
      });
  }
}

var uri = "https://convertisseur.azurewebsites.net/api/LandArea";

function getLandAreaResultsEtabs(GeoAreaCode) {
  //console.log('function getLandAreaResultsEtabs()');
  $("#parameters").empty();
  //            var myOrgType = $('#ORGTYPE').val();
  //            var myNoCovers = $('#NOCOVERS').val();
  var myOrgType = 1;
  var myNoCovers = 150;
  var rowHtml = "";
  var SNTotal = 0; //running total for Surface Nécessaire
  var SNBTotal = 0; //running total for Surface Nécessaire BIO
  $.getJSON(
    "https://convertisseur.azurewebsites.net/api/LandArea?ID=" +
      GeoAreaCode +
      "&ORGTYPE=" +
      myOrgType +
      "&COVERS=" +
      myNoCovers
  )
    .done(function (data) {
      //console.log('https://convertisseur.azurewebsites.net/api/LandArea?ID=' + GeoAreaCode + '&ORGTYPE=' + myOrgType + '&COVERS=' + myNoCovers);
      $("table tbody").find("tr:gt(0)").remove();
      $("table tfoot").remove();
      $.each(data, function (key, item) {
        rowHtml =
          "<tr><td>" +
          item.ID +
          "</td><td>" +
          item.LandUse +
          "</td><td>" +
          item.SurfaceArea +
          "</td ><td>" +
          item.SurfaceAreaBio +
          "</td></tr >";
        SNTotal += item.SurfaceArea;
        SNBTotal += item.SurfaceAreaBio;
        $("#tableEtabs tbody").append(rowHtml);
      });
      //add a footer row with the totals for each column
      rowHtml =
        "<tfoot><tr><td></td><td>Total Surface</td><td>lol" +
        SNTotal +
        "</td ><td>" +
        SNBTotal +
        "</td></tr ></tfoot>";
      //  $('table').append(rowHtml);
    })
    .fail(function (jqXHR, textStatus, err) {
      log("API Error: " + err);
      //$('#product').text('Error: ' + err);
    });
}

function getLibellePopulation(html = 1) {
  population = localStorage.getItem("population");
  if (population) {
    if (population != "toute") {
      if (population == "groupe") {
        population = "Groupe de personnes (";
        if (parseInt(localStorage.getItem("nbenfants")) > 0) {
          population =
            population + localStorage.getItem("nbenfants") + " enfants, ";
        }
        if (parseInt(localStorage.getItem("nbadultes")) > 0) {
          population =
            population + localStorage.getItem("nbadultes") + " adultes, ";
        }
        if (parseInt(localStorage.getItem("nbseniors")) > 0) {
          population =
            population + localStorage.getItem("nbseniors") + " personnes âgées";
        }
        population = population + ")";
      } else {
        //population = localStorage.getItem("etablissement") + ' - ' + localStorage.getItem("nbetablissement") + ' couverts';
        population = "";
        if (localStorage.getItem("nbmaternelle"))
          population +=
            "<br>Maternelle : " +
            localStorage.getItem("nbmaternelle") +
            " couverts";
        if (localStorage.getItem("nbprimaire"))
          population +=
            "<br>Primaire : " +
            localStorage.getItem("nbprimaire") +
            " couverts";
        if (localStorage.getItem("nbcollege"))
          population +=
            "<br>Collège : " + localStorage.getItem("nbcollege") + " couverts";
        if (localStorage.getItem("nblycee"))
          population +=
            "<br>Lycée : " + localStorage.getItem("nblycee") + " couverts";
        if (localStorage.getItem("nbuniversite"))
          population +=
            "<br>Université : " +
            localStorage.getItem("nbuniversite") +
            " couverts";
        if (localStorage.getItem("nbrestaurant"))
          population +=
            "<br>Restaurant d'entreprise: " +
            localStorage.getItem("nbrestaurant") +
            " couverts";
        if (localStorage.getItem("nbehpad"))
          population +=
            "<br>Maison de retraite : " +
            localStorage.getItem("nbehpad") +
            " couverts";
        if (localStorage.getItem("nbhopital"))
          population +=
            "<br>Hôpital : " + localStorage.getItem("nbhopital") + " couverts";
        if (localStorage.getItem("nbautre"))
          population +=
            "<br>Autre (Prison, ...) : " +
            localStorage.getItem("nbautre") +
            " couverts";
        population = population.substr(4);
      }
    }
  }
  if (html == 1) {
    return population;
  } else {
    return replaceAll(population, "<br>", " - ");
  }
}
function resume() {
  //console.log('function resume()');
  var strpop = "";
  if ($("#population").val() == "toute") {
    strpop = "Toute la population";
  }
  if ($("#population").val() == "type") {
    strpop = "Type établissement";
    if ($("#maternelle").is(":checked"))
      strpop =
        strpop +
        "<br>Ecole Maternelle : " +
        $("#nbmaternelle").val() +
        " couverts";
    if ($("#primaire").is(":checked"))
      strpop =
        strpop + "<br>Ecole Primaire : " + $("#nbprimaire").val() + " couverts";
    if ($("#college").is(":checked"))
      strpop = strpop + "<br>Collège : " + $("#nbcollege").val() + " couverts";
    if ($("#lycee").is(":checked"))
      strpop = strpop + "<br>Lycée : " + $("#nblycee").val() + " couverts";
    if ($("#universite").is(":checked"))
      strpop =
        strpop + "<br>Université : " + $("#nbuniversite").val() + " couverts";
    if ($("#ehpad").is(":checked"))
      strpop =
        strpop +
        "<br>Maison de Retraite : " +
        $("#nbehpad").val() +
        " couverts";
    if ($("#hopital").is(":checked"))
      strpop = strpop + "<br>Hôpital : " + $("#nbhopital").val() + " couverts";
    if ($("#restaurant").is(":checked"))
      strpop =
        strpop +
        "<br>Restaurant d'Entreprise : " +
        $("#nbrestaurant").val() +
        " couverts";

    //strpop=strpop+'<br>Nombre : ' + $('#NOCOVERS').val() + ' personnes';
  }
  if ($("#population").val() == "groupe") {
    strpop = "Groupe de personnes";
    strpop = strpop + "<br>Nombre : " + $("#NOCOVERS").val() + "couverts";
  }
  //console.log('pop' + strpop);
  var select = localStorage.getItem("selection");
  if (select) {
    select = select.replace(/ X /g, "");
    $("#territoire_concerne").html(select);
    $("#population_concernee").html(strpop);
    var fulllocalites = localStorage.getItem("fulllocalites");
    if (fulllocalites != "") {
      var fulllocs = JSON.parse(localStorage.getItem("fulllocalites"));
      //console.log(fulllocs[0]);
      //console.log(Object.values(fulllocs[0]));
      $("#territoire").val(
        Object.values(fulllocs[0]) + "-" + Object.keys(fulllocs[0])
      );
    }
  }
}

function adaptebio(contexte = "") {
  //console.log('function adaptebio() : calcul des emplois et surfaces en fonction de chaque catégorie / pas de ws');
  var partlocale = localStorage.getItem("partlocale");
  if (partlocale == null || partlocale == "") {
    partlocale = 100;
  }
  var coeffpertes = 1;
  if (localStorage.getItem("coeffpertes") !== null) {
    coeffpertes = parseFloat(localStorage.getItem("coeffpertes"));
  }

  var partbiofruits = localStorage.getItem("partbiofruits");
  var partbiolegumes = localStorage.getItem("partbiolegumes");
  var partbiocereales = localStorage.getItem("partbiocereales");
  var partbioelevage = localStorage.getItem("partbioelevage");
  var totaljoblegumes = localStorage.getItem(contexte + "totaljoblegumes");
  var totaljoblegumesbio = localStorage.getItem(
    contexte + "totaljoblegumesbio"
  );
  var totaljobfruits = localStorage.getItem(contexte + "totaljobfruits");
  var totaljobfruitsbio = localStorage.getItem(contexte + "totaljobfruitsbio");
  var totaljobgcultures = localStorage.getItem(contexte + "totaljobgcultures");
  var totaljobgculturesbio = localStorage.getItem(
    contexte + "totaljobgculturesbio"
  );
  var totaljobelevage = localStorage.getItem(contexte + "totaljobelevage");
  var totaljobelevagebio = localStorage.getItem(
    contexte + "totaljobelevagebio"
  );
  var totallegumes = localStorage.getItem(contexte + "totallegumes");
  var totallegumesbio = localStorage.getItem(contexte + "totallegumesbio");
  var totalfruits = localStorage.getItem(contexte + "totalfruits");
  var totalfruitsbio = localStorage.getItem(contexte + "totalfruitsbio");
  var totalgcultures = localStorage.getItem(contexte + "totalgcultures");
  var totalgculturesbio = localStorage.getItem("totalgculturesbio");
  var totalelevage = localStorage.getItem(contexte + "totalelevage");
  var totalelevagebio = localStorage.getItem(contexte + "totalelevagebio");

  var emploisfruits =
    totaljobfruitsbio * (partbiofruits / 100) +
    totaljobfruits * ((100 - partbiofruits) / 100);
  var emploislegumes =
    totaljoblegumesbio * (partbiolegumes / 100) +
    totaljoblegumes * ((100 - partbiolegumes) / 100);
  var emploiscereales =
    totaljobgculturesbio * (partbiocereales / 100) +
    totaljobgcultures * ((100 - partbiocereales) / 100);
  var emploiselevage =
    totaljobelevagebio * (partbioelevage / 100) +
    totaljobelevage * ((100 - partbioelevage) / 100);

  var surfacefruits =
    totalfruitsbio * (partbiofruits / 100) +
    totalfruits * ((100 - partbiofruits) / 100);
  var surfacelegumes =
    totallegumesbio * (partbiolegumes / 100) +
    totallegumes * ((100 - partbiolegumes) / 100);
  var surfacecereales =
    totalgculturesbio * (partbiocereales / 100) +
    totalgcultures * ((100 - partbiocereales) / 100);
  var surfaceelevage =
    totalelevagebio * (partbioelevage / 100) +
    totalelevage * ((100 - partbioelevage) / 100);

  //var totalsurface=Math.round((surfacefruits+surfacelegumes+surfacecereales+surfaceelevage)*(partlocale/100));
  var totalsurface = round(
    surfacefruits + surfacelegumes + surfacecereales + surfaceelevage,
    1
  );
  var totalsurfacefruits = round(
    surfacefruits * ((partlocale * coeffpertes) / 100),
    1
  );
  var totalsurfacelegumes = round(
    surfacelegumes * ((partlocale * coeffpertes) / 100),
    1
  );
  var totalsurfacecereales = round(
    surfacecereales * ((partlocale * coeffpertes) / 100),
    1
  );
  var totalsurfaceelevage = round(
    surfaceelevage * ((partlocale * coeffpertes) / 100),
    1
  );
  var totalemploisfruits = round(emploisfruits * (100 / 100), 15);
  var totalemploislegumes = round(emploislegumes * (100 / 100), 15);
  var totalemploiscereales = round(emploiscereales * (100 / 100), 15);
  var totalemploiselevage = round(emploiselevage * (100 / 100), 15);
  var totalemplois =
    emploisfruits + emploislegumes + emploiscereales + emploiselevage;
  var totalemploisentier = round(
    (emploisfruits + emploislegumes + emploiscereales + emploiselevage) *
      ((partlocale * coeffpertes) / 100),
    1
  );

  setTimeout(function () {
    var totalsurface = round(
      surfacefruits + surfacelegumes + surfacecereales + surfaceelevage,
      1
    );
    //alert(partlocale+'|'+totalsurface);
    localStorage.setItem(contexte + "totalsurface", totalsurface);
    if (contexte == "") {
      if (round(totalsurface, 0) < 10) {
        var strtotalsurface = round(totalsurface, 1);
      } else {
        var strtotalsurface = round(totalsurface, 0);
      }
      strtotalsurface = significatifsurface(totalsurface);
      //console.log('significatifsurface(' + totalsurface + ') = ' + strtotalsurface);

      var stremplois = "";
      if (round(totalemplois, 0) < 1) {
        //$('#emplois4').removeClass('odometer');
        stremplois = "< 1";
        stremplois = round(totalemplois, 1);
        $("#emplois_inf_1").html(" ( inférieur à 1 )");
      } else {
        $("#emplois_inf_1").html("");

        if (round(totalemplois, 0) < 10) {
          stremplois = round(totalemplois, 1);
        } else {
          stremplois = round(totalemplois, 0).toLocaleString();
        }
      }
      if (totalemplois) stremplois = significatifemploi(totalemplois);
      //$('#surface6').removeClass('odometer');
      //$('#surface6').removeClass('odometer');
      $("#surface").html(strtotalsurface);
      $("#surface2").html(strtotalsurface);
      $("#surface3").html(strtotalsurface);
      $("#surface4").html(strtotalsurface);
      $("#surface5").html(strtotalsurface.toLocaleString() + " Hectares");
      $("#surface6").html(significatifsurface(totalsurface));
      //console.log('totalsurface#surface6' + totalsurface)

      $("#emplois").html(stremplois.toLocaleString());
      $("#emplois2").html(stremplois.toLocaleString());
      $("#emplois3").html(stremplois.toLocaleString());
      //$('#emplois4').html(totalemplois);
      $("#emplois4").html(significatifemploi(stremplois));
      $("#emplois_repartition").html(stremplois);
      $("#terrains").html(parseInt(totalsurface / 0.7).toLocaleString());
      if (parseInt((totalsurface * (10000 / 12.5)) / 1000000) == 0) {
        if (parseInt((totalsurface * (10000 / 12.5)) / 1000) == 0) {
          if (parseInt((totalsurface * (10000 / 12.5)) / 10) == 0) {
            $("#parking").html(
              parseFloat(totalsurface * (10000 / 12.5))
                .toFixed(2)
                .toLocaleString()
            );
          } else {
            $("#parking").html(
              parseInt(totalsurface * (10000 / 12.5)).toLocaleString() + ""
            );
          }

          // $('#parking').html(parseFloat(totalsurface*(10000/12.5)).toFixed(2).toLocaleString());
        } else {
          $("#parking").html(
            parseInt((totalsurface * (10000 / 12.5)) / 1000).toLocaleString() +
              " milliers"
          );
        }

        //$('#parking').html(parseFloat(totalsurface*(10000/12.5)/1000000).toFixed(2).toLocaleString());
      } else {
        $("#parking").html(
          parseInt((totalsurface * (10000 / 12.5)) / 1000000).toLocaleString() +
            " millions"
        );
      }
      //console.log('places parking : ' + totalsurface * (10000 / 12.5));

      if (parseInt(totalsurface / 10540) == 0) {
        $("#paris").html(parseFloat(totalsurface / 10540).toFixed(2));
      } else {
        $("#paris").html(parseInt(totalsurface / 10540).toLocaleString());
      }
    }
  }, 50);
  //$('#totalfruits').html(totalsurfacefruits);
  //$('#totallegumes').html(totalsurfacelegumes);
  //$('#totalcereales').html(totalsurfacecereales);
  //$('#totalelevage').html(totalsurfaceelevage);
  if (contexte == "") {
    var strtotalemploisfruits = "";
    var strtotalemploislegumes = "";
    var strtotalemploiscereales = "";
    var strtotalemploiselevage = "";
    if (totalemploisfruits) {
      if (totalemploisfruits < 1) {
        strtotalemploisfruits = "< 1";
      } else {
        strtotalemploisfruits =
          '<span style="font-size:13px;">Environ</span> ' +
          significatifemploi(totalemploisfruits).toLocaleString();
      }
    }
    if (totalemploislegumes) {
      if (totalemploislegumes < 1) {
        strtotalemploislegumes = "< 1";
      } else {
        strtotalemploislegumes =
          '<span style="font-size:13px;">Environ</span> ' +
          significatifemploi(totalemploislegumes).toLocaleString();
      }
    }
    if (totalemploiscereales) {
      if (totalemploiscereales < 1) {
        strtotalemploiscereales = "< 1";
      } else {
        strtotalemploiscereales =
          '<span style="font-size:13px;">Environ</span> ' +
          significatifemploi(totalemploiscereales).toLocaleString();
      }
    }
    if (totalemploiselevage) {
      if (totalemploiselevage < 1) {
        strtotalemploiselevage = "< 1";
      } else {
        strtotalemploiselevage =
          '<span style="font-size:13px;">Environ</span> ' +
          significatifemploi(totalemploiselevage).toLocaleString();
      }
    }

    setTimeout(function () {
      $("#totaljobfruits").html(strtotalemploisfruits);
      $("#totaljoblegumes").html(strtotalemploislegumes);
      $("#totaljobgcultures").html(strtotalemploiscereales);
      $("#totaljobelevage").html(strtotalemploiselevage);
    }, 100);
  }
  //localStorage.setItem("totaljob", totalemplois);
  localStorage.setItem(contexte + "totaljobfruits", totaljobfruits);
  localStorage.setItem(contexte + "totaljoblegumes", totaljoblegumes);
  localStorage.setItem(contexte + "totaljobgcultures", totaljobgcultures);
  localStorage.setItem(contexte + "totaljobelevage", totaljobelevage);

  localStorage.setItem(contexte + "totalemplois", totalemplois);
  localStorage.setItem(contexte + "totalemploisfruits", totalemploisfruits);
  localStorage.setItem(contexte + "totalemploislegumes", totalemploislegumes);
  localStorage.setItem(contexte + "totalemploiscereales", totalemploiscereales);
  localStorage.setItem(contexte + "totalemploiselevage", totalemploiselevage);

  //console.log('#totalelevage' + totalsurfaceelevage);
  //console.log('totalemplois:' + totalemplois);
  //console.log('totalsurface:' + totalsurface);
  //console.log('surfacelegumes:' + surfacelegumes);
  //console.log('totalemplois:' + totalemplois);
}

function getSurfaceActuelle() {
  var surfacetotale2 = 0;
  ArrayGeoAreaCode = localStorage.getItem("localites");
  var new_url_surface =
    "https://convertisseur.azurewebsites.net/API/LandArea/GetSuperficiebyGeolocale?GeoLocale=" +
    ArrayGeoAreaCode;
  $.getJSON(new_url_surface).done(function (data) {
    $.each(data, function (key, item) {
      surfacetotale2 = item.Superficies_Actuelles;
      localStorage.setItem(
        "surface_territoire_actuelle",
        round(surfacetotale2, 0)
      );
    });
  });
  $("#2surfaceterritoiresup2").html(round(surfacetotale2, 0).toLocaleString());
}

function getSurfaceAgricole() {
  // Ne plus utiliser danss la v2 : utiliser getSurfaceAgricole2()
  //console.log('function getSurfaceAgricole()');
  var ArrayGeoAreaCode = localStorage.getItem("localites");
  var uri =
    "https://convertisseur.azurewebsites.net/API/LandArea/GetSuperficieAgricoleUtilisee?GeoLocale=";
  var url = uri + ArrayGeoAreaCode;
  var surfacesup = 0;
  var newsurfacesup = 0;
  var strsurfacesup = 0;
  //console.log('getSurfaceAgricole() : ' + url + '&Parent=0');
  $.getJSON(url + "&Parent=0")
    .done(function (data) {
      var surfacesup = 0;
      var surfacenonagri = 0;
      var surfacetotale = 0;
      $.each(data, function (key, item) {
        //console.log(item);
        //console.log(item.Niveau);
        //console.log(item.Superficie_agricole_utilisee);
        //	surfacesup=surfacesup+item.Superficie_agricole_utilisee;
        if (item.Category_Superficie_utilise == "Total") {
          surfacesup = item.Superficie_agricole_utilisee;
        }
        if (item.Category_Superficie_utilise == "Surface_agricole") {
          surfacesup = item.Superficie_agricole_utilisee;
        }
        if (item.Category_Superficie_utilise == "Surface_totale") {
          var surfacesup2 = item.Superficie_agricole_utilisee;
        }
        if (item.Category_Superficie_utilise == "Cultures_annuelles") {
          //rowHtml = '<tr><td class="" colspan="2" align="center"><Strong>Surface agricoles</strong></td ></tr >';
          //$('#CategoryresultsTableregion').append(rowHtml);
        }
        if (item.Category_Superficie_utilise == "Surfaces_boisées") {
          //rowHtml = '<tr><td class="" colspan="2" align="center"><Strong>Surface non agricoles</strong></td ></tr >';
          //$('#CategoryresultsTableregion').append(rowHtml);
        }
        if (round(surfacesup, 0) == 0) {
          strsurfacesup = "-";
        } else {
          strsurfacesup = round(surfacesup, 0);
        }
        //$('#surfaceterritoire').html(strsurfacesup);
        localStorage.setItem("surfaceterritoireagricole", surfacesup);
        //rowHtml = '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-legumes-fonce">' + round(item.Superficie_agricole_utilisee, 0).toLocaleString() + ' ha</span></td><td><span class="nom-produit">' + replaceAll(item.Category_Superficie_utilise, '_', ' ') + '</span></td ></tr >';
        if (
          item.Category_Superficie_utilise == "Surfaces_boisées" ||
          item.Category_Superficie_utilise == "Sol_artificialisés" ||
          item.Category_Superficie_utilise == "Autres_espaces_non_agricoles"
        ) {
          surfacenonagri += round(item.Superficie_agricole_utilisee, 0);
          //rowHtml = '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-fruits-fonce">' + round(item.Superficie_agricole_utilisee, 0).toLocaleString() + ' ha</span></td><td><span class="nom-produit">' + replaceAll(item.Category_Superficie_utilise, '_', ' ') + '</span></td ></tr >';
          var rowHtml =
            '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-legumes-fonce">' +
            round(item.Superficie_agricole_utilisee, 0).toLocaleString() +
            ' ha</span></td><td><span class="nom-produit">' +
            replaceAll(item.Category_Superficie_utilise, "_", " ") +
            "</span></td ></tr >";
          $("#CategoryresultsTablecommune2").append(rowHtml);
        } else {
          if (
            item.Category_Superficie_utilise != "Surface_agricole" &&
            item.Category_Superficie_utilise != "Surface_totale"
          ) {
            rowHtml =
              '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-legumes-fonce">' +
              round(item.Superficie_agricole_utilisee, 0).toLocaleString() +
              ' ha</span></td><td><span class="nom-produit">' +
              replaceAll(item.Category_Superficie_utilise, "_", " ") +
              "</span></td ></tr >";
            $("#CategoryresultsTablecommune").append(rowHtml);
          }
          if (item.Category_Superficie_utilise == "Surface_totale")
            surfacetotale = round(item.Superficie_agricole_utilisee, 0);
        }
        if (item.Category_Superficie_utilise == "Total") {
          surfacetotale = round(item.Superficie_agricole_utilisee, 0);
          $("#linkmodale1").removeAttr("data-target");
          $("#linkmodale1 .result-plus").addClass("disabled");
          //$('#surfaceterritoire').html('-');
        }
        if (item.Niveau == "Pas de Calc possible") {
          surfacetotale = round(item.Superficie_agricole_utilisee, 0);
          $("#linkmodale1").removeAttr("data-target");
          $("#linkmodale1 .result-plus").addClass("disabled");
        }
      });
      localStorage.setItem("surfacetotale", round(surfacetotale, 0));
      $("#2surfaceterritoiresup").html(round(surfacesup, 0).toLocaleString());
      $("#2surfaceterritoiresup2").html(
        round(surfacetotale, 0).toLocaleString()
      );
      $("#2surfaceterritoiresup3").html(round(surfacesup, 0).toLocaleString());
      $("#2surfaceterritoiresup4").html(
        round(surfacenonagri, 0).toLocaleString()
      );
      if (round(surfacesup, 0) == 0) {
        $("#linkmodale1").removeAttr("data-target");
        $("#linkmodale1 .result-plus").addClass("disabled");
      }
    })
    .fail(function () {
      $("#linkmodale1").removeAttr("data-target");
      $("#linkmodale1 .result-plus").addClass("disabled");
    });
  $.getJSON(url + "&Parent=1")
    .done(function (data) {
      var newsurfacesup = 0;
      var surfacetotale = 0;
      var surfacenonagri = 0;
      $.each(data, function (key, item) {
        //console.log(item);
        //console.log(item.Superficies_Actuelles);
        //console.log(item.Superficie_agricole_utilisee);
        //	surfacesup=surfacesup+item.Superficie_agricole_utilisee;

        if (item.Category_Superficie_utilise == "Surface_agricole") {
          newsurfacesup = item.Superficie_agricole_utilisee;
        }
        if (item.Category_Superficie_utilise == "Surface_totale") {
          var newsurfacesup2 = item.Superficie_agricole_utilisee;
        }
        if (item.Category_Superficie_utilise == "Cultures_annuelles") {
          //rowHtml = '<tr><td class="" colspan="2" align="center"><Strong>Surface agricoles</strong></td ></tr >';
          //$('#CategoryresultsTableregion').append(rowHtml);
        }
        if (item.Category_Superficie_utilise == "Surfaces_boisées") {
          //rowHtml = '<tr><td class="" colspan="2" align="center"><Strong>Surface non agricoles</strong></td ></tr >';
          //$('#CategoryresultsTableregion').append(rowHtml);
        }
        $("#territoiresup").html(item.Niveau);
        var rowHtml = "";
        //rowHtml = '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-legumes-fonce">' + round(item.Superficie_agricole_utilisee, 0).toLocaleString() + ' ha</span></td><td><span class="nom-produit">' + replaceAll(item.Category_Superficie_utilise, '_', ' ') + '</span></td ></tr >';
        if (
          item.Category_Superficie_utilise == "Surfaces_boisées" ||
          item.Category_Superficie_utilise == "Sol_artificialisés" ||
          item.Category_Superficie_utilise == "Autres_espaces_non_agricoles"
        ) {
          surfacenonagri += round(item.Superficie_agricole_utilisee, 0);
          //rowHtml = '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-fruits-fonce">' + round(item.Superficie_agricole_utilisee, 0).toLocaleString() + ' ha</span></td><td><span class="nom-produit">' + replaceAll(item.Category_Superficie_utilise, '_', ' ') + '</span></td ></tr >';
          rowHtml =
            '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-legumes-fonce">' +
            round(item.Superficie_agricole_utilisee, 0).toLocaleString() +
            ' ha</span></td><td><span class="nom-produit">' +
            replaceAll(item.Category_Superficie_utilise, "_", " ") +
            "</span></td ></tr >";
          $("#CategoryresultsTableregion2").append(rowHtml);
        } else {
          if (
            item.Category_Superficie_utilise != "Surface_agricole" &&
            item.Category_Superficie_utilise != "Surface_totale" &&
            item.Category_Superficie_utilise != "Autres_espaces_non_agricoles"
          ) {
            rowHtml =
              '<tr><td class="valeur-produit"><span class="badge-detail-produit bg-legumes-fonce">' +
              round(item.Superficie_agricole_utilisee, 0).toLocaleString() +
              ' ha</span></td><td><span class="nom-produit">' +
              replaceAll(item.Category_Superficie_utilise, "_", " ") +
              "</span></td ></tr >";
            $("#CategoryresultsTableregion").append(rowHtml);
          }
          if (item.Category_Superficie_utilise == "Surface_totale")
            surfacetotale = round(item.Superficie_agricole_utilisee, 0);
        }
        if (item.Niveau == "Pas de Calc possible") {
          surfacetotale = round(item.Superficie_agricole_utilisee, 0);
          $("#linkmodale2").removeAttr("data-target");
          $("#linkmodale2 .result-plus").addClass("disabled");
          $("#surfaceterritoiresup").html("-");
        }
      });
      //localStorage.setItem("surfacetotale", round(surfacetotale, 0));
      $("#surfaceterritoiresup").html(round(newsurfacesup, 0).toLocaleString());
      $("#surfaceterritoiresup2").html(
        round(surfacetotale, 0).toLocaleString()
      );
      $("#surfaceterritoiresup3").html(
        round(newsurfacesup, 0).toLocaleString()
      );
      $("#surfaceterritoiresup4").html(
        round(surfacenonagri, 0).toLocaleString()
      );
      //console.log('newsurfacesup' + newsurfacesup);
      //console.log('newsurfacesup' + newsurfacesup);
      if (round(newsurfacesup, 0) == 0) {
        $("#linkmodale2").removeAttr("data-target");
        $("#linkmodale2 .result-plus").addClass("disabled");
      }
    })
    .fail(function () {
      $("#linkmodale2").removeAttr("data-target");
      $("#linkmodale2 .result-plus").addClass("disabled");
    });
}

function checkEgalim() {
  /*    console.log(parseInt(localStorage.getItem("nbmaternelle")));
        console.log(parseInt(localStorage.getItem("nbprimaire")));
        console.log(parseInt(localStorage.getItem("nbcollege")));
        console.log(parseInt(localStorage.getItem("nblycee")));
        console.log(parseInt(localStorage.getItem("nbuniversite")));
        console.log(parseInt(localStorage.getItem("nbrestaurant")));
        console.log(parseInt(localStorage.getItem("nbhopital")));
        console.log(parseInt(localStorage.getItem("nbehpad")));
        console.log(parseInt(localStorage.getItem("nbautre")));
        */
  if (
    parseInt(localStorage.getItem("nbmaternelle")) > 0 ||
    parseInt(localStorage.getItem("nbprimaire")) > 0 ||
    parseInt(localStorage.getItem("nbcollege")) > 0 ||
    parseInt(localStorage.getItem("nblycee")) > 0 ||
    parseInt(localStorage.getItem("nbuniversite")) > 0 ||
    parseInt(localStorage.getItem("nbrestaurant")) > 0 ||
    parseInt(localStorage.getItem("nbhopital")) > 0 ||
    parseInt(localStorage.getItem("nbehpad")) > 0 ||
    parseInt(localStorage.getItem("nbautre")) > 0
  ) {
    selectEgalim("default");
    var partbio = localStorage.getItem("partbio");

    var partviande = localStorage.getItem("partviande");
    if (partbio < 15) {
      selectEgalim("warning");
      $("#contentEgalim #bio")
        .removeClass("egalimBetter")
        .addClass("egalimWarning");
    }
    if (partbio == 15) {
      selectEgalim("default");
      $("#contentEgalim #bio")
        .removeClass("egalimWarning")
        .removeClass("egalimBetter");
    }
    if (partbio > 15) {
      selectEgalim("better");
      $("#contentEgalim #bio")
        .removeClass("egalimWarning")
        .addClass("egalimBetter");
    }
    if (partviande == "flexi0") {
      selectEgalim("warning");
      $("#contentEgalim #meat")
        .removeClass("egalimBetter")
        .addClass("egalimWarning");
    }
    if (partbio == 15 && partviande == "flexi1") {
      selectEgalim("default");
    }
    if (
      partbio >= 15 &&
      (partviande == "flexi2" ||
        partviande == "vegetarienne" ||
        partviande == "vegetalienne")
    ) {
      selectEgalim("better");
    }

    if (partviande == "flexi1") {
      $("#contentEgalim #meat")
        .removeClass("egalimBetter")
        .removeClass("egalimWarning");
    }
    if (
      partviande == "flexi2" ||
      partviande == "vegetarienne" ||
      partviande == "vegetalienne"
    ) {
      $("#contentEgalim #meat")
        .removeClass("egalimWarning")
        .addClass("egalimBetter");
    }
  } else {
    selectEgalim("none");
  }
}

function initEgalim() {
  var partbio = 15;
  var partbioelevage = 12.1;
  var partbiocereales = 16.1;
  var partbiolegumes = 16.1;
  var partbiofruits = 16.1;
  var partviande = "flexi1";
  localStorage.setItem("partbio", partbio);
  localStorage.setItem("partbioelevage", partbioelevage);
  localStorage.setItem("partbiocereales", partbiocereales);
  localStorage.setItem("partbiolegumes", partbiolegumes);
  localStorage.setItem("partbiofruits", partbiofruits);
  localStorage.setItem("partviande", partviande);
  $("#partbio").val(partbio);
  $("#valpartbio").html(partbio);
  setTimeout(function () {
    updateall();
    selectEgalim("default");
    selectingDiet("quart");
    $("#partbio").rangeslider("update", true);
  }, 100);
}

function getSurfaceAgricole2() {
  //console.log('function getSurfaceAgricole2()');
  var ArrayGeoAreaCode = localStorage.getItem("localites");
  console.log("ArrayGeoAreaCode" + ArrayGeoAreaCode);
  if (ArrayGeoAreaCode == "" || ArrayGeoAreaCode === null)
    ArrayGeoAreaCode = localStorage.getItem("localitester");
  // Surfaces agricoles actuelles du territoire
  //console.log('ArrayGeoAreaCode2'+ArrayGeoAreaCode );
  if (ArrayGeoAreaCode != "" && ArrayGeoAreaCode !== null) {
    var uri =
      "https://convertisseur.azurewebsites.net/API/LandArea/GetUtilisationTerritoireBaiscAgricole?GeoLocale=";
    var url = uri + ArrayGeoAreaCode;
    var surfacesup2 = 0;
    var strsurfacesup2 = 0;
    //console.log('getSurfaceAgricole2() : ' + url + '&Parent=0');
    $.getJSON(url + "&Parent=0")
      .done(function (data) {
        var newsurfacesup2 = 0;
        var prairie_estives_landes = 0;
        var cultures_fourrageres = 0;
        var legumineuses = 0;
        var cereales_olea_proteagineux = 0;
        var cultures_industrielles_alimentaires = 0;
        var fruits = 0;
        var legumes = 0;
        var autres_cultures = 0;

        $.each(data, function (key, item) {
          newsurfacesup2 += parseFloat(item.Superficie_agricole_utilisee);
          if (item.Category_Superficie_utilise == "Prairies")
            prairie_estives_landes += parseFloat(
              item.Superficie_agricole_utilisee
            ); // prairies, estives et landes
          if (item.Category_Superficie_utilise == "Estives et landes")
            prairie_estives_landes += parseFloat(
              item.Superficie_agricole_utilisee
            ); // prairies, estives et landes
          if (item.Category_Superficie_utilise == "Cultures fourragères")
            cultures_fourrageres = parseFloat(
              item.Superficie_agricole_utilisee
            ); // cultures fourragères
          if (item.Category_Superficie_utilise == "Protéagineux, légumineuses")
            legumineuses = parseFloat(item.Superficie_agricole_utilisee); // légumineuses
          if (item.Category_Superficie_utilise == "Céréales")
            cereales_olea_proteagineux += parseFloat(
              item.Superficie_agricole_utilisee
            ); // céréales, oléagineux, protéagineux
          if (
            item.Category_Superficie_utilise == "Oléagineux" ||
            item.Category_Superficie_utilise == "Oléoagineux"
          )
            cereales_olea_proteagineux += parseFloat(
              item.Superficie_agricole_utilisee
            ); // céréales, oléagineux, protéagineux
          if (item.Category_Superficie_utilise == "Cultures industrielles")
            cultures_industrielles_alimentaires += parseFloat(
              item.Superficie_agricole_utilisee
            ); // Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)
          if (item.Category_Superficie_utilise == "Pomme de terre")
            cultures_industrielles_alimentaires += parseFloat(
              item.Superficie_agricole_utilisee
            ); // Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)
          if (item.Category_Superficie_utilise == "Fruits")
            fruits = parseFloat(item.Superficie_agricole_utilisee); // fruits
          if (item.Category_Superficie_utilise == "Légumes")
            legumes = parseFloat(item.Superficie_agricole_utilisee); // légumes
          if (item.Category_Superficie_utilise == "Autres espaces agricoles")
            autres_cultures += parseFloat(item.Superficie_agricole_utilisee); // autres espaces agricoles
          if (item.Category_Superficie_utilise == "Jachères & Gel")
            autres_cultures += parseFloat(item.Superficie_agricole_utilisee); // autres espaces agricoles
          if (item.Category_Superficie_utilise == "Vignes")
            autres_cultures += parseFloat(item.Superficie_agricole_utilisee); // autres espaces agricoles
        });
        localStorage.setItem("surface_agricole_actuelle", newsurfacesup2);
        //console.log('surface_agricole_actuelle' + newsurfacesup2);
        $("#surfaceterritoire").html(round(newsurfacesup2, 0));
        //newsurfacesup2 = localStorage.getItem("surfaceterritoireagricole");
        $("#surface_act").html(significatifsurface(newsurfacesup2));
        $("#surface_act2").html(significatifsurface(newsurfacesup2));
        $("#surface_act3").html(significatifsurface(newsurfacesup2));
        $(".surface_act").html(significatifsurface(newsurfacesup2));
        //console.log('newsurfacesup2' + newsurfacesup2);
        //alert("surface_agricole_actuelle : " + url + '&Parent=1 : ' + newsurfacesup2)

        localStorage.setItem(
          "pays_act_prairie_estives_landes",
          round(prairie_estives_landes, 1)
        );
        localStorage.setItem(
          "pays_act_cultures_fourrageres",
          round(cultures_fourrageres, 1)
        );
        localStorage.setItem("pays_act_legumineuses", round(legumineuses, 1));
        localStorage.setItem(
          "pays_act_cereales_olea_proteagineux",
          round(cereales_olea_proteagineux, 1)
        );
        localStorage.setItem(
          "pays_act_cultures_industrielles_alimentaires",
          round(cultures_industrielles_alimentaires, 1)
        );
        localStorage.setItem("pays_act_fruits", round(fruits, 1));
        localStorage.setItem("pays_act_legumes", round(legumes, 1));
        localStorage.setItem(
          "pays_act_autres_cultures",
          round(autres_cultures, 1)
        );
        //localStorage.setItem("pays_act_jacheres", round((jacheres), 1));

        setTimeout(function () {
          /*
                    var sample_data3 = []
                    if (prairie_estives_landes != 0) sample_data3.push({ "surface": round(prairie_estives_landes, 0), "name": "Prairies, estives et landes", "color": "#D1F18C" });
                    if (cultures_fourrageres != 0) sample_data3.push({ "surface": round(cultures_fourrageres, 0), "name": "Cultures fourragères", "color": "#F1CF98" });
                    if (legumineuses != 0) sample_data3.push({ "surface": round(legumineuses, 0), "name": "Légumineuses", "color": "#FDD084" });
                    if (cereales_olea_proteagineux != 0) sample_data3.push({ "surface": round(cereales_olea_proteagineux, 0), "name": "Céréales", "color": "#FBCDC2" });
                    if (cultures_industrielles_alimentaires != 0) sample_data3.push({ "surface": round(cultures_industrielles_alimentaires, 0), "name": "Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)", "color": "#9CE6FA", "background": "#F1F9E0" });
                    if (fruits != 0) sample_data3.push({ "surface": round(fruits, 0), "name": "Fruits", "color": "#FB97C7" });
                    if (legumes != 0) sample_data3.push({ "surface": round(legumes, 0), "name": "Légumes", "color": "#EABDFF" });
                    if (autres_cultures != 0) sample_data3.push({ "surface": round(autres_cultures, 0), "name": "Autres cultures industrielles", "color": "#9CE6FA", "background": "#F1F9E0" });
                    //if (jacheres!= 0)  sample_data3.push({ "surface": round(jacheres, 0), "name": "Jachères, Gel et autres espaces agricoles", "color": "#BDD687" });
                    setTimeout(function () {
                        if (sample_data3.length > 0) {

                            if (typeof d3plus === 'undefined' || d3plus === null) {
                                // variable is undefined or null
                            } else {
                                $('.wrap-viz4').show();
                                $('.no-data-viz4').hide();
                                $("#viz4").html('');
                                var visualization = d3plus.viz()
                                    .container("#viz4") // container DIV to hold the visualization
                                    .data(sample_data3) // data to use with the visualization
                                    .type("tree_map") // visualization type
                                    .id("name") // key for which our data is unique on
                                    .size("surface") // sizing of blocks
                                    .tooltip({ "share": true, "size": false })
                                    .color("color")
                                    .format("fr_FR")
                                    .draw();
                            }
                        } else {
                            $('.no-data-viz4').show();
                            $('.wrap-viz4').hide();
                        }
                    }, 4500);
                    */
          var pays_rowHtml1 = "";
          var pays_rowHtml2 = "";
          var pays_rowHtml3 = "";
          var pays_rowHtml4 = "";
          var pays_rowHtml5 = "";
          var pays_rowHtml6 = "";
          var pays_rowHtml7 = "";
          var pays_rowHtml8 = "";
          //var pays_rowHtml9 = '';
          var strprairie_estives_landes = "";
          var strcultures_fourrageres = "";
          var strlegumineuses = "";
          var strcereales_olea_proteagineux = "";
          var strcultures_industrielles_alimentaires = "";
          var strfruits = "";
          var strlegumes = "";
          var strautres_cultures = "";

          if (prairie_estives_landes != 0) {
            if (prairie_estives_landes < 1) {
              strprairie_estives_landes = "< 1 hectare";
            } else {
              strprairie_estives_landes =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(prairie_estives_landes, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (cultures_fourrageres != 0) {
            if (cultures_fourrageres < 1) {
              strcultures_fourrageres = "< 1 hectare";
            } else {
              strcultures_fourrageres =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(cultures_fourrageres, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (legumineuses != 0) {
            if (legumineuses < 1) {
              strlegumineuses = "< 1 hectare";
            } else {
              strlegumineuses =
                '<span id="totalcereales">Environ ' +
                significatifsurface(round(legumineuses, 2)).toLocaleString() +
                "</span> hectares";
            }
          }
          if (cereales_olea_proteagineux != 0) {
            if (cereales_olea_proteagineux < 1) {
              strcereales_olea_proteagineux = "< 1 hectare";
            } else {
              strcereales_olea_proteagineux =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(cereales_olea_proteagineux, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (cultures_industrielles_alimentaires != 0) {
            if (cultures_industrielles_alimentaires < 1) {
              strcultures_industrielles_alimentaires = "< 1 hectare";
            } else {
              strcultures_industrielles_alimentaires =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(cultures_industrielles_alimentaires, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          if (fruits != 0) {
            if (fruits < 1) {
              strfruits = "< 1 hectare";
            } else {
              strfruits =
                '<span id="totalcereales">Environ ' +
                significatifsurface(round(fruits, 2)).toLocaleString() +
                "</span> hectares";
            }
          }
          if (legumes != 0) {
            if (legumes < 1) {
              strlegumes = "< 1 hectare";
            } else {
              strlegumes =
                '<span id="totalcereales">Environ ' +
                significatifsurface(round(legumes, 2)).toLocaleString() +
                "</span> hectares";
            }
          }
          if (autres_cultures != 0) {
            if (autres_cultures < 1) {
              strautres_cultures = "< 1 hectare";
            } else {
              strautres_cultures =
                '<span id="totalcereales">Environ ' +
                significatifsurface(
                  round(autres_cultures, 2)
                ).toLocaleString() +
                "</span> hectares";
            }
          }
          //if (jacheres != 0) { if (jacheres < 1) { strjacheres = '< 1 hectare'; } else { strjacheres = '<span id="totalcereales">Environ ' + round(jacheres,0).toLocaleString() + '</span> hectares'; } }
          if (prairie_estives_landes != 0)
            pays_rowHtml1 =
              '<tr><td colspan="5"><div class="cadre-categorie  prairie animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-legumes" style="cursor: pointer;"><div class="result-type"><span class="icon-prairie ico-medium prairie"></span></div><div class="result-chiffres row align-items-center"><div class="col titre-categorie mb-0 ">Prairies, estives, landes</div><div class="col-auto ml-auto hectares">' +
              strprairie_estives_landes +
              "</div></div></td></tr>";
          if (cultures_fourrageres != 0)
            pays_rowHtml2 =
              '<tr><td colspan="5"><div class="cadre-categorie fourrage animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-fruits" style="cursor: pointer;"><div class="result-type"><span class="icon-fourragere ico-medium fourrage"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Cultures fourragères</div><div class="col-auto ml-auto hectares">' +
              strcultures_fourrageres +
              "</div></div></div></td></tr>";
          if (legumineuses != 0)
            pays_rowHtml3 =
              '<tr><td colspan="5"><div class="cadre-categorie legumineuse animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-cereales" style="cursor: pointer;"><div class="result-type"><span class="icon-legumineuses ico-medium legumineuse"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Légumineuses</div><div class="col-auto ml-auto hectares">' +
              strlegumineuses +
              "</div></div></div></td></tr>";
          if (cereales_olea_proteagineux != 0)
            pays_rowHtml4 =
              '<tr><td colspan="5"><div class="cadre-categorie oleagineux animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-oleagineux ico-medium oleagineux"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Céréales, Oléagineux, protéagineux</div><div class="col-auto ml-auto hectares">' +
              strcereales_olea_proteagineux +
              "</div></div></div></td></tr>";
          if (cultures_industrielles_alimentaires != 0)
            pays_rowHtml5 =
              '<tr><td colspan="5"><div class="cadre-categorie pdt animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-cereales2 ico-medium pdt"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)</div><div class="col-auto ml-auto hectares">' +
              strcultures_industrielles_alimentaires +
              "</div></div></div></td></tr>";
          if (fruits != 0)
            var pays_rowHtml6 =
              '<tr><td colspan="5"><div class="cadre-categorie fruitssurface animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruitssurface"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Fruits</div><div class="col-auto ml-auto hectares">' +
              strfruits +
              "</div></div></div></td></tr>";
          if (legumes != 0)
            var pays_rowHtml7 =
              '<tr><td colspan="5"><div class="cadre-categorie legumessurface animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumessurface"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Légumes</div><div class="col-auto ml-auto hectares">' +
              strlegumes +
              "</div></div></div></td></tr>";
          if (autres_cultures != 0)
            var pays_rowHtml8 =
              '<tr><td colspan="5"><div class="cadre-categorie autreindus animated fadeIn" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-autres-cultures ico-medium autreindus"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Autres cultures industrielles</div><div class="col-auto ml-auto hectares">' +
              strautres_cultures +
              "</div></div></div></td></tr>";
          //if (jacheres != 0) var pays_rowHtml9 = '<tr><td colspan="5"><div class="cadre-categorie jachere animated fadeIn" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><div class="result-type"><span class="icon-jachere ico-medium jachere"></span></div><div class="result-chiffres row align-items-center"><div class="col mb-0 titre-categorie">Jachères, Gel et autres espaces agricoles</div><div class="col-auto ml-auto hectares">' +  strjacheres + '</div></div></div></td></tr>';

          $("#PaysCategoryresultsTable").html("");
          $("#PaysCategoryresultsTable").append(pays_rowHtml1);
          $("#PaysCategoryresultsTable").append(pays_rowHtml2);
          $("#PaysCategoryresultsTable").append(pays_rowHtml3);
          $("#PaysCategoryresultsTable").append(pays_rowHtml4);
          $("#PaysCategoryresultsTable").append(pays_rowHtml5);
          $("#PaysCategoryresultsTable").append(pays_rowHtml6);
          $("#PaysCategoryresultsTable").append(pays_rowHtml7);
          $("#PaysCategoryresultsTable").append(pays_rowHtml8);
          //$('#PaysCategoryresultsTable').append(pays_rowHtml9);

          $("div.d3plus_tooltip_data_name").html("Pourcentage");
        }, 100);
      })
      .fail(function () {});

    // POTENTIEL NOURRICIER & Vue Produits
    // /repartition-des-produits-relocalises / Vue produits / Surface actuelle du territoire
    var uri2 =
      "https://convertisseur.azurewebsites.net/API/LandArea/GetUtilisationTerritoirePotentielNourricier?GeoLocale=";
    var url2 = uri2 + ArrayGeoAreaCode;
    var strsurfacesup2 = 0;
    var alim_humaine = 0;
    var elevage = 0;
    var fruits = 0;
    var legumes = 0;
    var jacheres = 0;
    var hors_alim = 0;
    var vignes = 0;
    var autres_espaces = 0;
    //console.log('Potentiel nourricier : ' + url + '&Parent=0');
    $.getJSON(url2 + "&Parent=0")
      .done(function (data) {
        var surfacesup3 = 0;
        $.each(data, function (key, item) {
          surfacesup3 = surfacesup3 + item.Superficie_agricole_utilisee;
          if (
            item.Category_Superficie_utilise ==
            "Cultures annuelles pour alimentation humaine"
          )
            alim_humaine = item.Superficie_agricole_utilisee; // Céréales
          if (
            item.Category_Superficie_utilise ==
            "Elevage (dont alimentation & estives et landes)"
          )
            elevage = item.Superficie_agricole_utilisee; // Elevage
          if (item.Category_Superficie_utilise == "Fruits")
            fruits = item.Superficie_agricole_utilisee; // Fruits
          if (item.Category_Superficie_utilise == "Légumes")
            legumes = item.Superficie_agricole_utilisee; // Légumes
          if (item.Category_Superficie_utilise == "Jachères & Gel")
            jacheres = item.Superficie_agricole_utilisee;
          if (
            item.Category_Superficie_utilise ==
            "Cultures industrielles hors alimentation"
          )
            hors_alim = item.Superficie_agricole_utilisee;
          if (item.Category_Superficie_utilise == "Vignes")
            vignes = item.Superficie_agricole_utilisee;
          if (item.Category_Superficie_utilise == "Autres espaces agricoles")
            autres_espaces = item.Superficie_agricole_utilisee;

          //$('#surface_potentiel').html(strsurfacesup3);
        });

        localStorage.setItem("prod_act_alim_humaine", alim_humaine);
        localStorage.setItem("prod_act_elevage", elevage);
        localStorage.setItem("prod_act_fruits", fruits);
        localStorage.setItem("prod_act_legumes", legumes);
        localStorage.setItem("prod_act_jacheres", jacheres);
        localStorage.setItem("prod_act_hors_alim", hors_alim);
        localStorage.setItem("prod_act_vignes", vignes);
        localStorage.setItem("prod_act_autres_espaces", autres_espaces);

        /*
                var sample_data = []
                if (fruits != 0) sample_data.push({ "surface": round(fruits, 0), "name": "fruits", image: "/assets/img/icons/cat/ico_CATEGORIES_fruits.svg", "color": "#A261C0" });
                if (legumes != 0) sample_data.push({ "surface": round(legumes, 0), "name": "légumes", image: "/assets/img/icons/cat/ico_CATEGORIES_legumes.svg", "color": "#91C423" });
                if (alim_humaine != 0) sample_data.push({ "surface": round(alim_humaine, 0), "name": "Cultures annuelles pour alimentation humaine", image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg", "color": "#F5A623" });
                if (elevage != 0) sample_data.push({ "surface": round(elevage, 0), "name": "Elevage (dont alimentation & estives et landes)", image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg", "color": "#B57A60" });
                if (jacheres != 0) sample_data.push({ "surface": round(jacheres, 0), "name": "Jachères", image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg", "color": "#9CC347" });
                if (hors_alim != 0) sample_data.push({ "surface": round(hors_alim, 0), "name": "Cultures industrielles hors alimentation", image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg", "color": "#62D5F3" });
                if (vignes != 0) sample_data.push({ "surface": round(vignes, 0), "name": "Vignes", image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg", "color": "#4851cd" });
                if (autres_espaces != 0) sample_data.push({ "surface": round(autres_espaces, 0), "name": "Autres surfaces agricoles", image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg", "color": "#a9a9a9" });
                //console.log('sample_data' + JSON.stringify(sample_data));
                //console.log('d3plus');
                surface_actuelle = localStorage.getItem("surface_agricole_actuelle");
                if (surface_actuelle > 0) {
                    setTimeout(function () {
                        if (typeof d3plus === 'undefined' || d3plus === null) {
                        } else {
                            //$("#viz2").html('');
                            $('.wrap-viz2').show();
                            $('.no-data-viz2').hide();
                            $("#viz2").html('');
                            $("#viz2").width('100%');
                            $("#viz2").height('100%');
                            var visualization = d3plus.viz()
                                .container("#viz2") // container DIV to hold the visualization
                                .data(sample_data) // data to use with the visualization
                                .type("tree_map") // visualization type
                                .id("name") // key for which our data is unique on
                                .size("surface") // sizing of blocks
                                .tooltip({ "share": true, "size": true })
                                .labels({ "align": "left", "resize": true })
                                .color("color")
                                .format("fr_FR")
                                .draw();
                            $('.no-data-viz2').hide();
                            //$("#viz2").width('100%');
                            //$("#viz2").css({'width' : '100%'});
                        }
                    }, 4500);
                } else {
                    $('.no-data-viz2').show();
                    $('.wrap-viz2').hide();
                }
                */
        strlegumes = legumes;
        stralim_humaine = alim_humaine;
        strelevage = elevage;
        strautres_espaces = autres_espaces;
        var prod_rowHtml1 = "";
        var prod_rowHtml2 = "";
        var prod_rowHtml3 = "";
        var prod_rowHtml4 = "";
        var prod_rowHtml5 = "";
        var prod_rowHtml6 = "";
        var prod_rowHtml7 = "";
        var prod_rowHtml8 = "";

        if (alim_humaine != 0) {
          if (alim_humaine < 1) {
            stralim_humaine = "< 1 hectare";
          } else {
            stralim_humaine =
              '<span id="totalcereales">Environ ' +
              round(alim_humaine, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (elevage != 0) {
          if (elevage < 1) {
            strelevage = "< 1 hectare";
          } else {
            strelevage =
              '<span id="totalelevage">Environ ' +
              round(elevage, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (fruits != 0) {
          if (fruits < 1) {
            strfruits = "< 1 hectare";
          } else {
            strfruits =
              '<span id="totalfruits">Environ ' +
              round(fruits, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (legumes != 0) {
          if (legumes < 1) {
            strlegumes = "< 1 hectare";
          } else {
            strlegumes =
              '<span id="totallegumes">Environ ' +
              round(legumes, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (jacheres != 0) {
          if (jacheres < 1) {
            strjacheres = "< 1 hectare";
          } else {
            strjacheres =
              '<span id="totalelevage">Environ ' +
              round(jacheres, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (hors_alim != 0) {
          if (hors_alim < 1) {
            strhors_alim = "< 1 hectare";
          } else {
            strhors_alim =
              '<span id="totalhors_alim">Environ ' +
              round(hors_alim, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (vignes != 0) {
          if (vignes < 1) {
            strvignes = "< 1 hectare";
          } else {
            strvignes =
              '<span id="totalelevage">Environ ' +
              round(vignes, 0).toLocaleString() +
              "</span> hectares";
          }
        }
        if (autres_espaces != 0) {
          if (autres_espaces < 1) {
            strautres_espaces = "< 1 hectare";
          } else {
            strautres_espaces =
              '<span id="totalfruits">Environ ' +
              round(autres_espaces, 0).toLocaleString() +
              "</span> hectares";
          }
        }

        $("div.d3plus_tooltip_data_name").html("Pourcentage");
        if (alim_humaine != 0)
          var prod_rowHtml1 =
            '<tr><td colspan="5"><div class="cadre-categorie cereales animated fadeIn delay-1s"><div class="result-graph" id="ppc1" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_cereales ico-medium cereales"></span></div><div class="result-chiffres"><div class="titre-categorie">Cultures annuelles pour alimentation humaine</div><div class="hectares">' +
            stralim_humaine +
            " </div></div></div></td></tr >";
        if (elevage != 0)
          var prod_rowHtml2 =
            '<tr><td colspan="5"><div class="cadre-categorie viande animated fadeIn delay-1s"><div class="result-graph" id="ppc2" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_viande ico-medium viande"></span></div><div class="result-chiffres"><div class="titre-categorie">Elevage (dont alimentation & estives et landes)</div><div class="hectares">' +
            strelevage +
            " </div></div></div></td></tr >";
        if (fruits != 0)
          var prod_rowHtml3 =
            '<tr><td colspan="5"><div class="cadre-categorie fruits animated fadeIn delay-1s"><div class="result-graph" id="ppc3" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruits"></span></div><div class="result-chiffres"><div class="titre-categorie">Fruits</div><div class="hectares">' +
            strfruits +
            " </div></div></td></tr >";
        if (legumes != 0)
          var prod_rowHtml4 =
            '<tr><td colspan="5"><div class="cadre-categorie legumes animated fadeIn delay-1s"><div class="result-graph" id="ppc4" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumes"></span></div><div class="result-chiffres"><div class="titre-categorie">Légumes</div><div class="hectares">' +
            strlegumes +
            " </div></div></td></tr >";
        if (jacheres != 0)
          var prod_rowHtml5 =
            '<tr><td colspan="5"><div class="cadre-categorie jachere animated fadeIn delay-1s"><div class="result-graph" id="ppc5" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-jachere ico-medium jachere"></span></div><div class="result-chiffres"><div class="titre-categorie">Jachères</div><div class="hectares">' +
            strjacheres +
            " </div></div></div></td></tr >";
        if (hors_alim != 0)
          var prod_rowHtml6 =
            '<tr><td colspan="5"><div class="cadre-categorie autreindus animated fadeIn delay-1s"><div class="result-graph" id="ppc6" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-autres-cultures ico-medium autreindus"></span></div><div class="result-chiffres"><div class="titre-categorie">Cultures industrielles hors alimentation</div><div class="hectares">' +
            strhors_alim +
            " </div></div></div></td></tr >";
        if (vignes != 0)
          var prod_rowHtml7 =
            '<tr><td colspan="5"><div class="cadre-categorie vignes animated fadeIn delay-1s"><div class="result-graph" id="ppc7" style="width:65px;height:65px;"></div><div class="result-type"><span class="icon-vignes ico-medium vignes"></span></div><div class="result-chiffres"><div class="titre-categorie">Vignes</div><div class="hectares">' +
            strvignes +
            " </div></div></div></td></tr >";

        setTimeout(function () {
          $("#ppc1").html(
            '<svg viewBox="0 0 36 36" class="circular-chart orange"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((alim_humaine * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((alim_humaine * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc2").html(
            '<svg viewBox="0 0 36 36" class="circular-chart rouge"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((elevage * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((elevage * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc3").html(
            '<svg viewBox="0 0 36 36" class="circular-chart fruits"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((fruits * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((fruits * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc4").html(
            '<svg viewBox="0 0 36 36" class="circular-chart vert"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((legumes * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((legumes * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc5").html(
            '<svg viewBox="0 0 36 36" class="circular-chart jachere"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((jacheres * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((jacheres * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc6").html(
            '<svg viewBox="0 0 36 36" class="circular-chart autreindus"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((hors_alim * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((hors_alim * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc7").html(
            '<svg viewBox="0 0 36 36" class="circular-chart vignes"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((vignes * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((vignes * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
          $("#ppc8").html(
            '<svg viewBox="0 0 36 36" class="circular-chart hors_alim"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="circle" stroke-dasharray="' +
              round((autres_espaces * 100) / surfacesup3, 0) +
              ', 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><text x="18" y="20.35" class="percentage">' +
              round((autres_espaces * 100) / surfacesup3, 0) +
              " %</text></svg>"
          );
        }, 100);

        /*
                    var data = [
                        { "name": "Emplois en maraîchage", "value": round(totaljoblegumes, 0), "image": "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg", "color": "#91C423" },
                        { "name": "Emplois en arboriculture", "value": round(totaljobfruits, 0), "image": "/assets/img/icons/cat/ico_CATEGORIES_fruits.svg", "color": "#A261C0" },
                        { "name": "Emplois en cultures céréalières et autres cultures…", "value": round(totaljobgcultures, 0), "image": "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg", "color": "#F5A623" },
                        { "name": "Emplois générés par l'élevage", "value": round(totaljobelevage, 0), "image": "/assets/img/icons/cat/ico_CATEGORIES_viande.svg", "color": "#B57A60" }
                    ];
                */
        $("#ProdCategoryresultsTable").html("");
        $("#ProdCategoryresultsTable").append(prod_rowHtml1);
        $("#ProdCategoryresultsTable").append(prod_rowHtml2);
        $("#ProdCategoryresultsTable").append(prod_rowHtml3);
        $("#ProdCategoryresultsTable").append(prod_rowHtml4);
        $("#ProdCategoryresultsTable").append(prod_rowHtml5);
        $("#ProdCategoryresultsTable").append(prod_rowHtml6);
        $("#ProdCategoryresultsTable").append(prod_rowHtml7);
        $("#ProdCategoryresultsTable").append(prod_rowHtml8);

        totsurface = localStorage.getItem("totsurface");
        totsurfacelegumes = localStorage.getItem("totsurfacelegumes");
        totsurfacefruits = localStorage.getItem("totsurfacefruits");
        totsurfacecereales = localStorage.getItem("totsurfacecereales");
        totsurfaceelevage = localStorage.getItem("totsurfaceelevage");
        totallegumesdef = localStorage.getItem("totallegumesdef");
        totalfruitsdef = localStorage.getItem("totalfruitsdef");
        totalgculturesdef = localStorage.getItem("totalgculturesdef");
        totalelevagedef = localStorage.getItem("totalelevagedef");

        var potentiel_cereales = 0;
        var potentiel_elevage = 0;
        var potentiel_legumes = 0;
        var potentiel_fruits = 0;
        var potentiel_cereales_olea_proteagineux = 0;
        var potentiel_cultures_industrielles_alimentaires = 0;
        var potentiel_prairies_estives_landes = 0;
        var potentiel_cultures_fourrageres = 0;

        if (alim_humaine != 0 && totsurfacecereales != 0)
          potentiel_cereales = parseInt(
            (alim_humaine / totalgculturesdef) * 100
          );
        if (totsurfaceelevage != 0)
          potentiel_elevage = parseInt((elevage / totalelevagedef) * 100);
        if (totsurfacelegumes != 0)
          potentiel_legumes = parseInt((legumes / totallegumesdef) * 100);
        if (totsurfacefruits != 0)
          potentiel_fruits = parseInt((fruits / totalfruitsdef) * 100);

        localStorage.setItem("potentiel_cereales", potentiel_cereales);
        localStorage.setItem("potentiel_elevage", potentiel_elevage);
        localStorage.setItem("potentiel_legumes", potentiel_legumes);
        localStorage.setItem("potentiel_fruits", potentiel_fruits);

        max = Math.max(
          potentiel_cereales,
          potentiel_elevage,
          potentiel_legumes,
          potentiel_fruits
        );
        $("#bar-cereales .bar").width((potentiel_cereales * 100) / max + "%");
        $("#bar-viande .bar").width((potentiel_elevage * 100) / max + "%");
        $("#bar-fruits .bar").width((potentiel_fruits * 100) / max + "%");
        $("#bar-legumes .bar").width((potentiel_legumes * 100) / max + "%");
        var pc_pot = 0;
        if (max != 0) pc_pot = (100 * 100) / max;
        //console.log(pc_pot);
        setTimeout(function () {
          $("#line-pn").css({ left: parseInt(pc_pot) + "%" });
          //$('#line-pn').animate({"left":"-18px"}, "slow");
        }, 100);

        var surface_paysage_cereales_olea_proteagineux = localStorage.getItem(
          "surface_paysage_cereales_olea_proteagineux"
        );
        var surface_paysage_cultures_industrielles = localStorage.getItem(
          "surface_paysage_cultures_industrielles"
        );
        var surface_paysage_prairies_estives_landes = localStorage.getItem(
          "surface_paysage_prairies_estives_landes"
        );
        var surface_paysage_cultures_fourrageres = localStorage.getItem(
          "surface_paysage_cultures_fourrageres"
        );

        var surface_act_cereales_olea_proteagineux = localStorage.getItem(
          "pays_act_cereales_olea_proteagineux"
        );
        var surface_act_cultures_industrielles = localStorage.getItem(
          "pays_act_cultures_industrielles_alimentaires"
        );
        var surface_act_prairies_estives_landes = localStorage.getItem(
          "pays_act_prairie_estives_landes"
        );
        var surface_act_cultures_fourrageres = localStorage.getItem(
          "pays_act_cultures_fourrageres"
        );

        localStorage.setItem(
          "potentiel_cereales_olea_proteagineux",
          parseInt(
            (100 * parseFloat(surface_act_cereales_olea_proteagineux)) /
              parseFloat(surface_paysage_cereales_olea_proteagineux)
          )
        );
        localStorage.setItem(
          "potentiel_cultures_industrielles_alimentaires",
          parseInt(
            (100 * parseFloat(surface_act_cultures_industrielles)) /
              parseFloat(surface_paysage_cultures_industrielles)
          )
        );
        localStorage.setItem(
          "potentiel_prairies_estives_landes",
          parseInt(
            (100 * parseFloat(surface_act_prairies_estives_landes)) /
              parseFloat(surface_paysage_prairies_estives_landes)
          )
        );
        localStorage.setItem(
          "potentiel_cultures_fourrageres",
          parseInt(
            (100 * parseFloat(surface_act_cultures_fourrageres)) /
              parseFloat(surface_paysage_cultures_fourrageres)
          )
        );

        /*
                    var potentiel_cereales_length = 100;
                    var potentiel_viande_length = 100;
                    var potentiel_fruits_length = 100;
                    var potentiel_legumes_length = 100;

                    if (potentiel_cereales/2 <100) potentiel_cereales_length = potentiel_cereales/2;
                    if (potentiel_elevage/2 <100) potentiel_viande_length = potentiel_elevage/2;
                    if (potentiel_fruits/2 <100) potentiel_fruits_length = potentiel_fruits/2;
                    if (potentiel_legumes/2 <100) potentiel_legumes_length = potentiel_legumes/2;

                    $('#bar-cereales .bar').width(potentiel_cereales_length+'%');
                    $('#bar-viande .bar').width(potentiel_viande_length+'%');
                    $('#bar-fruits .bar').width(potentiel_fruits_length + '%');
                    $('#bar-legumes .bar').width(potentiel_legumes_length + '%');
                */
        $("#potentiel_cereales").html(
          significatifpotentiel(potentiel_cereales) + "%"
        );
        $("#potentiel_elevage").html(
          significatifpotentiel(potentiel_elevage) + "%"
        );
        $("#potentiel_fruits").html(
          significatifpotentiel(potentiel_fruits) + "%"
        );
        $("#potentiel_legumes").html(
          significatifpotentiel(potentiel_legumes) + "%"
        );
      })
      .fail(function () {});

    $.getJSON(url2 + "&Parent=0")
      .done(function (data) {
        var newsurfacesup3 = 0;
        $.each(data, function (key, item) {
          newsurfacesup3 = newsurfacesup3 + item.Superficie_agricole_utilisee;
        });
        localStorage.setItem("surface_potentiel", newsurfacesup3);
        $("#surface_potentiel").html(significatifsurface(newsurfacesup3));
        $(".surface_potentiel").html(significatifsurface(newsurfacesup3));
        //console.log('surface_agricole_actuelle' + newsurfacesup3);
        //console.log('newsurfacesup3' + newsurfacesup3);
        //alert("surface_potentiel : " + url2 + '&Parent=1 : ' +newsurfacesup3)
      })
      .fail(function () {});
    setTimeout(function () {
      //var surface_actuelle =  localStorage.getItem("surface_agricole_actuelle");
      var surface_actuelle = localStorage.getItem("surface_agricole_actuelle");
      //var surface_potentiel =  localStorage.getItem("surface_potentiel");
      var surface_potentiel = localStorage.getItem("totalsurface");

      var surface_territoire_actuelle = localStorage.getItem(
        "surface_territoire_actuelle"
      );
      for (i = 1; i <= 4; i++) {
        $("#surface_territoire_actuelle" + i).html(
          significatifsurface(surface_territoire_actuelle)
        );
      }
      $("#surface_territoire_actuelle7").html(
        significatifsurface(surface_territoire_actuelle)
      );
      $("#surface_potentiel").html(significatifsurface(surface_potentiel));
      for (i = 1; i <= 7; i++) {
        $("#surface_potentiel" + i).html(
          significatifsurface(surface_potentiel)
        );
        //$('#surface_potentiel3').html(significatifsurface(surface_potentiel));
      }
      $(".surface_potentiel").html(significatifsurface(surface_potentiel));
      surface_actuelle = localStorage.getItem("surface_agricole_actuelle");
      $("#surface_act").html(significatifsurface(surface_actuelle));
      $(".surface_act").html(significatifsurface(surface_actuelle));
      $("#surface_act2").html(significatifsurface(surface_actuelle));
      $("#surface_act3").html(significatifsurface(surface_actuelle));

      for (i = 1; i <= 9; i++) {
        $("#surface_act" + i).html(significatifsurface(surface_actuelle));
      }
      localStorage.setItem("potentiel", 0);

      if (parseInt(surface_potentiel) > 0 && parseInt(surface_actuelle) > 0) {
        var potentiel = Math.round(
          (100 * surface_actuelle) / surface_potentiel
        );
        localStorage.setItem("potentiel", potentiel);
        $("#potentiel0").html(potentiel);
        $("#potentiel").html(significatifsurface(potentiel));
        $("#potentiel2").html(significatifsurface(potentiel));
        $("#potentiel3").html(significatifsurface(potentiel));
        $("#potentiel4").html(significatifsurface(potentiel));
        $(".potentiel").html(significatifsurface(potentiel));
        //if ( parseInt(surface_potentiel) >= parseInt(surface_actuelle)) {
        set_bars();
      } else {
        $("#potentiel").html("0");
        $(".potentiel").html("0");
      }
    }, 1000);
  }
}

function draw_shapes() {
  var localites = JSON.parse(localStorage.getItem("localites"));
  var shape1 = "assets/img/surfaces/circle1.svg";
  var shape2 = "assets/img/surfaces/circle-empreinte.svg";
  var shape3 = "assets/img/surfaces/circle-agricole.svg";
  var shape4 = "assets/img/surfaces/circle-empreinte.svg";

  var surface_a_mobiliser = parseFloat(localStorage.getItem("totalsurface"));
  var surface_territoire_actuelle = parseFloat(
    localStorage.getItem("surface_territoire_actuelle")
  );
  var surface_agricole = parseFloat(
    localStorage.getItem("surface_agricole_actuelle")
  );
  var shape_exists = localStorage.getItem("shape");

  if (localites.length == 1) {
    if (shape_exists && shape_exists == "no") {
      $("#shape1").attr("src", shape1);
      $("#shape2").attr("src", shape2);
      $("#shape3").attr("src", shape3);
      $("#shape4").attr("src", shape4);
    } else {
      var shape_url =
        "https://shpf.parcel-app.org/territoires-svg/" + localites[0] + ".svg";
      $.get(shape_url)
        .done(function (data) {
          var shape = shape_url;
          $("#shape1").attr("src", shape);
          $("#shape2").attr("src", shape);
          $("#shape3").attr("src", shape);
          $("#shape4").attr("src", shape);

          $("#shape1").css({
            opacity: 1,
            filter:
              "invert(96%) sepia(2%) saturate(4221%) hue-rotate(33deg) brightness(124%) contrast(91%)",
          });
          $("#shape2").css({
            opacity: 1,
            filter:
              "invert(65%) sepia(99%) saturate(402%) hue-rotate(31deg) brightness(95%) contrast(80%)",
          });
          $("#shape3").css({
            opacity: 1,
            filter:
              "invert(11%) sepia(92%) saturate(4493%) hue-rotate(174deg) brightness(95%) contrast(99%)",
          });
          $("#shape4").css({
            opacity: 0.8,
            filter:
              "invert(65%) sepia(99%) saturate(402%) hue-rotate(31deg) brightness(95%) contrast(80%)",
          });
          localStorage.setItem("shape", "yes");
        })
        .fail(function () {
          localStorage.setItem("shape", "no");
          $("#shape1").attr("src", shape1);
          $("#shape2").attr("src", shape2);
          $("#shape3").attr("src", shape3);
          $("#shape4").attr("src", shape4);
        });
    }
  } else {
    $("#shape1").attr("src", shape1);
    $("#shape2").attr("src", shape2);
    $("#shape3").attr("src", shape3);
    $("#shape4").attr("src", shape4);
  }

  var max = Math.max(
    surface_territoire_actuelle,
    surface_a_mobiliser,
    surface_agricole
  );
  if (max == surface_territoire_actuelle) {
    var coeff1 = 100;
    var coeff2 = Math.round(
      100 * Math.sqrt(surface_a_mobiliser / surface_territoire_actuelle)
    );
    var coeff3 = Math.round(
      100 * Math.sqrt(surface_agricole / surface_territoire_actuelle)
    );
  } else if (max == surface_a_mobiliser) {
    var coeff1 = Math.round(
      100 * Math.sqrt(surface_territoire_actuelle / surface_a_mobiliser)
    );
    var coeff2 = 100;
    var coeff3 = Math.round(
      100 * Math.sqrt(surface_agricole / surface_a_mobiliser)
    );
  } else if (max == surface_agricole) {
    var coeff1 = Math.round(
      100 * Math.sqrt(surface_territoire_actuelle / surface_agricole)
    );
    var coeff2 = Math.round(
      100 * Math.sqrt(surface_a_mobiliser / surface_agricole)
    );
    var coeff3 = 100;
  }
  $("#shape1").css({ opacity: 1, width: coeff1 + "%" });
  $("#shape2").css({ opacity: 1, width: coeff2 + "%" });
  $("#shape3").css({ opacity: 1, width: coeff3 + "%" });
  $("#shape4").css({ opacity: 0.8, width: coeff2 + "%" });
}
function draw_products_graphs() {
  //alert('draw');
  // GRAPH 1
  var totsurfacelegumes = parseFloat(localStorage.getItem("totsurfacelegumes"));
  var totsurfacefruits = parseFloat(localStorage.getItem("totsurfacefruits"));
  var totsurfacecereales = parseFloat(
    localStorage.getItem("totsurfacecereales")
  );
  var totsurfacelait = parseFloat(localStorage.getItem("totsurfacelait"));
  var totsurfaceviande = parseFloat(localStorage.getItem("totsurfaceviande"));

  var sample_data = [];
  if (totsurfacelegumes > 0)
    sample_data.push({
      surface: round(totsurfacelegumes, 0),
      name: "légumes",
      image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#91C423",
    });
  if (totsurfacefruits > 0)
    sample_data.push({
      surface: round(totsurfacefruits, 0),
      name: "fruits",
      image: "/assets/img/icons/cat/ico_CATEGORIES_fruits.svg",
      color: "#A261C0",
    });
  if (totsurfacecereales > 0)
    sample_data.push({
      surface: round(totsurfacecereales, 0),
      name: "céréales",
      image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#F5A623",
    });
  if (totsurfaceviande > 0)
    sample_data.push({
      surface: round(totsurfaceviande, 0),
      name: "Viandes et œufs",
      image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
      color: "#B57A60",
    });
  if (totsurfacelait > 0)
    sample_data.push({
      surface: round(totsurfacelait, 0),
      name: "Produits laitiers",
      image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
      color: "#B57A60",
    });

  if (sample_data.length > 0) {
    if (typeof d3plus === "undefined" || d3plus === null) {
    } else {
      $(".wrap-viz").show();
      $(".no-data-viz").hide();
      //$("#viz").html('');
      $("#viz").width("100%");
      $("#viz").height("100%");
      setTimeout(function () {
        var visualization = d3plus
          .viz()
          .container("#viz") // container DIV to hold the visualization
          .data(sample_data) // data to use with the visualization
          .type("tree_map") // visualization type
          .id("name") // key for which our data is unique on
          .size("surface") // sizing of blocks
          .tooltip({ share: true, size: false })
          .labels({ align: "center", resize: true })
          .color("color")
          .format("fr_FR")
          .draw();
        $("#viz").width("100%");
        $("#viz").height("100%");
        //alert('fini');
      }, 200);
    }
    $("div.d3plus_tooltip_data_name").html("Pourcentage");
  } else {
    $(".no-data-viz").show();
    $(".wrap-viz").hide();
  }

  // GRAPH 2
  var alim_humaine = parseFloat(localStorage.getItem("prod_act_alim_humaine"));
  var elevage = parseFloat(localStorage.getItem("prod_act_elevage"));
  var fruits = parseFloat(localStorage.getItem("prod_act_fruits"));
  var legumes = parseFloat(localStorage.getItem("prod_act_legumes"));
  var jacheres = parseFloat(localStorage.getItem("prod_act_jacheres"));
  var hors_alim = parseFloat(localStorage.getItem("prod_act_hors_alim"));
  var vignes = parseFloat(localStorage.getItem("prod_act_vignes"));
  var autres_espaces = parseFloat(
    localStorage.getItem("prod_act_autres_espaces")
  );
  var surface_actuelle = parseFloat(
    localStorage.getItem("surface_agricole_actuelle")
  );

  var sample_data2 = [];
  if (fruits != 0)
    sample_data2.push({
      surface: round(fruits, 0),
      name: "fruits",
      image: "/assets/img/icons/cat/ico_CATEGORIES_fruits.svg",
      color: "#A261C0",
    });
  if (legumes != 0)
    sample_data2.push({
      surface: round(legumes, 0),
      name: "légumes",
      image: "/assets/img/icons/cat/ico_CATEGORIES_legumes.svg",
      color: "#91C423",
    });
  if (alim_humaine != 0)
    sample_data2.push({
      surface: round(alim_humaine, 0),
      name: "Cultures annuelles pour alimentation humaine",
      image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#F5A623",
    });
  if (elevage != 0)
    sample_data2.push({
      surface: round(elevage, 0),
      name: "Elevage (dont alimentation & estives et landes)",
      image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
      color: "#B57A60",
    });
  if (jacheres != 0)
    sample_data2.push({
      surface: round(jacheres, 0),
      name: "Jachères",
      image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#9CC347",
    });
  if (hors_alim != 0)
    sample_data2.push({
      surface: round(hors_alim, 0),
      name: "Cultures industrielles hors alimentation",
      image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#62D5F3",
    });
  if (vignes != 0)
    sample_data2.push({
      surface: round(vignes, 0),
      name: "Vignes",
      image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
      color: "#4851cd",
    });
  if (autres_espaces != 0)
    sample_data2.push({
      surface: round(autres_espaces, 0),
      name: "Autres surfaces agricoles",
      image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
      color: "#a9a9a9",
    });
  if (surface_actuelle > 0) {
    if (typeof d3plus === "undefined" || d3plus === null) {
    } else {
      setTimeout(function () {
        $(".wrap-viz2").show();
        $(".no-data-viz2").hide();
        $("#viz2").html("");
        $("#viz2").width("100%");
        $("#viz2").height("100%");
        var visualization = d3plus
          .viz()
          .container("#viz2") // container DIV to hold the visualization
          .data(sample_data2) // data to use with the visualization
          .type("tree_map") // visualization type
          .id("name") // key for which our data is unique on
          .size("surface") // sizing of blocks
          .tooltip({ share: true, size: true })
          .labels({ align: "center", resize: true })
          .color("color")
          .format("fr_FR")
          .draw();
        $("#viz").width("100%");
        $("#viz").height("100%");
      }, 200);
      $(".no-data-viz2").hide();
    }
  } else {
    $(".no-data-viz2").show();
    $(".wrap-viz2").hide();
  }
}

function draw_landscape_graphs() {
  // GRAPH 1
  var surface_paysage_prairies_estives_landes = parseFloat(
    localStorage.getItem("surface_paysage_prairies_estives_landes")
  );
  var surface_paysage_cultures_fourrageres = parseFloat(
    localStorage.getItem("surface_paysage_cultures_fourrageres")
  );
  var surface_paysage_legumineuses = parseFloat(
    localStorage.getItem("surface_paysage_legumineuses")
  );
  var surface_paysage_cereales_olea_proteagineux = parseFloat(
    localStorage.getItem("surface_paysage_cereales_olea_proteagineux")
  );
  var surface_paysage_cultures_industrielles = parseFloat(
    localStorage.getItem("surface_paysage_cultures_industrielles")
  );
  var surface_paysage_fruits = parseFloat(
    localStorage.getItem("surface_paysage_fruits")
  );
  var surface_paysage_legumes = parseFloat(
    localStorage.getItem("surface_paysage_legumes")
  );

  var sample_data4 = [];
  if (surface_paysage_prairies_estives_landes != 0)
    sample_data4.push({
      surface: round(surface_paysage_prairies_estives_landes, 0),
      name: "Prairies, estives et landes",
      color: "#D1F18C",
    });
  if (surface_paysage_cultures_fourrageres != 0)
    sample_data4.push({
      surface: round(surface_paysage_cultures_fourrageres, 0),
      name: "Cultures fourragères",
      color: "#F1CF98",
    });
  if (surface_paysage_legumineuses != 0)
    sample_data4.push({
      surface: round(surface_paysage_legumineuses, 0),
      name: "Légumineuses",
      color: "#FDD084",
    });
  if (surface_paysage_cereales_olea_proteagineux != 0)
    sample_data4.push({
      surface: round(surface_paysage_cereales_olea_proteagineux, 0),
      name: "Céréales, Oléagineux, protéagineux",
      color: "#FBCDC2",
    });
  if (surface_paysage_cultures_industrielles != 0)
    sample_data4.push({
      surface: round(surface_paysage_cultures_industrielles, 0),
      name: "Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)",
      color: "#9CE6FA",
      background: "#F1F9E0",
    });
  if (surface_paysage_fruits != 0)
    sample_data4.push({
      surface: round(surface_paysage_fruits, 0),
      name: "Fruits",
      color: "#FB97C7",
    });
  if (surface_paysage_legumes != 0)
    sample_data4.push({
      surface: round(surface_paysage_legumes, 0),
      name: "Légumes",
      color: "#EABDFF",
    });

  if (sample_data4.length > 0) {
    if (typeof d3plus === "undefined" || d3plus === null) {
    } else {
      setTimeout(function () {
        $(".wrap-viz3").show();
        $(".no-data-viz3").hide();
        $("#viz3").html("");
        $("#viz3").width("100%");
        $("#viz3").height("100%");
        var visualization = d3plus
          .viz()
          .container("#viz3") // container DIV to hold the visualization
          .data(sample_data4) // data to use with the visualization
          .type("tree_map") // visualization type
          .id("name") // key for which our data is unique on
          .size("surface") // sizing of blocks
          .tooltip({ share: true, size: false })
          .labels({ align: "center", resize: true })
          .color("color")
          .format("fr_FR")
          .draw();
        $("#viz3").width("100%");
        $("#viz3").height("100%");
      }, 200);
    }
  } else {
    $(".no-data-viz3").show();
    $(".wrap-viz3").hide();
  }

  // GRAPH 2
  var prairie_estives_landes = parseFloat(
    localStorage.getItem("pays_act_prairie_estives_landes")
  );
  var cultures_fourrageres = parseFloat(
    localStorage.getItem("pays_act_cultures_fourrageres")
  );
  var legumineuses = parseFloat(localStorage.getItem("pays_act_legumineuses"));
  var cereales_olea_proteagineux = parseFloat(
    localStorage.getItem("pays_act_cereales_olea_proteagineux")
  );
  var cultures_industrielles_alimentaires = parseFloat(
    localStorage.getItem("pays_act_cultures_industrielles_alimentaires")
  );
  var fruits = parseFloat(localStorage.getItem("pays_act_fruits"));
  var legumes = parseFloat(localStorage.getItem("pays_act_legumes"));
  var autres_cultures = parseFloat(
    localStorage.getItem("pays_act_autres_cultures")
  );

  var sample_data3 = [];
  if (prairie_estives_landes != 0)
    sample_data3.push({
      surface: round(prairie_estives_landes, 0),
      name: "Prairies, estives et landes",
      color: "#D1F18C",
    });
  if (cultures_fourrageres != 0)
    sample_data3.push({
      surface: round(cultures_fourrageres, 0),
      name: "Cultures fourragères",
      color: "#F1CF98",
    });
  if (legumineuses != 0)
    sample_data3.push({
      surface: round(legumineuses, 0),
      name: "Légumineuses",
      color: "#FDD084",
    });
  if (cereales_olea_proteagineux != 0)
    sample_data3.push({
      surface: round(cereales_olea_proteagineux, 0),
      name: "Céréales, Oléagineux, protéagineux",
      color: "#FBCDC2",
    });
  if (cultures_industrielles_alimentaires != 0)
    sample_data3.push({
      surface: round(cultures_industrielles_alimentaires, 0),
      name: "Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)",
      color: "#9CE6FA",
      background: "#F1F9E0",
    });
  if (fruits != 0)
    sample_data3.push({
      surface: round(fruits, 0),
      name: "Fruits",
      color: "#FB97C7",
    });
  if (legumes != 0)
    sample_data3.push({
      surface: round(legumes, 0),
      name: "Légumes",
      color: "#EABDFF",
    });
  if (autres_cultures != 0)
    sample_data3.push({
      surface: round(autres_cultures, 0),
      name: "Autres cultures industrielles",
      color: "#9CE6FA",
      background: "#F1F9E0",
    });

  if (sample_data3.length > 0) {
    if (typeof d3plus === "undefined" || d3plus === null) {
    } else {
      setTimeout(function () {
        $(".wrap-viz4").show();
        $(".no-data-viz4").hide();
        $("#viz4").html("");
        $("#viz4").width("100%");
        $("#viz4").height("100%");
        var visualization = d3plus
          .viz()
          .container("#viz4") // container DIV to hold the visualization
          .data(sample_data3) // data to use with the visualization
          .type("tree_map") // visualization type
          .id("name") // key for which our data is unique on
          .size("surface") // sizing of blocks
          .tooltip({ share: true, size: false })
          .labels({ align: "center", resize: true })
          .color("color")
          .format("fr_FR")
          .draw();
        $("#viz4").width("100%");
        $("#viz4").height("100%");
      }, 200);
    }
  } else {
    $(".no-data-viz4").show();
    $(".wrap-viz4").hide();
  }

  $("div.d3plus_tooltip_data_name").html("Pourcentage");
}

function set_bars() {
  var potentiel = 0;
  var potentiel = localStorage.getItem("potentiel");
  setTimeout(function () {
    if (parseInt(potentiel) < 100) {
      $("#bar1 .bar").width("100%");
      $("#bar2 .bar").width(parseInt(potentiel) + "%");
    } else {
      $("#bar2 .bar").width("100%");
      $("#bar1 .bar").width(parseInt(10000 / parseInt(potentiel)) + "%");
      //$('#sbar1').c({"background-color": "yellow", 'width:': '100% !important'});
      //$('#sbar1').css({"background-color": "yellow", 'width:': parseInt(10000/parseInt(potentiel))+'%'});
      //$('#bar1 .bar').css({'width:': 5+'%'});
      //alert(parseInt(10000/parseInt(potentiel))+'%')
    }
  }, 200);
}

function get_groupes() {
  ws_params = [];
  var regimes = [
    "cereales",
    "fruits",
    "oleagineux",
    "huile",
    "legumes",
    "legumineuses",
    "oeufs",
    "patates",
    "produits_laitiers",
    "sucre",
    "viande_blanche",
    "viande_rouge",
  ];
  $.each(regimes, function (key, item) {
    ws_params.push((100 + parseInt(localStorage.getItem("tx_" + item))) / 100);
  });
  var uri =
    "https://convertisseur.azurewebsites.net/API/Alimentation/Get_Equilibre_Nutritionel_by_CustomAlimentaion?Custom_Assiette=" +
    ws_params.join(",");
  //console.log(uri);

  $.getJSON(uri)
    .done(function (data) {
      var energie_totale = 0;
      var proteines = 0;
      var glucides = 0;
      var lipides = 0;
      var fibres = 0;

      $.each(data, function (key, item) {
        if (item.Name_NutrtionelType == "Energie_totale")
          energie_totale = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Proteines")
          proteines = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Glucides")
          glucides = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Lipides")
          lipides = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Fibres_alimentaires")
          fibres = item.Value_NutrtionelType;
      });
      alert(
        energie_totale +
          "|" +
          proteines +
          "|" +
          glucides +
          "|" +
          lipides +
          "|" +
          fibres
      );
    })
    .fail(function () {});
}

function set_regime_badge(target, index) {
  if (index == 1)
    $("#" + target)
      .removeClass("warning")
      .addClass("danger")
      .html("fort déficit");
  if (index == 2)
    $("#" + target)
      .removeClass("danger")
      .addClass("warning")
      .html("léger déficit");
  if (index == 3)
    $("#" + target)
      .removeClass("warning")
      .removeClass("danger")
      .html("correct");
  if (index == 4)
    $("#" + target)
      .removeClass("danger")
      .addClass("warning")
      .html("léger excédent");
  if (index == 5)
    $("#" + target)
      .removeClass("warning")
      .addClass("danger")
      .html("fort excédent");
  if (index != 3) $("#message-diet").removeClass("opacity-0");
}

function init_regime() {
  var regimes = [
    "cereales",
    "fruits",
    "oleagineux",
    "huile",
    "legumes",
    "legumineuses",
    "oeufs",
    "patates",
    "produits_laitiers",
    "sucre",
    "viande_blanche",
    "viande_rouge",
  ];
  /*
    var flexi0 = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    var flexi1 = [125, 100, 150, 100, 100, 750, 75, 75, 75, 75, 75, 75];
    var flexi2 = [140, 150, 300, 125, 150, 300, 50, 90, 50, 75, 50, 50];
    var vegetarienne = [125, 100, 1000, 100, 100, 1500, 100, 70, 100, 50, 0, 0];
    var vegetalienne = [125, 100, 2000, 125, 200, 3000, 0, 70, 0, 50, 0, 0];
    */
  var flexi0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var flexi1 = [25, 0, 50, 0, 0, 650, -25, -25, -25, -25, -25, -25];
  var flexi2 = [40, 50, 200, 25, 50, 200, -50, -10, -50, -25, -50, -50];
  var vegetarienne = [25, 0, 900, 0, 0, 1400, 0, -30, 0, -50, -100, -100];
  var vegetalienne = [
    25, 0, 1900, 25, 100, 2900, -100, -30, -100, -50, -100, -100,
  ];
  var assiette = localStorage.getItem("partviande");
  var my_array = eval(assiette);
  $.each(regimes, function (key, item) {
    localStorage.setItem("tx_" + item, my_array[key]);
    $("#tx_" + item).val(my_array[key]);
    var coeff_tx = "x" + parseFloat(1 + my_array[key] / 100).toFixed(2);
    $("#coeff_tx_" + item).html(coeff_tx.replace(".", ","));
  });
}

function calc_regime() {
  $("#message-diet").addClass("opacity-0");
  ws_params = [];
  var regimes = [
    "cereales",
    "fruits",
    "oleagineux",
    "huile",
    "legumes",
    "legumineuses",
    "oeufs",
    "patates",
    "produits_laitiers",
    "sucre",
    "viande_blanche",
    "viande_rouge",
  ];
  $.each(regimes, function (key, item) {
    ws_params.push((100 + parseInt(localStorage.getItem("tx_" + item))) / 100);
    var coeff_tx =
      "x" + parseFloat(1 + localStorage.getItem("tx_" + item) / 100).toFixed(2);
    $("#coeff_tx_" + item).html(coeff_tx.replace(".", ","));
  });
  var uri =
    "https://convertisseur.azurewebsites.net/API/Alimentation/Get_Equilibre_Nutritionel_by_CustomAlimentaion?Custom_Assiette=" +
    ws_params.join(",");
  //console.log(uri);

  $.getJSON(uri)
    .done(function (data) {
      var energie_totale = 0;
      var proteines = 0;
      var glucides = 0;
      var lipides = 0;
      var fibres = 0;

      $.each(data, function (key, item) {
        if (item.Name_NutrtionelType == "Energie_totale")
          energie_totale = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Proteines")
          proteines = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Glucides")
          glucides = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Lipides")
          lipides = item.Value_NutrtionelType;
        if (item.Name_NutrtionelType == "Fibres_alimentaires")
          fibres = item.Value_NutrtionelType;
      });

      var energie_min = 1308.33;
      var energie_large_bas = 1608.33;
      var energie_fine_bas = 1952.98;
      var energie_fine_haut = 2274.64;
      var energie_large_haut = 2642.26;
      var energie_max = 2942.26;

      var proteines_fine_bas = 50;
      var proteines_fine_haut = 71;
      var proteines_large_bas = 40.21;
      var proteines_large_haut = 99.08;
      var proteines_min = 30.21;
      var proteines_max = 109.08;

      var glucides_fine_bas = 244.12;
      var glucides_fine_haut = 312.76;
      var glucides_large_bas = 201.04;
      var glucides_large_haut = 363.31;
      var glucides_min = 171.04;
      var glucides_max = 393.31;

      var lipides_fine_bas = 65.1;
      var lipides_fine_haut = 101.1;
      var lipides_large_bas = 53.61;
      var lipides_large_haut = 117.43;
      var lipides_min = 43.61;
      var lipides_max = 127.43;

      var fibres_fine_bas = 25;
      var fibres_large_bas = 15;
      var fibres_min = 10;
      var fibres_max = 30;

      var indextotal = 32;
      var indexenergie = 2;
      var indexproteines = 2;
      var indexglucides = 2;
      var indexlipides = 2;
      var indexfibres = 2;

      if (energie_totale < energie_large_bas) {
        set_regime_badge("badge_energie", 1);
        indexenergie = 0;
      }
      if (
        energie_totale >= energie_large_bas &&
        energie_totale < energie_fine_bas
      ) {
        set_regime_badge("badge_energie", 2);
        indexenergie = 1;
      }
      if (
        energie_totale >= energie_fine_bas &&
        energie_totale <= energie_fine_haut
      ) {
        set_regime_badge("badge_energie", 3);
        indexenergie = 2;
      }
      if (
        energie_totale > energie_fine_haut &&
        energie_totale <= energie_large_haut
      ) {
        set_regime_badge("badge_energie", 4);
        indexenergie = 1;
      }
      if (energie_totale > energie_large_haut) {
        set_regime_badge("badge_energie", 5);
        indexenergie = 0;
      }

      if (proteines < proteines_large_bas) {
        set_regime_badge("badge_proteines", 1);
        indexproteines = 0;
      }
      if (proteines >= proteines_large_bas && proteines < proteines_fine_bas) {
        set_regime_badge("badge_proteines", 2);
        indexproteines = 1;
      }
      if (proteines >= proteines_fine_bas && proteines <= proteines_fine_haut) {
        set_regime_badge("badge_proteines", 3);
        indexproteines = 2;
      }
      if (
        proteines > proteines_fine_haut &&
        proteines <= proteines_large_haut
      ) {
        set_regime_badge("badge_proteines", 4);
        indexproteines = 1;
      }
      if (proteines > proteines_large_haut) {
        set_regime_badge("badge_proteines", 5);
        indexproteines = 0;
      }

      if (glucides < glucides_large_bas) {
        set_regime_badge("badge_glucides", 1);
        indexglucides = 0;
      }
      if (glucides >= glucides_large_bas && glucides < glucides_fine_bas) {
        set_regime_badge("badge_glucides", 2);
        indexglucides = 1;
      }
      if (glucides >= glucides_fine_bas && glucides <= glucides_fine_haut) {
        set_regime_badge("badge_glucides", 3);
        indexglucides = 2;
      }
      if (glucides > glucides_fine_haut && glucides <= glucides_large_haut) {
        set_regime_badge("badge_glucides", 4);
        indexglucides = 1;
      }
      if (glucides > glucides_large_haut) {
        set_regime_badge("badge_glucides", 5);
        indexglucides = 0;
      }

      if (lipides < lipides_large_bas) {
        set_regime_badge("badge_lipides", 1);
        indexlipides = 0;
      }
      if (lipides >= lipides_large_bas && lipides < lipides_fine_bas) {
        set_regime_badge("badge_lipides", 2);
        indexlipides = 1;
      }
      if (lipides >= lipides_fine_bas && lipides <= lipides_fine_haut) {
        set_regime_badge("badge_lipides", 3);
        indexlipides = 2;
      }
      if (lipides > lipides_fine_haut && lipides <= lipides_large_haut) {
        set_regime_badge("badge_lipides", 4);
        indexlipides = 1;
      }
      if (lipides > lipides_large_haut) {
        set_regime_badge("badge_lipides", 5);
        indexlipides = 0;
      }

      if (fibres < fibres_large_bas) {
        set_regime_badge("badge_fibres", 1);
        indexfibres = 0;
      }
      if (fibres >= fibres_large_bas && fibres < fibres_fine_bas) {
        set_regime_badge("badge_fibres", 2);
        indexfibres = 1;
      }
      if (fibres > fibres_fine_bas) {
        set_regime_badge("badge_fibres", 3);
        indexfibres = 2;
      }

      indextotal =
        indexenergie *
        indexproteines *
        indexglucides *
        indexlipides *
        indexfibres;

      if (
        indexenergie == 0 ||
        indexproteines == 0 ||
        indexglucides == 0 ||
        indexlipides == 0 ||
        indexfibres == 0
      ) {
        $("#btn_retour_regime").hide();
      } else {
        $("#btn_retour_regime").show();
      }

      if (indextotal == 0) {
        $("#message-diet")
          .removeClass("opacity-0")
          .removeClass("warning")
          .addClass("danger")
          .html(
            "Le régime que vous avez choisi<br><b>s’éloigne trop des recommandations nutritionnelles</b>"
          );
      }

      if (indextotal > 0 && indextotal < 32) {
        $("#message-diet")
          .removeClass("opacity-0")
          .addClass("warning")
          .removeClass("danger")
          .html(
            "Le régime que vous avez choisi<br><b>est éloigné des recommandations nutritionnelles</b>"
          );
      }

      if (indextotal == 32) {
        $("#message-diet").addClass("opacity-0");
      }

      var opts = {
        angle: 0,
        lineWidth: 0.14,
        radiusScale: 1.1,
        pointer: {
          length: 0.5,
          strokeWidth: 0.05,
          color: "#000000",
        },
        /*staticLabels: {
                    font: "7px sans-serif",
                    labels: [energie_min, energie_fine_bas, energie_fine_haut, energie_large_bas, energie_large_haut, energie_max],
                    fractionDigits: 0,
                },*/
        staticZones: [
          {
            strokeStyle: "#FF0000",
            min: energie_min,
            max: energie_large_bas,
          },
          {
            strokeStyle: "#FFE337",
            min: energie_large_bas,
            max: energie_fine_bas,
          },
          {
            strokeStyle: "#8BC903",
            min: energie_fine_bas,
            max: energie_fine_haut,
          },
          {
            strokeStyle: "#FFE337",
            min: energie_fine_haut,
            max: energie_large_haut,
          },
          {
            strokeStyle: "#FF0000",
            min: energie_large_haut,
            max: energie_max,
          },
        ],
        limitMax: true,
        limitMin: true,
        highDpiSupport: true,
      };
      var optsProteines = {
        angle: 0,
        lineWidth: 0.14,
        radiusScale: 1.1,
        pointer: {
          length: 0.5,
          strokeWidth: 0.05,
          color: "#000000",
        },
        /*staticLabels: {
                    font: "7px sans-serif",
                    labels: [proteines_min, proteines_fine_bas, proteines_fine_haut, proteines_large_bas, proteines_large_haut, proteines_max],
                    fractionDigits: 5,
                },*/
        staticZones: [
          {
            strokeStyle: "#FF0000",
            min: proteines_min,
            max: proteines_large_bas,
          },
          {
            strokeStyle: "#FFE337",
            min: proteines_large_bas,
            max: proteines_fine_bas,
          },
          {
            strokeStyle: "#8BC903",
            min: proteines_fine_bas,
            max: proteines_fine_haut,
          },
          {
            strokeStyle: "#FFE337",
            min: proteines_fine_haut,
            max: proteines_large_haut,
          },
          {
            strokeStyle: "#FF0000",
            min: proteines_large_haut,
            max: proteines_max,
          },
        ],
        limitMax: true,
        limitMin: true,
        highDpiSupport: true,
      };

      var optsGlucides = {
        angle: 0,
        lineWidth: 0.14,
        radiusScale: 1.1,
        pointer: {
          length: 0.5,
          strokeWidth: 0.05,
          color: "#000000",
        },
        /*staticLabels: {
                    font: "7px sans-serif",
                    labels: [glucides_min, glucides_fine_bas, glucides_fine_haut, glucides_large_bas, glucides_large_haut, glucides_max],
                    fractionDigits: 0,
                },*/
        staticZones: [
          {
            strokeStyle: "#FF0000",
            min: glucides_min,
            max: glucides_large_bas,
          },
          {
            strokeStyle: "#FFE337",
            min: glucides_large_bas,
            max: glucides_fine_bas,
          },
          {
            strokeStyle: "#8BC903",
            min: glucides_fine_bas,
            max: glucides_fine_haut,
          },
          {
            strokeStyle: "#FFE337",
            min: glucides_fine_haut,
            max: glucides_large_haut,
          },
          {
            strokeStyle: "#FF0000",
            min: glucides_large_haut,
            max: glucides_max,
          },
        ],
        limitMax: true,
        limitMin: true,
        highDpiSupport: true,
      };

      var optsLipides = {
        angle: 0,
        lineWidth: 0.14,
        radiusScale: 1.1,
        pointer: {
          length: 0.5,
          strokeWidth: 0.05,
          color: "#000000",
        },
        /*staticLabels: {
                    font: "7px sans-serif",
                    labels: [lipides_min, lipides_fine_bas, lipides_fine_haut, lipides_large_bas, lipides_large_haut, lipides_max],
                    fractionDigits: 0,
                },*/
        staticZones: [
          {
            strokeStyle: "#FF0000",
            min: lipides_min,
            max: lipides_large_bas,
          },
          {
            strokeStyle: "#FFE337",
            min: lipides_large_bas,
            max: lipides_fine_bas,
          },
          {
            strokeStyle: "#8BC903",
            min: lipides_fine_bas,
            max: lipides_fine_haut,
          },
          {
            strokeStyle: "#FFE337",
            min: lipides_fine_haut,
            max: lipides_large_haut,
          },
          {
            strokeStyle: "#FF0000",
            min: lipides_large_haut,
            max: lipides_max,
          },
        ],
        limitMax: true,
        limitMin: true,
        highDpiSupport: true,
      };

      var optsFibre = {
        angle: 0,
        lineWidth: 0.14,
        radiusScale: 1.1,
        pointer: {
          length: 0.5,
          strokeWidth: 0.05,
          color: "#000000",
        },
        /*staticLabels: {
                    font: "7px sans-serif",
                    labels: [fibres_min, fibres_fine_bas, fibres_large_bas, fibres_max],
                    fractionDigits: 0,
                },*/
        staticZones: [
          {
            strokeStyle: "#FF0000",
            min: fibres_min,
            max: fibres_large_bas,
          },
          {
            strokeStyle: "#FFE337",
            min: fibres_large_bas,
            max: fibres_fine_bas,
          },
          {
            strokeStyle: "#8BC903",
            min: fibres_fine_bas,
            max: fibres_max,
          },
        ],
        limitMax: true,
        limitMin: true,
        highDpiSupport: true,
      };

      var target = document.getElementById("energie"); // your canvas element
      if (target != "" && target != null && target != "null") {
        var gaugeEnergie = new Gauge(target).setOptions(opts); // create sexy gauge!
        gaugeEnergie.maxValue = energie_max; // set max gauge value
        gaugeEnergie.setMinValue(energie_min); // set min value

        gaugeEnergie.set(energie_totale); // set actual value
        //
        var target = document.getElementById("proteine"); // your canvas element
        var gaugeProteine = new Gauge(target).setOptions(optsProteines); // create sexy gauge!
        gaugeProteine.maxValue = proteines_max; // set max gauge val
        gaugeProteine.setMinValue(proteines_min); // set min value
        gaugeProteine.set(proteines); // set actual value
        //
        var target = document.getElementById("glucides"); // your canvas element
        var gaugeGlucides = new Gauge(target).setOptions(optsGlucides); // create sexy gauge!
        gaugeGlucides.maxValue = glucides_max; // set max gauge value
        gaugeGlucides.setMinValue(glucides_min); // set min value
        gaugeGlucides.set(glucides); // set actual value
        //
        var target = document.getElementById("lipides"); // your canvas element
        var gaugeLipides = new Gauge(target).setOptions(optsLipides); // create sexy gauge!
        gaugeLipides.maxValue = lipides_max; // set max gauge value
        gaugeLipides.setMinValue(lipides_min); // set min value
        gaugeLipides.set(lipides); // set actual value
        //
        var target = document.getElementById("fibres"); // your canvas element
        var gaugeFibres = new Gauge(target).setOptions(optsFibre); // create sexy gauge!
        gaugeFibres.maxValue = fibres_max; // set max gauge value
        gaugeFibres.setMinValue(fibres_min); // set min value
        gaugeFibres.set(fibres); // set actual value
      }
      //console.log('REGIME PERSO : '+energie_totale+'|'+proteines+'|'+glucides+'|'+lipides+'|'+fibres)
    })
    .fail(function () {});
}
function getPersonnesparsurface(
  RatioLegumes = 0,
  RatioFruits = 0,
  RatioGC = 0,
  RatioElevage = 0,
  ratios = false
) {
  //console.log('function getPersonnesparsurface() : Parcours 2 à partir d\'une surface à relocaliser');
  var uri =
    "https://convertisseur.azurewebsites.net/API/LandArea/GetCoversbyLandareaStringbyCategory";
  //alert(ratios);
  var ArrayGeoAreaCode = localStorage.getItem("localitester");
  var Landarea = localStorage.getItem("choixsurfaceha");
  if (
    ArrayGeoAreaCode != "" &&
    ArrayGeoAreaCode != "[]" &&
    ArrayGeoAreaCode != null &&
    ArrayGeoAreaCode != "null" &&
    Landarea != "" &&
    Landarea != null &&
    Landarea != "null"
  ) {
    var assiette = localStorage.getItem("partviande");
    var ID_Assiette = 0;
    if (assiette == "" || assiette == null || assiette == "flexi0")
      ID_Assiette = 0;
    if (assiette == "flexi1") ID_Assiette = 1;
    if (assiette == "flexi2") ID_Assiette = 2;
    if (assiette == "vegetarienne") ID_Assiette = 3;
    if (assiette == "vegetalienne") ID_Assiette = 4;
    var PartBio = localStorage.getItem("partbio");
    var PartBioLegumes = localStorage.getItem("partbiolegumes");
    var PartBioFruits = localStorage.getItem("partbiofruits");
    var PartBioGC = localStorage.getItem("partbiocereales");
    var PartBioElevage = localStorage.getItem("partbioelevage");
    //var minbiolegumes = localStorage.getItem("minbiolegumes");
    //var minbiofruits = localStorage.getItem("minbiofruits");
    //var minbiogcultures = localStorage.getItem("minbiogcultures");
    //var minbioelevage = localStorage.getItem("minbioelevage");
    localStorage.setItem("minbiolegumes", "0");
    localStorage.setItem("minbiofruits", "0");
    localStorage.setItem("minbiogcultures", "0");
    localStorage.setItem("minbioelevage", "0");
    //if (round(PartBioLegumes,2)<=round(minbiolegumes,2)) PartBioLegumes=minbiolegumes;
    //if (round(PartBioFruits,2)<=round(minbiofruits,2)) PartBioFruits=minbiofruits;
    //if (round(PartBioGC,2)<=round(minbiogcultures,2)) PartBioGC=minbiogcultures;
    //if (round(PartBioElevage,2)<=round(minbioelevage,2)) PartBioElevage=minbioelevage;

    if (round(PartBio, 0) == 100) {
      PartBioLegumes = 100;
      PartBioFruits = 100;
      PartBioGC = 100;
      PartBioElevage = 100;

      localStorage.setItem("partbio", "100");
      localStorage.setItem("partbiolegumes", "100");
      localStorage.setItem("partbiofruits", "100");
      localStorage.setItem("partbiocereales", "100");
      localStorage.setItem("partbioelevage", "100");
    } else {
      PartBio = 0;
      localStorage.setItem("partbio", "0");
      if (round(PartBioLegumes, 0) < 100) {
        PartBioLegumes = 0;
        localStorage.setItem("partbiolegumes", "0");
      }
      if (round(PartBioFruits, 0) < 100) {
        PartBioFruits = 0;
        localStorage.setItem("partbiofruits", "0");
      }
      if (round(PartBioGC, 0) < 100) {
        PartBioGC = 0;
        localStorage.setItem("partbiocereales", "0");
      }
      if (round(PartBioElevage, 0) < 100) {
        PartBioElevage = 0;
        localStorage.setItem("partbioelevage", "0");
      }
    }
    var couvertslegumes = 0;
    var couvertsfruits = 0;
    var couvertscereales = 0;
    var couvertselevage = 0;

    var partlocale = localStorage.getItem("partlocale");
    if (partlocale == "" || partlocale == null) partlocale = 100;
    var coeffpertes = 1;
    if (localStorage.getItem("coeffpertes") !== null) {
      coeffpertes = parseFloat(localStorage.getItem("coeffpertes"));
    }

    if (PartBioLegumes == "" || PartBioLegumes == null) PartBioLegumes = 0;
    if (PartBioFruits == "" || PartBioFruits == null) PartBioFruits = 0;
    if (PartBioGC == "" || PartBioGC == null) PartBioGC = 0;
    if (PartBioElevage == "" || PartBioElevage == null) PartBioElevage = 0;

    if (RatioLegumes == "" || RatioLegumes == null) RatioLegumes = 0;
    if (RatioFruits == "" || RatioFruits == null) RatioFruits = 0;
    if (RatioGC == "" || RatioGC == null) RatioGC = 0;
    if (RatioElevage == "" || RatioElevage == null) RatioElevage = 0;

    if (ratios === true) {
      var RatioLegumes = localStorage.getItem("partsurfacelegumes");
      var RatioFruits = localStorage.getItem("partsurfacefruits");
      var RatioGC = localStorage.getItem("partsurfacecereales");
      var RatioElevage = localStorage.getItem("partsurfaceelevage");
    }
    if (RatioLegumes === null || RatioLegumes == null || RatioLegumes == "null")
      RatioLegumes = 0;
    if (RatioFruits === null || RatioFruits == null || RatioFruits == "null")
      RatioFruits = 0;
    if (RatioGC === null || RatioGC == null || RatioGC == "null") RatioGC = 0;
    if (RatioElevage === null || RatioElevage == null || RatioElevage == "null")
      RatioElevage = 0;

    var url =
      uri +
      "?GeoLocale=" +
      ArrayGeoAreaCode +
      "&Landarea=" +
      Landarea +
      "&RatioLegumes=" +
      RatioLegumes +
      "&RatioFruits=" +
      RatioFruits +
      "&RatioGC=" +
      RatioGC +
      "&RatioElevage=" +
      RatioElevage +
      "&ID_Assiette=" +
      ID_Assiette +
      "&PartBioLegumes=" +
      PartBioLegumes +
      "&PartBioFruits=" +
      PartBioFruits +
      "&PartBioGC=" +
      PartBioGC +
      "&PartBioElevage=" +
      PartBioElevage;
    //console.log('getPersonnesparsurface() : ' + url);
    var totalcouverts = 0;
    $.getJSON(url)
      .done(function (data) {
        $.each(data, function (key, item) {
          if (item.ID_Category_CDTL == "1") {
            if (round(PartBioLegumes, 0) == 100) {
              couvertslegumes +=
                item.CoversbyCategoryBio * ((partlocale * coeffpertes) / 100);
            } else {
              couvertslegumes +=
                item.CoversbyCategory * ((partlocale * coeffpertes) / 100);
            }
            //couvertslegumes+= (item.CoversbyCategoryBio*(PartBioLegumes/100)+item.CoversbyCategory*((100-PartBioLegumes)/100))*(partlocale/100);
            //console.log(item.CoversbyCategoryBio + '*(' + PartBioLegumes + '/100)+' + item.CoversbyCategory + '*((100-' + PartBioLegumes + ')/100))*(' + partlocale*coeffpertes + '/100))');
            //console.log('#couvertslegumes :' + couvertslegumes);
            //if (ratios===false) localStorage.setItem("partsurfacelegumes", round(item.Percentage_Surface_Used, 2));
          }
          if (item.ID_Category_CDTL == "2") {
            if (round(PartBioFruits, 0) == 100) {
              couvertsfruits +=
                item.CoversbyCategoryBio * ((partlocale * coeffpertes) / 100);
            } else {
              couvertsfruits +=
                item.CoversbyCategory * ((partlocale * coeffpertes) / 100);
            }
            //couvertsfruits+= (item.CoversbyCategoryBio*(PartBioFruits/100)+item.CoversbyCategory*((100-PartBioFruits)/100))*(partlocale/100);
            //if (ratios===false) localStorage.setItem("partsurfacefruits", round(item.Percentage_Surface_Used, 2));
          }
          if (item.ID_Category_CDTL == "3") {
            if (round(PartBioGC, 0) == 100) {
              couvertscereales +=
                item.CoversbyCategoryBio * ((partlocale * coeffpertes) / 100);
            } else {
              couvertscereales +=
                item.CoversbyCategory * ((partlocale * coeffpertes) / 100);
            }
            //couvertscereales+= (item.CoversbyCategoryBio*(PartBioGC/100)+item.CoversbyCategory*((100-PartBioGC)/100))*(partlocale/100);
            //if (ratios===false) localStorage.setItem("partsurfacecereales", round(item.Percentage_Surface_Used, 2));
          }
          if (item.ID_Category_CDTL == "4") {
            if (round(PartBioElevage, 0) == 100) {
              couvertselevage +=
                item.CoversbyCategoryBio * ((partlocale * coeffpertes) / 100);
            } else {
              couvertselevage +=
                item.CoversbyCategory * ((partlocale * coeffpertes) / 100);
            }
            //couvertselevage+= (item.CoversbyCategoryBio*(PartBioElevage/100)+item.CoversbyCategory*((100-PartBioElevage)/100))*(partlocale/100);
            //if (ratios===false) localStorage.setItem("partsurfaceelevage", round(item.Percentage_Surface_Used, 2));
          }
        });

        //$('#couvertstotal').html(parseInt(couvertslegumes+couvertsfruits+couvertscereales+couvertselevage));
        $("#couvertslegumes").html(
          significatifemploi(couvertslegumes).toLocaleString()
        );
        $("#couvertsfruits").html(
          significatifemploi(couvertsfruits).toLocaleString()
        );
        $("#couvertscereales").html(
          significatifemploi(couvertscereales).toLocaleString()
        );
        $("#couvertselevage").html(
          significatifemploi(couvertselevage).toLocaleString()
        );
        var couvertstotal = Math.min(
          parseInt(couvertslegumes),
          parseInt(couvertsfruits),
          parseInt(couvertscereales),
          parseInt(couvertselevage)
        );
        $("#couvertstotal0").html(significatifemploi(couvertstotal));
        $("#couvertstotal").html(
          significatifemploi(couvertstotal).toLocaleString()
        );
        $("#couvertstotal2").html(
          significatifemploi(couvertstotal).toLocaleString()
        );
        //console.log('couvertslegumes:' + couvertslegumes)
        //console.log('couvertsfruits:' + couvertsfruits)
        //console.log('couvertscereales:' + couvertscereales)
        //console.log('couvertselevage:' + couvertselevage)
        localStorage.setItem("couvertslegumes", couvertslegumes);
        localStorage.setItem("couvertsfruits", couvertsfruits);
        localStorage.setItem("couvertscereales", couvertscereales);
        localStorage.setItem("couvertselevage", couvertselevage);
        //alert(parseInt(couvertstotal));
      })
      .fail(function (jqXHR, textStatus, err) {
        log("API Error: " + err);
      });
  }
  //alert(partlocale);
}

function geturlpartage() {
  var obj = {};
  for (var key in localStorage) {
    if (key != "getMultiLandAreaResultsByCategory2") {
      obj[key] = localStorage.getItem(key);
      //console.log('obj['+key+'] : '+localStorage.getItem(key))
    } else {
      // URI too long + pb encodage
      //obj[key] = unescape(encodeURIComponent(localStorage.getItem(key)));
    }
  }

  /* OLD manner : get each data
        //console.log('function geturlpartage()');
    */
  var choixsurface = localStorage.getItem("choixsurface");
  var choixsurfaceha = localStorage.getItem("choixsurfaceha");
  var couvertscereales = localStorage.getItem("couvertscereales");
  var couvertselevage = localStorage.getItem("couvertselevage");
  var couvertsfruits = localStorage.getItem("couvertsfruits");
  var couvertslegumes = localStorage.getItem("couvertslegumes");
  var emplois = localStorage.getItem("emplois");
  var fulllocalites = localStorage.getItem("fulllocalites");
  var fulllocalitester = localStorage.getItem("fulllocalitester");
  var localites = localStorage.getItem("localites");
  var localitester = localStorage.getItem("localitester");
  var localites_export = localStorage.getItem("localites_export");
  var maternelle = localStorage.getItem("maternelle");
  var nbadultes = localStorage.getItem("nbadultes");
  var nbenfants = localStorage.getItem("nbenfants");
  var nbmaternelle = localStorage.getItem("nbmaternelle");
  var nbrestaurant = localStorage.getItem("nbrestaurant");
  var nbseniors = localStorage.getItem("nbseniors");
  var nbuniversite = localStorage.getItem("nbuniversite");
  var nomvilleter = localStorage.getItem("nomvilleter");
  var partbio = localStorage.getItem("partbio");
  var partbiocereales = localStorage.getItem("partbiocereales");
  var partbioelevage = localStorage.getItem("partbioelevage");
  var partbiofruits = localStorage.getItem("partbiofruits");
  var partbiolegumes = localStorage.getItem("partbiolegumes");
  var partlocale = localStorage.getItem("partlocale");
  var partpertes = localStorage.getItem("partpertes");
  var coeffpertes = 1;
  if (localStorage.getItem("coeffpertes") !== null) {
    coeffpertes = parseFloat(localStorage.getItem("coeffpertes"));
  }
  var partsurfacecereales = localStorage.getItem("partsurfacecereales");
  var partsurfaceelevage = localStorage.getItem("partsurfaceelevage");
  var partsurfacefruits = localStorage.getItem("partsurfacefruits");
  var partsurfacelegumes = localStorage.getItem("partsurfacelegumes");
  var partviande = localStorage.getItem("partviande");
  var partviande2 = localStorage.getItem("partviande2");
  var population = localStorage.getItem("population");
  var restaurant = localStorage.getItem("restaurant");
  var selection = localStorage.getItem("selection");
  var surface = localStorage.getItem("surface");
  var totalelevage = localStorage.getItem("totalelevage");
  var totalelevagebio = localStorage.getItem("totalelevagebio");
  var totalfruits = localStorage.getItem("totalfruits");
  var totalfruitsbio = localStorage.getItem("totalfruitsbio");
  var totalgcultures = localStorage.getItem("totalgcultures");
  var totalgculturesbio = localStorage.getItem("totalgculturesbio");
  var totaljob = localStorage.getItem("totaljob");
  var totaljobelevage = localStorage.getItem("totaljobelevage");
  var totaljobelevagebio = localStorage.getItem("totaljobelevagebio");
  var totaljobfruits = localStorage.getItem("totaljobfruits");
  var totaljobfruitsbio = localStorage.getItem("totaljobfruitsbio");
  var totaljobgcultures = localStorage.getItem("totaljobgcultures");
  var totaljobgculturesbio = localStorage.getItem("totaljobgculturesbio");
  var totaljoblegumes = localStorage.getItem("totaljoblegumes");
  var totaljoblegumesbio = localStorage.getItem("totaljoblegumesbio");
  var totallegumes = localStorage.getItem("totallegumes");
  var totallegumesbio = localStorage.getItem("totallegumesbio");
  var typesurface = localStorage.getItem("typesurface");
  var universite = localStorage.getItem("universite");
  var primaire = localStorage.getItem("primaire");
  var college = localStorage.getItem("college");
  var lycee = localStorage.getItem("lycee");
  var ehpad = localStorage.getItem("ehpad");
  var hopital = localStorage.getItem("hopital");
  var autre = localStorage.getItem("autre");
  var nbautre = localStorage.getItem("nbautre");
  var etablissement = localStorage.getItem("etablissement");
  var nbetablissement = localStorage.getItem("nbetablissement");

  var minbiolegumes = localStorage.getItem("minbiolegumes");
  var minbiofruits = localStorage.getItem("minbiofruits");
  var minbiogcultures = localStorage.getItem("minbiogcultures");
  var minbioelevage = localStorage.getItem("minbioelevage");
  var repartitionviande = localStorage.getItem("viande");
  var repartitionlait = localStorage.getItem("lait");
  var repartitionlegumes = localStorage.getItem("totallegumes");
  var repartitionfruits = localStorage.getItem("totalfruits");
  var repartitioncereales = localStorage.getItem("totalgcultures");
  var totallait = localStorage.getItem("lait");
  var totallaitbio = localStorage.getItem("laitbio");
  var totalviande = localStorage.getItem("viande");
  var totalviandebio = localStorage.getItem("viandebio");
  var mesitems = localStorage.getItem("mesitems");
  var totallaitdef = localStorage.getItem("totallaitdef");
  var totalviandedef = localStorage.getItem("totalviandedef");
  var newtotallegumes = localStorage.getItem("surfaceTotale_1");
  var newtotalfruits = localStorage.getItem("surfaceTotale_2");
  var newtotalcereales = localStorage.getItem("surfaceTotale_3");
  var newtotalviande = localStorage.getItem("surfaceTotale_4");
  var newtotallait = localStorage.getItem("surfaceTotale_5");
  var newtotalfruitsbio = localStorage.getItem("surfaceTotale_1bio");
  var newtotallegumesbio = localStorage.getItem("surfaceTotale_2bio");
  var newtotalcerealesbio = localStorage.getItem("surfaceTotale_3bio");
  var newtotalviandebio = localStorage.getItem("surfaceTotale_4bio");
  var newtotallaitbio = localStorage.getItem("surfaceTotale_5bio");
  var totalemplois = localStorage.getItem("totalemplois");
  var totalemploisfruits = localStorage.getItem("totalemploisfruits");
  var totalemploislegumes = localStorage.getItem("totalemploislegumes");
  var totalemploiscereales = localStorage.getItem("totalemploiscereales");
  var totalemploiselevage = localStorage.getItem("totalemploiselevage");
  var artificialisation = localStorage.getItem("artificialisation");

  var params = {
    choixsurface: choixsurface,
    choixsurfaceha: choixsurfaceha,
    couvertscereales: couvertscereales,
    couvertselevage: couvertselevage,
    couvertsfruits: couvertsfruits,
    couvertslegumes: couvertslegumes,
    emplois: emplois,
    fulllocalites: fulllocalites,
    fulllocalitester: fulllocalitester,
    localites: localites,
    localitester: localitester,
    maternelle: maternelle,
    nbadultes: nbadultes,
    nbenfants: nbenfants,
    nbmaternelle: nbmaternelle,
    nbrestaurant: nbrestaurant,
    nbseniors: nbseniors,
    nbuniversite: nbuniversite,
    nomvilleter: nomvilleter,
    partbio: partbio,
    partbiocereales: partbiocereales,
    partbioelevage: partbioelevage,
    partbiofruits: partbiofruits,
    partbiolegumes: partbiolegumes,
    partlocale: partlocale,
    partpertes: partpertes,
    coeffpertes: coeffpertes,
    partsurfacecereales: partsurfacecereales,
    partsurfaceelevage: partsurfaceelevage,
    partsurfacefruits: partsurfacefruits,
    partsurfacelegumes: partsurfacelegumes,
    partviande: partviande,
    partviande2: partviande2,
    population: population,
    restaurant: restaurant,
    selection: selection,
    surface: surface,
    totalelevage: totalelevage,
    totalelevagebio: totalelevagebio,
    totalfruits: totalfruits,
    totalfruitsbio: totalfruitsbio,
    totalgcultures: totalgcultures,
    totalgculturesbio: totalgculturesbio,
    totaljob: totaljob,
    totaljobelevage: totaljobelevage,
    totaljobelevagebio: totaljobelevagebio,
    totaljobfruits: totaljobfruits,
    totaljobfruitsbio: totaljobfruitsbio,
    totaljobgcultures: totaljobgcultures,
    totaljobgculturesbio: totaljobgculturesbio,
    totaljoblegumes: totaljoblegumes,
    totaljoblegumesbio: totaljoblegumesbio,
    totallegumes: totallegumes,
    totallegumesbio: totallegumesbio,
    typesurface: typesurface,
    universite: universite,
    primaire: primaire,
    college: college,
    lycee: lycee,
    ehpad: ehpad,
    hopital: hopital,
    autre: autre,
    nbautre: nbautre,
    etablissement: etablissement,
    nbetablissement: nbetablissement,
    minbiolegumes: minbiolegumes,
    minbiofruits: minbiofruits,
    minbiogcultures: minbiogcultures,
    minbioelevage: minbioelevage,
    repartitionviande: repartitionviande,
    repartitionlait: repartitionlait,
    repartitionlegumes: totallegumes,
    repartitionfruits: totalfruits,
    repartitioncereales: totalgcultures,
    totallait: totallait,
    totallaitbio: totallaitbio,
    totalviande: totalviande,
    totalviandebio: totalviandebio,
    mesitems: mesitems,
    totallaitdef: totallaitdef,
    totalviandedef: totalviandedef,
    newtotallegumes: newtotallegumes,
    newtotalfruits: newtotalfruits,
    newtotalcereales: newtotalcereales,
    newtotalviande: newtotalviande,
    newtotallait: newtotallait,
    newtotalfruitsbio: newtotalfruitsbio,
    newtotallegumesbio: newtotallegumesbio,
    newtotalcerealesbio: newtotalcerealesbio,
    newtotalviandebio: newtotalviandebio,
    newtotallaitbio: newtotallaitbio,
    totalemplois: totalemplois,
    totalemploisfruits: totalemploisfruits,
    totalemploislegumes: totalemploislegumes,
    totalemploiscereales: totalemploiscereales,
    totalemploiselevage: totalemploiselevage,
    artificialisation: artificialisation,
  };
  var str = JSON.stringify(params);
  /**/
  // Abandon car erreur Request uri too long
  //var str = JSON.stringify(obj);
  //console.log('url : ' + str);
  var myurl = btoa(str);
  return myurl;
}

function round5(x) {
  return Math.ceil(x / 5) * 5;
}

function getImpact(
  RatioLegumes = 25,
  RatioFruits = 25,
  RatioGC = 25,
  RatioElevage = 25,
  Units = 0,
  contexte = ""
) {
  var ratiopertes = 1;
  var partpertes = localStorage.getItem("partpertes");
  if (contexte == "actuel") partpertes = 0;
  if (partpertes != "" && partpertes !== null)
    ratiopertes = 1 - 0.18 * (parseInt(partpertes) / 100);
  //console.log('function getImpact()');
  //var uri='https://convertisseur.azurewebsites.net/API/EcoImpact/GetEcoImpactbyGeoLocale';
  var uri =
    "https://convertisseur.azurewebsites.net/API/EcoImpact/GetEcoImpactbyGeoLocale_V2";

  var strlocalites = localStorage.getItem("localites");
  var surface = localStorage.getItem("surface");
  if (strlocalites == null || strlocalites == "null" || strlocalites == "") {
    var strlocalites = localStorage.getItem("localitester");
    var surface = localStorage.getItem("choixsurfaceha");
  }
  var assiette = localStorage.getItem("partviande");
  var ID_Assiette = 0;
  if (assiette == "" || assiette == null || assiette == "flexi0")
    ID_Assiette = 0;
  if (assiette == "flexi1") ID_Assiette = 1;
  if (assiette == "flexi2") ID_Assiette = 2;
  if (assiette == "vegetarienne") ID_Assiette = 3;
  if (assiette == "vegetalienne") ID_Assiette = 4;

  if (contexte == "actuel") ID_Assiette = 0;

  var PartBioFruits = localStorage.getItem("partbiofruits");
  var PartBioLegumes = localStorage.getItem("partbiolegumes");
  var PartBioGC = localStorage.getItem("partbiocereales");
  var PartBioElevage = localStorage.getItem("partbioelevage");

  var minbiofruits = localStorage.getItem("minbiofruits");
  var minbiolegumes = localStorage.getItem("minbiolegumes");
  var minbiogcultures = localStorage.getItem("minbiogcultures");
  var minbioelevage = localStorage.getItem("minbioelevage");

  if (contexte == "actuel") {
    var PartBioFruits = minbiofruits;
    var PartBioLegumes = minbiolegumes;
    var PartBioGC = minbiogcultures;
    var PartBioElevage = minbioelevage;
  }

  var ID_Assiette = "0";
  if (localStorage.getItem("partviande") == "flexi0") ID_Assiette = "0";
  if (localStorage.getItem("partviande") == "flexi1") ID_Assiette = "1";
  if (localStorage.getItem("partviande") == "flexi2") ID_Assiette = "2";
  if (localStorage.getItem("partviande") == "vegetarienne") ID_Assiette = "3";
  if (localStorage.getItem("partviande") == "vegetalienne") ID_Assiette = "4";
  if (contexte == "actuel") ID_Assiette = 0;

  if (PartBioLegumes == "" || PartBioLegumes == null) PartBioLegumes = 0;
  if (PartBioFruits == "" || PartBioFruits == null) PartBioFruits = 0;
  if (PartBioGC == "" || PartBioGC == null) PartBioGC = 0;
  if (PartBioElevage == "" || PartBioElevage == null) PartBioElevage = 0;

  if (minbiofruits == "" || minbiofruits == null) minbiofruits = 0;
  if (minbiolegumes == "" || minbiolegumes == null) minbiolegumes = 0;
  if (minbiogcultures == "" || minbiogcultures == null) minbiogcultures = 0;
  if (minbioelevage == "" || minbioelevage == null) minbioelevage = 0;

  var BioLegumes = round(
    (100 * (PartBioLegumes - minbiolegumes)) / (100 - minbiolegumes),
    0
  );
  var BioFruits = round(
    (100 * (PartBioFruits - minbiofruits)) / (100 - minbiofruits),
    0
  );
  var BioGC = round(
    (100 * (PartBioGC - minbiogcultures)) / (100 - minbiogcultures),
    0
  );
  var BioElevage = round(
    (100 * (PartBioElevage - minbioelevage)) / (100 - minbioelevage),
    0
  );

  if (BioLegumes < 0) BioLegumes = 0;
  if (BioFruits < 0) BioFruits = 0;
  if (BioGC < 0) BioGC = 0;
  if (BioElevage < 0) BioElevage = 0;
  if (strlocalites != "[]") {
    var url =
      uri +
      "?GeoLocale=" +
      strlocalites +
      "&Landarea=" +
      surface +
      "&RatioLegumes=" +
      RatioLegumes +
      "&RatioFruits=" +
      RatioFruits +
      "&RatioGC=" +
      RatioGC +
      "&RatioElevage=" +
      RatioElevage +
      "&ID_Assiette=" +
      ID_Assiette +
      "&PartBioLegumes=" +
      BioLegumes +
      "&PartBioFruits=" +
      BioFruits +
      "&PartBioGC=" +
      BioGC +
      "&PartBioElevage=" +
      BioElevage +
      "&RatioGaspi=" +
      ratiopertes;
    //console.log(url);
    $.getJSON(url)
      .done(function (data) {
        $.each(data, function (key, item) {
          //console.log(item.EcoImpact_Indicator_Value_Hectare);
          //console.log(item.ID_EcoImpact_Indicator);
          //console.log(item.Name_EcoImpact_Indicator);

          if (item.ID_EcoImpact_Indicator == "5") {
            //var consommation_eau = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
            var consommation_eau = round5(
              item.EcoImpact_Indicator_Value_Hectare
            ).toFixed(0);
            if (consommation_eau == 0) {
              consommation_eau = "-";
            }
            if (contexte == "") {
              $("#consommation_eau").html(consommation_eau);
              $("#consommation_eau2").html(consommation_eau);
              $("#consommation_eau22").html(consommation_eau);
            }
            localStorage.setItem(
              contexte + "impact_conso_eau_personne",
              consommation_eau
            );
          }
          if (item.ID_EcoImpact_Indicator == "7") {
            //var degradation_sols = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
            var degradation_sols = round5(
              item.EcoImpact_Indicator_Value_Hectare
            ).toFixed(0);
            if (degradation_sols == 0) {
              degradation_sols = "-";
            }
            if (contexte == "") {
              $("#degradation_sols").html(degradation_sols);
              $("#degradation_sols2").html(degradation_sols);
              $("#degradation_sols22").html(degradation_sols);
            }
            localStorage.setItem(
              contexte + "impact_pauvrete_sol_ha",
              degradation_sols
            );
          }
          if (item.ID_EcoImpact_Indicator == "2") {
            //var declin_especes = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
            var declin_especes = round5(
              item.EcoImpact_Indicator_Value_Hectare
            ).toFixed(0);
            if (declin_especes == 0) {
              declin_especes = "-";
            }
            if (contexte == "") {
              $("#declin_especes").html(declin_especes);
              $("#declin_especes2").html(declin_especes);
              $("#declin_especes22").html(declin_especes);
            }
            localStorage.setItem(
              contexte + "impact_especes_ha",
              declin_especes
            );
          }

          if (item.ID_EcoImpact_Indicator == "8") {
            //var polluants_aeriens = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
            var polluants_aeriens = round5(
              item.EcoImpact_Indicator_Value_Hectare
            ).toFixed(0);
            if (polluants_aeriens == 0) {
              polluants_aeriens = "-";
            }
            if (contexte == "") {
              $("#polluants_aeriens").html(polluants_aeriens);
              $("#polluants_aeriens2").html(polluants_aeriens);
            }
          }

          if (item.ID_EcoImpact_Indicator == "4") {
            //var qualite_eau = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
            var qualite_eau = round5(
              item.EcoImpact_Indicator_Value_Hectare
            ).toFixed(0);
            if (qualite_eau == 0) {
              qualite_eau = "-";
            }
            if (contexte == "") {
              $("#qualite_eau").html(qualite_eau);
              $("#qualite_eau2").html(qualite_eau);
              $("#qualite_eau22").html(qualite_eau);
            }
            localStorage.setItem(
              contexte + "impact_qualite_eau_ha",
              qualite_eau
            );
          }

          //if (item.ID_EcoImpact_Indicator     == '6') $('#empreinte_sol').html(item.EcoImpact_Indicator_Value.toFixed(0));
          if (item.ID_EcoImpact_Indicator == "1") {
            //var gaz_effet_serre = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
            var gaz_effet_serre = round5(
              item.EcoImpact_Indicator_Value_Hectare
            ).toFixed(0);
            if (gaz_effet_serre == 0) {
              gaz_effet_serre = "-";
            }
            if (contexte == "") {
              $("#gaz_effet_serre").html(gaz_effet_serre);
              $("#gaz_effet_serre2").html(gaz_effet_serre);
            }
          }
          if (item.ID_EcoImpact_Indicator == "1") {
            if (item.EcoImpact_Indicator_Value_Hectare.toFixed(0) != 0) {
              //var ecoimpact = item.EcoImpact_Indicator_Value_Hectare.toFixed(0);
              var ecoimpact = round5(
                item.EcoImpact_Indicator_Value_Hectare
              ).toFixed(0);
            } else {
              var ecoimpact = "-";
            }
            if (contexte == "") {
              $("#gaz_effet_serre3").html(ecoimpact);
              $("#gaz_effet_serre32").html(ecoimpact);
              $("#gaz_effet_serre3 .odometer-value").html("-");
            }
            localStorage.setItem(contexte + "impact_ges_ha", ecoimpact);

            //console.log('ecoimpact' + ecoimpact);
          }
          //alert('-'+item.EcoImpact_Indicator_Value.toFixed(2))
          //if (item.ID_EcoImpact_Indicator     == '5') $('#consommation_eau2').html(item.EcoImpact_Indicator_Value.toFixed(0));
          //if (item.ID_EcoImpact_Indicator=='7') $('#degradation_sols2').html(item.EcoImpact_Indicator_Value.toFixed(0));
          //if (item.ID_EcoImpact_Indicator     == '2') $('#declin_especes2').html(item.EcoImpact_Indicator_Value.toFixed(0));
          //if (item.ID_EcoImpact_Indicator     == '8') $('#polluants_aeriens2').html(item.EcoImpact_Indicator_Value.toFixed(0));
          //if (item.ID_EcoImpact_Indicator     == '4') $('#qualite_eau2').html(item.EcoImpact_Indicator_Value.toFixed(0));
          //if (item.ID_EcoImpact_Indicator     == '6') $('#empreinte_sol2').html(item.EcoImpact_Indicator_Value.toFixed(0));

          if (item.ID_EcoImpact_Indicator == "1" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheclimat1").removeClass("icon-baisse");
              $("#flecheclimat1").addClass("icon-hausse");
              $("#nbrclimat1").addClass("hausse");
              $("#nbrclimat1").removeClass("baisse");
              $("#flechemodalair1").removeClass("icon-baisse legumes");
              $("#flechemodalair1").addClass("icon-hausse hausse");
              $("#flechemodalair12").removeClass("icon-baisse legumes");
              $("#flechemodalair12").addClass("icon-hausse hausse");
              $("#impactmodalair1").removeClass("legumes");
              $("#impactmodalair1").addClass("hausse");
              $("#impactmodalair12").removeClass("legumes");
              $("#impactmodalair12").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheclimat1").removeClass("icon-hausse");
              $("#flecheclimat1").addClass("icon-baisse toto");
              $("#nbrclimat1").removeClass("hausse");
              $("#nbrclimat1").addClass("baisse toto");
              $("#flechemodalair1").removeClass("icon-hausse hausse");
              $("#flechemodalair1").addClass("icon-baisse legumes");
              $("#flechemodalair12").removeClass("icon-hausse hausse");
              $("#flechemodalair12").addClass("icon-baisse legumes");
              $("#impactmodalair1").removeClass("hausse");
              $("#impactmodalair1").addClass("legumes");
              $("#impactmodalair12").removeClass("hausse");
              $("#impactmodalair12").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "8" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheclimat2").removeClass("icon-baisse");
              $("#flecheclimat2").addClass("icon-hausse");
              $("#nbrclimat2").removeClass("baisse");
              $("#nbrclimat2").addClass("hausse");
              $("#flechemodalair3").removeClass("icon-baisse legumes");
              $("#flechemodalair3").addClass("icon-hausse hausse");
              $("#impactmodalair3").removeClass("legumes");
              $("#impactmodalair3").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheclimat2").removeClass("icon-hausse");
              $("#flecheclimat2").addClass("icon-baisse toto");
              $("#nbrclimat2").removeClass("hausse");
              $("#nbrclimat2").addClass("baisse toto");
              $("#flechemodalair3").removeClass("icon-hausse hausse");
              $("#flechemodalair3").addClass("icon-baisse legumes");
              $("#impactmodalair3").removeClass("hausse");
              $("#impactmodalair3").addClass("legumes");
            }
          }
          if (item.ID_EcoImpact_Indicator == "2" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flechebiodiversite1").removeClass("icon-baisse");
              $("#flechebiodiversite1").addClass("icon-hausse");
              $("#nbrebiodiversite1").removeClass("baisse");
              $("#nbrbiodiversite1").addClass("hausse");
              $("#flechemodaldeclin").removeClass("icon-baisse legumes");
              $("#flechemodaldeclin").addClass("icon-hausse hausse");

              $("#flechemodaldeclin2").removeClass("icon-baisse legumes");
              $("#flechemodaldeclin2").addClass("icon-hausse hausse");
              $("#impactmodaldeclin").removeClass("legumes");
              $("#impactmodaldeclin").addClass("hausse");
              $("#impactmodaldeclin2").removeClass("legumes");
              $("#impactmodaldeclin2").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flechebiodiversite1").removeClass("icon-hausse");
              $("#flechebiodiversite1").addClass("icon-baisse toto");
              $("#nbrbiodiversite1").removeClass("hausse");
              $("#nbrbiodiversite1").addClass("baisse toto");
              $("#flechemodaldeclin").removeClass("icon-hausse hausse");
              $("#flechemodaldeclin").addClass("icon-baisse legumes");
              $("#flechemodaldeclin2").removeClass("icon-hausse hausse");
              $("#flechemodaldeclin2").addClass("icon-baisse legumes");
              $("#impactmodaldeclin").removeClass("hausse");
              $("#impactmodaldeclin").addClass("legumes");
              $("#impactmodaldeclin2").removeClass("hausse");
              $("#impactmodaldeclin2").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "7" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flechesol2").removeClass("icon-baisse");
              $("#flechesol2").addClass("icon-hausse");
              $("#nbrsol2").removeClass("baisse");
              $("#nbrsol2").addClass("hausse");
              $("#flechemodalsol2").removeClass("icon-baisse legumes");
              $("#flechemodalsol2").addClass("icon-hausse hausse");
              $("#impactmodalsol2").removeClass("legumes");
              $("#impactmodalsol2").addClass("hausse");
              $("#flechemodalsol22").removeClass("icon-baisse legumes");
              $("#flechemodalsol22").addClass("icon-hausse hausse");
              $("#impactmodalsol22").removeClass("legumes");
              $("#impactmodalsol22").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flechesol2").removeClass("icon-hausse");
              $("#flechesol2").addClass("icon-baisse toto");
              $("#nbrsol2").removeClass("hausse");
              $("#nbrsol2").addClass("baisse toto");
              $("#flechemodalsol2").removeClass("icon-hausse hausse");
              $("#flechemodalsol2").addClass("icon-baisse legumes");
              $("#impactmodalsol2").removeClass("hausse");
              $("#impactmodalsol2").addClass("legumes");
              $("#flechemodalsol22").removeClass("icon-hausse hausse");
              $("#flechemodalsol22").addClass("icon-baisse legumes");
              $("#impactmodalsol22").removeClass("hausse");
              $("#impactmodalsol22").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "5" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheeau1").removeClass("icon-baisse");
              $("#flecheeau1").addClass("icon-hausse");
              $("#nbreau1").removeClass("baisse");
              $("#nbreau1").addClass("hausse");
              $("#flechemodaleau1").removeClass("icon-baisse legumes");
              $("#flechemodaleau1").addClass("icon-hausse hausse");
              $("#impactmodaleau1").removeClass("legumes");
              $("#impactmodaleau1").addClass("hausse");
              $("#flechemodaleau12").removeClass("icon-baisse legumes");
              $("#flechemodaleau12").addClass("icon-hausse hausse");
              $("#impactmodaleau12").removeClass("legumes");
              $("#impactmodaleau12").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheeau1").removeClass("icon-hausse");
              $("#flecheeau1").addClass("icon-baisse toto");
              $("#nbreau1").removeClass("hausse");
              $("#nbreau1").addClass("baisse toto");
              $("#flechemodaleau1").removeClass("icon-hausse hausse");
              $("#flechemodaleau1").addClass("icon-baisse legumes");
              $("#impactmodaleau1").removeClass("hausse");
              $("#impactmodaleau1").addClass("legumes");

              $("#flechemodaleau12").removeClass("icon-hausse hausse");
              $("#flechemodaleau12").addClass("icon-baisse legumes");
              $("#impactmodaleau12").removeClass("hausse");
              $("#impactmodaleau12").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "4" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheeau2").removeClass("icon-baisse");
              $("#flecheeau2").addClass("icon-hausse");
              $("#nbreau2").removeClass("baisse");
              $("#nbreau2").addClass("hausse");
              $("#flechemodaleau3").removeClass("icon-baisse legumes");
              $("#flechemodaleau3").addClass("icon-hausse hausse");
              $("#impactmodaleau3").removeClass("legumes");
              $("#impactmodaleau3").addClass("hausse");
              $("#flechemodaleau32").removeClass("icon-baisse legumes");
              $("#flechemodaleau32").addClass("icon-hausse hausse");
              $("#impactmodaleau32").removeClass("legumes");
              $("#impactmodaleau32").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Hectare.toFixed(0)));
              $("#flecheeau2").removeClass("icon-hausse");
              $("#flecheeau2").addClass("icon-baisse toto");
              $("#nbreau2").removeClass("hausse");
              $("#nbreau2").addClass("baisse toto");
              $("#flechemodaleau3").removeClass("icon-hausse hausse");
              $("#flechemodaleau3").addClass("icon-baisse legumes");
              $("#impactmodaleau3").removeClass("hausse");
              $("#impactmodaleau3").addClass("legumes");
              $("#flechemodaleau32").removeClass("icon-hausse hausse");
              $("#flechemodaleau32").addClass("icon-baisse legumes");
              $("#impactmodaleau32").removeClass("hausse");
              $("#impactmodaleau32").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "5") {
            //var consommation_eau2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var consommation_eau2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (consommation_eau2 == 0) {
              consommation_eau2 = "-";
            }
            if (contexte == "") {
              $("#consommation_eau3").html(consommation_eau2);
              $("#consommation_eau32").html(consommation_eau2);
            }
            localStorage.setItem(
              contexte + "impact_conso_eau_ha",
              consommation_eau2
            );
          }
          if (item.ID_EcoImpact_Indicator == "7") {
            //var degradation_sols2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var degradation_sols2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (degradation_sols2 == 0) {
              degradation_sols2 = "-";
            }
            if (contexte == "") {
              $("#degradation_sols3").html(degradation_sols2);
            }
          }

          if (item.ID_EcoImpact_Indicator == "3") {
            //var deforestation2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var deforestation2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (deforestation2 == 0) {
              deforestation2 = "-";
            }
            if (contexte == "") {
              $("#deforestation").html(deforestation2);
              $("#deforestation2").html(deforestation2);
              $("#deforestation22").html(deforestation2);
              $("#deforestation3").html(deforestation2);
            }
            localStorage.setItem(
              contexte + "impact_deforestation_personne",
              deforestation2
            );
          }

          if (item.ID_EcoImpact_Indicator == "2") {
            //var declin_especes2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var declin_especes2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (declin_especes2 == 0) {
              declin_especes2 = "-";
            }
            //$('#declin_especes2').html(declin_especes2);
            if (contexte == "") {
              $("#declin_especes3").html(declin_especes2);
            }
          }

          if (item.ID_EcoImpact_Indicator == "8") {
            //var polluants_aeriens2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var polluants_aeriens2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (polluants_aeriens2 == 0) {
              polluants_aeriens2 = "-";
            }
            if (contexte == "") {
              $("#polluants_aeriens3").html(polluants_aeriens2);
            }
          }

          if (item.ID_EcoImpact_Indicator == "4") {
            //var qualite_eau2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var qualite_eau2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (qualite_eau2 == 0) {
              qualite_eau2 = "-";
            }
            if (contexte == "") {
              $("#qualite_eau3").html(qualite_eau2);
              $("#qualite_eau4").html(qualite_eau2);
              $("#qualite_eau42").html(qualite_eau2);
            }
            localStorage.setItem(
              contexte + "impact_qualite_eau_personne",
              qualite_eau2
            );
          }

          if (item.ID_EcoImpact_Indicator == "6") {
            //var empreinte_sol2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var empreinte_sol2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (empreinte_sol2 == 0) {
              empreinte_sol2 = "-";
            }
            if (contexte == "") {
              $("#empreinte_sol").html(empreinte_sol2);
              $("#empreinte_sol2").html(empreinte_sol2);
              $("#empreinte_sol22").html(empreinte_sol2);
              $("#empreinte_sol3").html(empreinte_sol2);
            }
            localStorage.setItem(
              contexte + "impact_empreinte_sol_personne",
              empreinte_sol2
            );
          }

          if (item.ID_EcoImpact_Indicator == "1") {
            //var gaz_effet_serre2 = item.EcoImpact_Indicator_Value_Person.toFixed(0);
            var gaz_effet_serre2 = round5(
              item.EcoImpact_Indicator_Value_Person
            ).toFixed(0);
            if (gaz_effet_serre2 == 0) {
              gaz_effet_serre2 = "-";
            }
            if (contexte == "") {
              $("#gaz_effet_serre4").html(gaz_effet_serre2);
              $("#gaz_effet_serre42").html(gaz_effet_serre2);
            }
            localStorage.setItem(
              contexte + "impact_ges_personne",
              gaz_effet_serre2
            );
          }

          //alert('-'+item.EcoImpact_Indicator_Value.toFixed(2))

          if (item.ID_EcoImpact_Indicator == "6" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechesol1").removeClass("icon-baisse");
              $("#flechesol1").addClass("icon-hausse");
              $("#nbrsol1").removeClass("baisse");
              $("#nbrsol1").addClass("hausse");
              $("#flechemodalsol1").removeClass("icon-baisse legumes");
              $("#flechemodalsol1").addClass("icon-hausse hausse");
              $("#impactmodalsol1").removeClass("legumes");
              $("#impactmodalsol1").addClass("hausse");
              $("#flechemodalsol12").removeClass("icon-baisse legumes");
              $("#flechemodalsol12").addClass("icon-hausse hausse");
              $("#impactmodalsol12").removeClass("legumes");
              $("#impactmodalsol12").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechesol1").removeClass("icon-hausse");
              $("#flechesol1").addClass("icon-baisse toto");
              $("#nbrsol1").removeClass("hausse");
              $("#nbrsol1").addClass("baisse toto");
              $("#flechemodalsol1").removeClass("icon-hausse hausse");
              $("#flechemodalsol1").addClass("icon-baisse legumes");
              $("#impactmodalsol1").removeClass("hausse");
              $("#impactmodalsol1").addClass("legumes");

              $("#flechemodalsol12").removeClass("icon-hausse hausse");
              $("#flechemodalsol12").addClass("icon-baisse legumes");
              $("#impactmodalsol12").removeClass("hausse");
              $("#impactmodalsol12").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "1" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodalair2").removeClass("icon-baisse legumes");
              $("#flechemodalair2").addClass("icon-hausse hausse");
              $("#flechemodalair22").removeClass("icon-baisse legumes");
              $("#flechemodalair22").addClass("icon-hausse hausse");
              $("#impactmodalair2").removeClass("legumes");
              $("#impactmodalair2").addClass("hausse");
              $("#impactmodalair22").removeClass("legumes");
              $("#impactmodalair22").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodalair2").removeClass("icon-hausse hausse");
              $("#flechemodalair2").addClass("icon-baisse legumes");
              $("#flechemodalair22").removeClass("icon-hausse hausse");
              $("#flechemodalair22").addClass("icon-baisse legumes");
              $("#impactmodalair2").removeClass("hausse");
              $("#impactmodalair2").addClass("legumes");

              $("#impactmodalair22").removeClass("hausse");
              $("#impactmodalair22").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "8" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodalair4").removeClass("icon-baisse legumes");
              $("#flechemodalair4").addClass("icon-hausse hausse toto");
              $("#impactmodalair4").removeClass("legumes");
              $("#impactmodalair4").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodalair4").removeClass("icon-hausse hausse");
              $("#flechemodalair4").addClass("icon-baisse legumes");
              $("#impactmodalair4").removeClass("hausse");
              $("#impactmodalair4").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "5" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodaleau2").removeClass("icon-baisse legumes");
              $("#flechemodaleau2").addClass("icon-hausse hausse toto");
              $("#impactmodaleau2").removeClass("legumes");
              $("#impactmodaleau2").addClass("hausse");
              $("#flechemodaleau22").removeClass("icon-baisse legumes");
              $("#flechemodaleau22").addClass("icon-hausse hausse toto");
              $("#impactmodaleau22").removeClass("legumes");
              $("#impactmodaleau22").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodaleau2").removeClass("icon-hausse hausse");
              $("#flechemodaleau2").addClass("icon-baisse legumes");
              $("#impactmodaleau2").removeClass("hausse");
              $("#impactmodaleau2").addClass("legumes");
              $("#flechemodaleau22").removeClass("icon-hausse hausse");
              $("#flechemodaleau22").addClass("icon-baisse legumes");
              $("#impactmodaleau22").removeClass("hausse");
              $("#impactmodaleau22").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "4" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodaleau4").removeClass("icon-baisse legumes");
              $("#flechemodaleau4").addClass("icon-hausse hausse toto");
              $("#impactmodaleau4").removeClass("legumes");
              $("#impactmodaleau4").addClass("hausse");
              $("#flechemodaleau42").removeClass("icon-baisse legumes");
              $("#flechemodaleau42").addClass("icon-hausse hausse toto");
              $("#impactmodaleau42").removeClass("legumes");
              $("#impactmodaleau42").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechemodaleau4").removeClass("icon-hausse hausse");
              $("#flechemodaleau4").addClass("icon-baisse legumes");
              $("#impactmodaleau4").removeClass("hausse");
              $("#impactmodaleau4").addClass("legumes");
              $("#flechemodaleau42").removeClass("icon-hausse hausse");
              $("#flechemodaleau42").addClass("icon-baisse legumes");
              $("#impactmodaleau42").removeClass("hausse");
              $("#impactmodaleau42").addClass("legumes");
            }
          }

          if (item.ID_EcoImpact_Indicator == "3" && contexte == "") {
            if (round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) > 0) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechebiodiversite2").removeClass("icon-baisse");
              $("#flechebiodiversite2").addClass("icon-hausse");
              $("#nbrbiodiversite2").removeClass("baisse");
              $("#nbrbiodiversite2").addClass("hausse");
              $("#flechemodalbiodiv").removeClass("icon-baisse legumes");
              $("#flechemodalbiodiv").addClass("icon-hausse hausse");
              $("#impactmodalbiodiv").removeClass("legumes");
              $("#impactmodalbiodiv").addClass("hausse");

              $("#flechemodalbiodiv2").removeClass("icon-baisse legumes");
              $("#flechemodalbiodiv2").addClass("icon-hausse hausse");
              $("#impactmodalbiodiv2").removeClass("legumes");
              $("#impactmodalbiodiv2").addClass("hausse");
            } else if (
              round5(item.EcoImpact_Indicator_Value_Person.toFixed(0)) < 0
            ) {
              //console.log(parseInt(item.EcoImpact_Indicator_Value_Person.toFixed(0)));
              $("#flechebiodiversite2").removeClass("icon-hausse");
              $("#flechebiodiversite2").addClass("icon-baisse toto");
              $("#nbrbiodiversite2").removeClass("hausse");
              $("#nbrbiodiversite2").addClass("baisse toto");
              $("#flechemodalbiodiv").removeClass("icon-hausse hausse");
              $("#flechemodalbiodiv").addClass("icon-baisse legumes");
              $("#impactmodalbiodiv").removeClass("hausse");
              $("#impactmodalbiodiv").addClass("legumes");

              $("#flechemodalbiodiv2").removeClass("icon-hausse hausse");
              $("#flechemodalbiodiv2").addClass("icon-baisse legumes");
              $("#impactmodalbiodiv2").removeClass("hausse");
              $("#impactmodalbiodiv2").addClass("legumes");
            }
          }
        });
      })
      .fail(function (jqXHR, textStatus, err) {
        log("API Error: " + err);
      });
  }
}

function getImpact2(
  ArrayGeoAreaCode,
  Landarea = 0,
  RatioLegumes = 25,
  RatioFruits = 25,
  RatioGC = 25,
  RatioElevage = 25,
  ID_Assiette = 0,
  PartBioLegumes = 0,
  PartBioFruits = 0,
  PartBioGC = 0,
  PartBioElevage = 0,
  Units = 0
) {
  //console.log('function getImpact2()');
}

function testChromeStorage() {
  //console.log('function testChromeStorage()');
  //console.log("Saving");
  chrome.storage.local.set({ value: "toto" }, function () {
    message("Settings saved");
  });
  chrome.storage.local.get("value", function (retVal) {
    //console.log("Got it? " + retVal.value);
  });
}

function minbio() {
  //console.log('function minbio() : gestion des minima bio et établissement du % bio minimum / pas de ws');
  var assiette = localStorage.getItem("partviande");
  var partbiolegumes = localStorage.getItem("partbiolegumes");
  var partbioelevage = localStorage.getItem("partbioelevage");
  var partbiocereales = localStorage.getItem("partbiocereales");
  var partbiofruits = localStorage.getItem("partbiofruits");

  if (assiette == "flexi0") {
    var partbio = parseFloat(
      parseFloat(0.0777 * partbiolegumes) +
        parseFloat(0.4297 * partbioelevage) +
        parseFloat(0.4555 * partbiocereales) +
        parseFloat(0.0371 * partbiofruits)
    );
    localStorage.setItem("partbio", round(partbio, 0));
    //console.log('partbio flexi0 : ' + partbio);
  }
  if (assiette == "flexi1") {
    var partbio = parseFloat(
      parseFloat(0.0925 * partbiolegumes) +
        parseFloat(0.3835 * partbioelevage) +
        parseFloat(0.4794 * partbiocereales) +
        parseFloat(0.0447 * partbiofruits)
    );
    localStorage.setItem("partbio", round(partbio, 0));
    //console.log('partbio flexi1 : ' + partbio);
  }
  if (assiette == "flexi2") {
    var partbio = parseFloat(
      parseFloat(0.1472 * partbiolegumes) +
        parseFloat(0.2634 * partbioelevage) +
        parseFloat(0.5194 * partbiocereales) +
        parseFloat(0.07 * partbiofruits)
    );
    localStorage.setItem("partbio", round(partbio, 0));
    //console.log('partbio flexi2 : ' + partbio);
  }

  if (assiette == "vegetarienne") {
    var partbio = parseFloat(
      parseFloat(0.0945 * partbiolegumes) +
        parseFloat(0.4372 * partbioelevage) +
        parseFloat(0.4127 * partbiocereales) +
        parseFloat(0.0557 * partbiofruits)
    );
    localStorage.setItem("partbio", round(partbio, 0));
    //console.log('partbio flexi2 : ' + partbio);
  }
  if (assiette == "vegetalienne") {
    var partbio = parseFloat(
      parseFloat(0.2837 * partbiolegumes) +
        parseFloat(0.0 * partbioelevage) +
        parseFloat(0.6221 * partbiocereales) +
        parseFloat(0.0942 * partbiofruits)
    );
    localStorage.setItem("partbio", round(partbio, 0));
    //console.log('partbio flexi2 : ' + partbio);
  }
  ////console.log('PARTBIO: parseFloat((parseFloat(0.1012*'+partbiolegumes+')+parseFloat(0.5604*'+partbioelevage+')+parseFloat(0.2901*'+partbiocereales+')+parseFloat(0.0483*'+partbiofruits+'))');
  localStorage.setItem("partbio", round(partbio, 0));
  $("#bioval").html(round(partbio, 0));
  $("#bioval2").html(round(partbio, 0));
  $("#bioval3").html(round(partbio, 0));
  if (round(partbio, 0) == 100) {
    $("#bioval4").html("100");
  } else {
    $("#bioval4").html("0");
  }
}

function update_partbio() {
  //console.log('function update_partbio() : simple actualisation des affichages en fonction du choix de l\'assiette / pas de ws');
  var assiette = localStorage.getItem("partviande");
  var assiette2 = localStorage.getItem("partviande2");
  if (assiette == "flexi0") {
    $("#assiette").html("Actuel");
    $("#assiette3").html("Actuel");
    $("#assiette2").html(
      '<span class="badge badge-pill badge-blanc">Viande:60%</span>'
    );
  }
  if (assiette == "flexi1") {
    $("#assiette").html("-25% pdts animaux");
    $("#assiette3").html("-25% pdts animaux");
    $("#assiette2").html(
      '<span class="badge badge-pill badge-blanc">-25% pdts animaux</span>'
    );
  }
  if (assiette == "flexi2") {
    $("#assiette").html("-50% pdts animaux");
    $("#assiette3").html("-50% pdts animaux");
    $("#assiette2").html(
      '<span class="badge badge-pill badge-blanc">-50% pdts animaux</span>'
    );
  }
  if (assiette == "vegetarienne") {
    $("#assiette").html("Végétarien");
    $("#assiette3").html("Végétarien");
    $("#assiette2").html(
      '<span class="badge badge-pill badge-blanc">Végétarien</span>'
    );
  }
  if (assiette == "vegetalienne") {
    $("#assiette").html("Végétalienne");
    $("#assiette3").html("Végétalienne");
    $("#assiette2").html(
      '<span class="badge badge-pill badge-blanc">Végétalienne</span>'
    );
  }
  if (assiette2 == "perso") {
    $("#assiette").html("Personnalisé");
    $("#assiette3").html("Personnalisé");
    $("#assiette2").html(
      '<span class="badge badge-pill badge-blanc">Régime personnalisé</span>'
    );
  }
}

function updateseparbio() {
  //console.log('function updateseparbio() : gestion du bouton check "tout bio" en fonction des parts bio de chaque catégorie / pas de ws');
  if (
    $("#partbiocereales").val() +
      $("#partbiofruits").val() +
      $("#partbiolegumes").val() +
      $("#partbioelevage").val() ==
    "100100100100"
  ) {
    $("#toutbio").prop("checked", true);
    $("#toutbio2").prop("checked", true);
  } else {
    $("#toutbio").prop("checked", false);
    $("#toutbio2").prop("checked", false);
  }
  //minbio();
  var partbio = localStorage.getItem("partbio");
  //var partbio=parseFloat((parseInt($('#partbiocereales').val())+parseInt($('#partbiofruits').val())+parseInt($('#partbiolegumes').val())+parseInt($('#partbioelevage').val()))/4);
  $("#bioval").html(partbio);
  $("#bioval2").html(partbio);
  $("#bioval3").html(round(partbio, 0));
  if (round(partbio, 0) == 100) {
    $("#bioval4").html("100");
  } else {
    $("#bioval4").html("0");
  }
}

function updatetoutbio() {
  //console.log('function updatetoutbio() / Maj des sliders bio lorsque le bouton "tout bio" est coché / pas de ws');
  //	//console.log($('#partbiocereales').val()+$('#partbiofruits').val()+$('#partbiolegumes').val()+$('#partbioelevage').val());
  if ($("#toutbio").is(":checked") || $("#toutbio2").is(":checked")) {
    $("#partbiofruits").val(100);
    $("#partbiofruits2").html("100");
    $("#partbiofruitsval").html("100");
    $("#partbiofruits").rangeslider("update", true);
    $("#partbiolegumes").val(100);
    $("#partbiolegumes2").html("100");
    $("#partbiolegumesval").html("100");
    $("#partbiolegumes").rangeslider("update", true);
    $("#partbiocereales").val(100);
    $("#partbiocereales2").html("100");
    $("#partbiocerealesval").html("100");
    $("#partbiocereales").rangeslider("update", true);
    $("#partbioelevage").val(100);
    $("#partbioelevage2").html("100");
    $("#partbioelevageval").html("100");
    $("#partbioelevage").rangeslider("update", true);
    $("#partbio").val(100);
    $("#valpartbio").html("100");
    $("#partbio").rangeslider("update", true);
    localStorage.setItem("partbiofruits", 100);
    localStorage.setItem("partbioelevage", 100);
    localStorage.setItem("partbiolegumes", 100);
    localStorage.setItem("partbiocereales", 100);
    localStorage.setItem("partbio", 100);
    $("#chktoutbiofruits").prop("checked", true);
    $("#chktoutbiolegumes").prop("checked", true);
    $("#chktoutbiocereales").prop("checked", true);
    $("#chktoutbioelevage").prop("checked", true);
    //TEST adaptebio();
    //var partbio=parseFloat((parseInt($('#partbiocereales').val())+parseInt($('#partbiofruits').val())+parseInt($('#partbiolegumes').val())+parseInt($('#partbioelevage').val()))/4);
    //TEST minbio();
  }
}

function raztoutbio() {
  //console.log('function raztoutbio() / Maj des sliders bio lorsque le bouton "tout bio" est décoché puis actualisation des minima bio / pas de ws');

  if ($("#toutbio").is(":checked") || $("#toutbio2").is(":checked")) {
  } else {
    $("#partbiofruits").val(0);
    $("#partbiofruits2").html("0");
    $("#partbiofruitsval").html("0");
    $("#partbiofruits").rangeslider("update", true);
    $("#partbiolegumes").val(0);
    $("#partbiolegumes2").html("0");
    $("#partbiolegumesval").html("0");
    $("#partbiolegumes").rangeslider("update", true);
    $("#partbiocereales").val(0);
    $("#partbiocereales2").html("0");
    $("#partbiocerealesval").html("0");
    $("#partbiocereales").rangeslider("update", true);
    $("#partbioelevage").val(0);
    $("#partbioelevage2").html("0");
    $("#partbioelevageval").html("0");
    $("#partbioelevage").rangeslider("update", true);
    $("#partbio").val(0);
    $("#valpartbio").html("0");
    $("#partbio").rangeslider("update", true);
    localStorage.setItem("partbiofruits", 0);
    localStorage.setItem("partbioelevage", 0);
    localStorage.setItem("partbiolegumes", 0);
    localStorage.setItem("partbiocereales", 0);
    $("#chktoutbiofruits").prop("checked", false);
    $("#chktoutbiolegumes").prop("checked", false);
    $("#chktoutbiocereales").prop("checked", false);
    $("#chktoutbioelevage").prop("checked", false);
    //localStorage.setItem("partbio", 0);
    adaptebio();
    //var partbio=parseFloat((parseInt($('#partbiocereales').val())+parseInt($('#partbiofruits').val())+parseInt($('#partbiolegumes').val())+parseInt($('#partbioelevage').val()))/4);
    minbio();
    setTimeout(function () {
      var partbio = localStorage.getItem("partbio");
      $("#bioval").html(partbio);
      $("#bioval2").html(partbio);
      $("#bioval3").html(round(partbio, 0));
      if (round(partbio, 0) == 100) {
        $("#bioval4").html("100");
      } else {
        $("#bioval4").html("0");
      }
    }, 100);
  }
}

function updateall() {
  //console.log('function updateall() : déclenche les fonctions getMultiLandAreaResultsByProduct(), getMultiLandAreaResultsByCategory2() et getPersonnesparsurface()');

  var strlocalites = localStorage.getItem("localites");
  var strlocalitester = localStorage.getItem("localitester");
  //if(strlocalitester) getPersonnesparsurface();
  if (strlocalites) var localites = JSON.parse(strlocalites);
  setTimeout(function () {
    if (strlocalites) {
      getMultiLandAreaResultsByProduct(strlocalites, 99);
    }
    if (strlocalitester) {
      getMultiLandAreaResultsByProduct(strlocalites, 99);
    }
  }, 100);
  setTimeout(function () {
    if (strlocalites) {
      getMultiLandAreaResultsByCategory2(strlocalites);
    }
    if (strlocalitester) {
      getMultiLandAreaResultsByCategory2(strlocalites, false);
    }
  }, 200);
  adaptebio();
  setTimeout(function () {
    getSurfaceAgricole2();
  }, 500);
}

function updategraphemplois() {
  //console.log('function graphemplois() : mise à jour des graphes de droite dans /repartition-emplois');
  $("#man_legumes").html("");
  $("#man_fruits").html("");
  $("#man_cereales").html("");
  $("#man_elevage").html("");
  setTimeout(function () {
    var totalemplois = localStorage.getItem("totalemplois");
    var totalemploisfruits = localStorage.getItem("totalemploisfruits");
    var totalemploislegumes = localStorage.getItem("totalemploislegumes");
    var totalemploiscereales = localStorage.getItem("totalemploiscereales");
    var totalemploiselevage = localStorage.getItem("totalemploiselevage");
    barreman(
      "man_legumes",
      Math.round((100 * totalemploislegumes) / totalemplois)
    );
    barreman(
      "man_fruits",
      Math.round((100 * totalemploisfruits) / totalemplois)
    );
    barreman(
      "man_cereales",
      Math.round((100 * totalemploiscereales) / totalemplois)
    );
    barreman(
      "man_elevage",
      Math.round((100 * totalemploiselevage) / totalemplois)
    );
  }, 2000);
}

function barreman(typeimage, pourcent) {
  //  var parent = document.getElementById(typeimage);
  var parent = $("#" + typeimage);
  ////console.log(parent);
  var imagePath = "/assets/css/" + typeimage + ".jpg";
  var tout = Math.round($(".resultats-categories").width());
  var modulor = 13; //13px
  var max = Math.round(tout / modulor);
  var nb = Math.round((pourcent * max) / 100);
  //console.log('man ' + typeimage + '|' + modulor + '|' + tout + '|' + max + '|' + pourcent + '|' + nb);
  //$('#'+typeimage).html('<span id="pourcent'+typeimage+'" class="pourcent'+typeimage.replace('_',' ')+'"></span><img src="/assets/css/'+typeimage+'.jpg">');
  //$('#pourcent'+typeimage).html(pourcent+'%');
  $("#" + typeimage).html("");
  if (nb >= 1) {
    for (var i = 0; i <= nb; i++) {
      var img = new Image();
      img.src = imagePath;
      $("#" + typeimage)
        .append(img)
        .fadeIn(1000);
    }
  }
  var iconePath = imagePath.replace("man", "icone");
  var img2 = new Image();
  img2.src = iconePath;
  //parent.appendChild(img2);
}

function significatifsurface(surface) {
  if (round(surface, 1) < 1) {
    return round(surface, 1);
  }
  if (round(surface, 1) >= 1 && round(surface, 1) <= 100) {
    return round(surface, 0);
  }
  if (round(surface, 1) > 100 && round(surface, 1) <= 10000) {
    return round(surface / 10, 0) * 10;
  }
  if (round(surface, 1) > 10000) {
    return round(surface / 100, 0) * 100;
    /*		var longueur=round(surface, 0).toString();
                //console.log('longeur'+longueur);
                var longeur2=longueur.length;
                //console.log('longeur2'+longeur2);
                var zeros=longeur2-2;
                //console.log('zeros'+longeur2);
                var diviseur=Math.pow(10, zeros);
                //console.log('diviseur'+diviseur);
                return round(surface/diviseur, 0)*diviseur;*/
  }
}

function significatifemploi(emplois) {
  if (round(emplois, 1) < 1) {
    return "< 1";
  }
  if (round(emplois, 1) >= 1 && round(emplois, 1) <= 100) {
    return round(emplois, 0);
  }
  if (round(emplois, 1) > 100 && round(emplois, 1) <= 10000) {
    return round(emplois / 10, 0) * 10;
  }
  if (round(emplois, 1) > 10000) {
    return round(emplois / 100, 0) * 100;
  }
}
function significatifpotentiel(potentiel) {
  if (round(potentiel, 1) < 1) {
    return "< 1";
  }
  if (round(potentiel, 1) >= 1 && round(potentiel, 1) <= 100) {
    return round(potentiel, 0).toLocaleString();
  }
  if (round(potentiel, 1) > 100 && round(potentiel, 1) <= 10000) {
    return (round(potentiel / 10, 0) * 10).toLocaleString();
  }
  if (round(potentiel, 1) > 10000) {
    return (round(potentiel / 100, 0) * 100).toLocaleString();
  }
}

function getCoeffEmpreinte(ArrayGeoAreaCode) {
  var urlws =
    "https://convertisseur.azurewebsites.net/API/GeoData/GetCoef_empreinte_spatiale?GeoLocale=" +
    ArrayGeoAreaCode;
  console.log(urlws);
  $.getJSON(urlws)
    .done(function (data) {
      $.each(data, function (key, item) {
        if (item.code_carl == 58) {
          // Oeufs
          if (item.code_basic_agricole_2 == 3)
            localStorage.setItem("coeff_cereales_oeufs", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 7)
            localStorage.setItem("coeff_cultures_oeufs", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 9)
            localStorage.setItem("coeff_prairies_oeufs", item.valeur_Coef);
        }
        if (item.code_carl == 53) {
          // Oeufs
          if (item.code_basic_agricole_2 == 3)
            localStorage.setItem("coeff_cereales_lait", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 7)
            localStorage.setItem("coeff_cultures_lait", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 9)
            localStorage.setItem("coeff_prairies_lait", item.valeur_Coef);
        }
        if (item.code_carl == 54) {
          // Oeufs
          if (item.code_basic_agricole_2 == 3)
            localStorage.setItem("coeff_cereales_bovins", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 7)
            localStorage.setItem("coeff_cultures_bovins", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 9)
            localStorage.setItem("coeff_prairies_bovins", item.valeur_Coef);
        }
        if (item.code_carl == 63) {
          // Oeufs
          if (item.code_basic_agricole_2 == 3)
            localStorage.setItem("coeff_cereales_ovins", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 7)
            localStorage.setItem("coeff_cultures_ovins", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 9)
            localStorage.setItem("coeff_prairies_ovins", item.valeur_Coef);
        }
        if (item.code_carl == 55) {
          // Oeufs
          if (item.code_basic_agricole_2 == 3)
            localStorage.setItem("coeff_cereales_porcins", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 7)
            localStorage.setItem("coeff_cultures_porcins", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 9)
            localStorage.setItem("coeff_prairies_porcins", item.valeur_Coef);
        }
        if (item.code_carl == 57) {
          // Oeufs
          if (item.code_basic_agricole_2 == 3)
            localStorage.setItem("coeff_cereales_volailles", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 7)
            localStorage.setItem("coeff_cultures_volailles", item.valeur_Coef);
          if (item.code_basic_agricole_2 == 9)
            localStorage.setItem("coeff_prairies_volailles", item.valeur_Coef);
        }
      });
    })
    .fail(function (jqXHR, textStatus, err) {
      log("API Error: " + err);
    });
}

function getIDAssiette() {
  ID_Assiette = "0";
  if (localStorage.getItem("partviande") == "flexi0") ID_Assiette = "0";
  if (localStorage.getItem("partviande") == "flexi1") ID_Assiette = "1";
  if (localStorage.getItem("partviande") == "flexi2") ID_Assiette = "2";
  if (localStorage.getItem("partviande") == "vegetarienne") ID_Assiette = "3";
  if (localStorage.getItem("partviande") == "vegetalienne") ID_Assiette = "4";
  return ID_Assiette;
}

function getLibelleAssiette() {
  str_Assiette = "Régime actuel";
  if (localStorage.getItem("partviande") == "flexi0")
    str_Assiette = "Régime actuel";
  if (localStorage.getItem("partviande") == "flexi1")
    str_Assiette = "Diminution d'1/4 des produits animaux";
  if (localStorage.getItem("partviande") == "flexi2")
    str_Assiette = "Diminution de moitié des produits animaux";
  if (localStorage.getItem("partviande") == "vegetarienne")
    str_Assiette = "Végétarien";
  if (localStorage.getItem("partviande") == "vegetalienne")
    str_Assiette = "Végétalien";
  if (localStorage.getItem("partviande") == "perso")
    str_Assiette = "Régime perso";
  return str_Assiette;
}

function getLibelleAssiettePdf(simulation) {
  libelles = {};
  str_Assiette = "Actuel";
  if (simulation == "seule") {
    libelles["titre"] = "Actuel";
    libelles["sous_titre"] = "Régime alimentaire actuel";
    libelles["detail"] = "Régime alimentaire actuel";
  } else {
    if (localStorage.getItem("partviande") == "flexi0") {
      libelles["titre"] = "Actuel";
      libelles["sous_titre"] = "Régime alimentaire actuel";
      libelles["detail"] = "Régime alimentaire actuel";
    }
    if (localStorage.getItem("partviande") == "flexi1") {
      libelles["titre"] = "Flexitarien";
      libelles["sous_titre"] = "Régime alimentaire flexitarien";
      libelles["detail"] = "réduction de 25% de la part de produits animaux";
    }
    if (localStorage.getItem("partviande") == "flexi2") {
      libelles["titre"] = "Flexitarien";
      libelles["sous_titre"] = "Régime alimentaire flexitarien";
      libelles["detail"] = "réduction de 50% de la part de produits animaux";
    }
    if (localStorage.getItem("partviande") == "vegetarienne") {
      libelles["titre"] = "Végétarien";
      libelles["sous_titre"] = "Régime alimentaire végétarien";
      libelles["detail"] = "Pas de consommation de viande";
    }
    if (localStorage.getItem("partviande") == "vegetalienne") {
      libelles["titre"] = "Végétalien";
      libelles["sous_titre"] = "Régime alimentaire végétalien";
      libelles["detail"] = "Pas de consommation produits animaux";
    }
    if (localStorage.getItem("partviande") == "perso") {
      libelles["titre"] = "Régime perso";
      libelles["sous_titre"] = "Régime personnalisé";
      libelles["detail"] = "Régime personnalisé";
    }
  }
  return libelles;
}

function getArtificialisation() {
  var artif = 0;
  ArrayGeoAreaCode = localStorage.getItem("localites");
  var url_artif =
    "https://convertisseur.azurewebsites.net/API/LandArea/GetArtificialisationbyGeolocale?GeoLocale=" +
    ArrayGeoAreaCode;
  $.getJSON(url_artif).done(function (data) {
    $.each(data, function (key, item) {
      artif = item.surface_artificialisation;
      localStorage.setItem("artificialisation", round(artif, 0));
    });
  });
  setTimeout(function () {
    $("#artificialisation").html(round(artif, 0));
    //alert(round(artif, 0));
  }, 100);
}

function updateArtificialisation() {
  var surface = localStorage.getItem("artificialisation");
  if (surface != "") {
    $("#artificialisation").html(round(surface, 0));
    $("#txt_artificialisation").show("slow");
  } else {
    $("#txt_artificialisation").hide();
  }
}

function getPartActuelleBio() {
  var partbio = 0;
  ArrayGeoAreaCode = localStorage.getItem("localites");
  var url_getbio =
    "https://convertisseur.azurewebsites.net/API/BioCurseur/GetPart_en_Bio?GeoLocale=" +
    ArrayGeoAreaCode;
  $.getJSON(url_getbio).done(function (data) {
    $.each(data, function (key, item) {
      partbio = 100 * item.Part_En_Bio;
      localStorage.setItem("part_actuelle_bio", round(partbio, 0));
      //alert(partbio)
    });
  });
}

function draw_repartition_pdf() {
  var website = "https://stg.parcel-app.org";
  var draw_repartition_pdf =
    '<table><tr><td width="30"></td><td width="150"></td><td width="100"></td><td width="80"></td></tr>';
  var data = [];
  var colors = [];

  var surface_paysage_prairies_estives_landes = localStorage.getItem(
    "pays_act_prairie_estives_landes"
  );
  var surface_paysage_cultures_fourrageres = localStorage.getItem(
    "pays_act_cultures_fourrageres"
  );
  var surface_paysage_legumineuses = localStorage.getItem(
    "pays_act_legumineuses"
  );
  var surface_paysage_cereales_olea_proteagineux = localStorage.getItem(
    "pays_act_cereales_olea_proteagineux"
  );
  var surface_paysage_cultures_industrielles = localStorage.getItem(
    "pays_act_cultures_industrielles_alimentaires"
  );
  var surface_paysage_fruits = localStorage.getItem("pays_act_fruits");
  var surface_paysage_legumes = localStorage.getItem("pays_act_legumes");
  var surface_paysage_autres_cultures = localStorage.getItem(
    "pays_act_autres_cultures"
  );
  //var surface_paysage_total = localStorage.getItem('totsurface');
  var surface_paysage_total =
    parseFloat(surface_paysage_prairies_estives_landes) +
    parseFloat(surface_paysage_cultures_fourrageres) +
    parseFloat(surface_paysage_legumineuses) +
    parseFloat(surface_paysage_cereales_olea_proteagineux) +
    parseFloat(surface_paysage_cultures_industrielles) +
    parseFloat(surface_paysage_fruits) +
    parseFloat(surface_paysage_legumes) +
    parseFloat(surface_paysage_autres_cultures);
  //    var surface_paysage_total =localStorage.getItem("surface_agricole_actuelle");
  //console.log('surface_paysage_prairies_estives_landes '+surface_paysage_prairies_estives_landes);
  //console.log('surface_paysage_cultures_fourrageres '+surface_paysage_cultures_fourrageres);
  //console.log('surface_paysage_legumineuses '+surface_paysage_legumineuses);
  //console.log('surface_paysage_cereales_olea_proteagineux '+surface_paysage_cereales_olea_proteagineux);
  //console.log('surface_paysage_cultures_industrielles '+surface_paysage_cultures_industrielles);
  //console.log('surface_paysage_fruits '+surface_paysage_fruits);
  //console.log('surface_paysage_legumes '+surface_paysage_legumes);
  //console.log('surface_paysage_autres_cultures '+surface_paysage_autres_cultures);
  //console.log('surface_paysage_total '+surface_paysage_total);

  var pc_paysage_prairies_estives_landes = Math.round(
    (100 * parseFloat(surface_paysage_prairies_estives_landes)) /
      surface_paysage_total
  );
  var pc_paysage_cultures_fourrageres = Math.round(
    (100 * parseFloat(surface_paysage_cultures_fourrageres)) /
      surface_paysage_total
  );
  var pc_paysage_legumineuses = Math.round(
    (100 * parseFloat(surface_paysage_legumineuses)) / surface_paysage_total
  );
  var pc_paysage_cereales_olea_proteagineux = Math.round(
    (100 * parseFloat(surface_paysage_cereales_olea_proteagineux)) /
      surface_paysage_total
  );
  var pc_paysage_cultures_industrielles = Math.round(
    (100 * parseFloat(surface_paysage_cultures_industrielles)) /
      surface_paysage_total
  );
  var pc_paysage_fruits = Math.round(
    (100 * parseFloat(surface_paysage_fruits)) / surface_paysage_total
  );
  var pc_paysage_legumes = Math.round(
    (100 * parseFloat(surface_paysage_legumes)) / surface_paysage_total
  );
  var pc_paysage_autres_cultures = Math.round(
    (100 * parseFloat(surface_paysage_autres_cultures)) / surface_paysage_total
  );

  if (surface_paysage_prairies_estives_landes != 0) {
    data.push(surface_paysage_prairies_estives_landes);
    colors.push("#BDC660 ");
    if (surface_paysage_prairies_estives_landes < 1) {
      strsurface_paysage_prairies_estives_landes = "< 1 ha";
    } else {
      strsurface_paysage_prairies_estives_landes =
        '<span id="totalcereales">' +
        round(surface_paysage_prairies_estives_landes, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_cultures_fourrageres != 0) {
    data.push(surface_paysage_cultures_fourrageres);
    colors.push("#f5a623");
    if (surface_paysage_cultures_fourrageres < 1) {
      strsurface_paysage_cultures_fourrageres = "< 1 ha";
    } else {
      strsurface_paysage_cultures_fourrageres =
        '<span id="totalcereales">' +
        round(surface_paysage_cultures_fourrageres, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_legumineuses != 0) {
    data.push(surface_paysage_legumineuses);
    colors.push("#8C756E ");
    if (surface_paysage_legumineuses < 1) {
      strsurface_paysage_legumineuses = "< 1 ha";
    } else {
      strsurface_paysage_legumineuses =
        '<span id="totalcereales">' +
        round(surface_paysage_legumineuses, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_cereales_olea_proteagineux != 0) {
    data.push(surface_paysage_cereales_olea_proteagineux);
    colors.push("#ef5959");
    if (surface_paysage_cereales_olea_proteagineux < 1) {
      strsurface_paysage_cereales_olea_proteagineux = "< 1 ha";
    } else {
      strsurface_paysage_cereales_olea_proteagineux =
        '<span id="totalcereales">' +
        round(surface_paysage_cereales_olea_proteagineux, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_cultures_industrielles != 0) {
    data.push(surface_paysage_cultures_industrielles);
    colors.push("#48b7b7");
    if (surface_paysage_cultures_industrielles < 1) {
      strsurface_paysage_cultures_industrielles = "< 1 ha";
    } else {
      strsurface_paysage_cultures_industrielles =
        '<span id="totalcereales">' +
        round(surface_paysage_cultures_industrielles, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_fruits != 0) {
    data.push(surface_paysage_fruits);
    colors.push("#FC459C");
    if (surface_paysage_fruits < 1) {
      strsurface_paysage_fruits = "< 1 ha";
    } else {
      strsurface_paysage_fruits =
        '<span id="totalcereales"> ' +
        round(surface_paysage_fruits, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_legumes != 0) {
    data.push(surface_paysage_legumes);
    colors.push("#CE74F6");
    if (surface_paysage_legumes < 1) {
      strsurface_paysage_legumes = "< 1 ha";
    } else {
      strsurface_paysage_legumes =
        '<span id="totalcereales"> ' +
        round(surface_paysage_legumes, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_autres_cultures != 0) {
    data.push(surface_paysage_autres_cultures);
    colors.push("#CE74F6");
    if (surface_paysage_autres_cultures < 1) {
      strsurface_paysage_autres_cultures = "< 1 ha";
    } else {
      strsurface_paysage_autres_cultures =
        '<span id="totalcereales"> ' +
        round(surface_paysage_autres_cultures, 0).toLocaleString() +
        "</span> ha";
    }
  }
  if (surface_paysage_prairies_estives_landes != 0)
    draw_repartition_pdf +=
      '<tr style="color:#ABD848;"><td width="30" align="center"><img src="' +
      website +
      '/assets/img/icons/export/prairie.png" width="30" style="width:30px;"></td><td width="200" style="font-weight:bold;">Prairies, estives, landes</td><td width="100" align="right">' +
      strsurface_paysage_prairies_estives_landes +
      '</td><td width="50" style="color:#BDC660 ;font-weight:bold;" align="right">' +
      pc_paysage_prairies_estives_landes +
      "%</td></tr>";
  if (surface_paysage_cultures_fourrageres != 0)
    draw_repartition_pdf +=
      '<tr style="color:#D3A35;"><td width="30" align="center"><img src="' +
      website +
      '/assets/img/icons/export/fourrage.png" width="20" style="width:30px;"></td><td width="200" style="font-weight:bold;">Cultures fourragères</td><td width="100" align="right">' +
      strsurface_paysage_cultures_fourrageres +
      '</td><td width="50" style="color:#f5a623;font-weight:bold;" align="right">' +
      pc_paysage_cultures_fourrageres +
      "%</td></tr>";
  if (surface_paysage_legumineuses != 0)
    draw_repartition_pdf +=
      '<tr style="color:#F5A623;"><td width="30" align="center"><img src="' +
      website +
      '/assets/img/icons/export/legumineuse.png" width="25" style="width:30px;"></td><td width="200" style="font-weight:bold;">Légumineuses</td><td width="100" align="right">' +
      strsurface_paysage_legumineuses +
      '</td><td width="50" style="color:#8C756E ;font-weight:bold;" align="right">' +
      pc_paysage_legumineuses +
      "%</td></tr>";
  if (surface_paysage_cereales_olea_proteagineux != 0)
    draw_repartition_pdf +=
      '<tr style="color:#F49D87;"><td width="30" align="center"><img src="' +
      website +
      '/assets/img/icons/export/cereale.png" width="18" style="width:30px;"></td><td width="200" style="font-weight:bold;">Céréales, Oléagineux, protéagineux</td><td width="100" align="right">' +
      strsurface_paysage_cereales_olea_proteagineux +
      '</td><td width="50" style="color:#ef5959;font-weight:bold;" align="right">' +
      pc_paysage_cereales_olea_proteagineux +
      "%</td></tr>";
  if (surface_paysage_cultures_industrielles != 0)
    draw_repartition_pdf +=
      '<tr style="color:#48B7B7;"><td width="30" align="center"><img src="' +
      website +
      '/assets/img/icons/export/pomme-de-terre.png" width="25" style="width:30px;"></td><td width="200" style="font-weight:bold;">Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)</td><td width="100" align="right">' +
      strsurface_paysage_cultures_industrielles +
      '</td><td width="50" style="color:#48b7b7;font-weight:bold;" align="right">' +
      pc_paysage_cultures_industrielles +
      "%</td></tr>";
  if (surface_paysage_fruits != 0)
    draw_repartition_pdf +=
      '<tr style="color:#FC459C;"><td width="30" align="center"><img src="' +
      website +
      '/assets/css/icone_fruits.jpg" width="30" style="width:30px;"></td><td width="200" style="font-weight:bold;">Fruits</td><td width="100" align="right">' +
      strsurface_paysage_fruits +
      '</td><td width="50" style="color:#FC459C;font-weight:bold;" align="right">' +
      pc_paysage_fruits +
      "%</td></tr>";
  if (surface_paysage_legumes != 0)
    draw_repartition_pdf +=
      '<tr style="color:#CE74F6;"><td width="30" align="center"><img src="' +
      website +
      '/assets/css/icone_legumes.jpg" width="30" style="width:30px;"></td><td width="200" style="font-weight:bold;">Légumes</td><td width="100" align="right">' +
      strsurface_paysage_legumes +
      '</td><td width="50" style="color:#CE74F6;font-weight:bold;" align="right">' +
      pc_paysage_legumes +
      "%</td></tr>";
  if (surface_paysage_autres_cultures != 0)
    draw_repartition_pdf +=
      '<tr style="color:#62D5F3;"><td width="30" align="center"><img src="' +
      website +
      '/assets/img/icons/export/autres_cultures.png" width="30" style="width:30px;"></td><td width="200" style="font-weight:bold;">Autres cultures industrielles</td><td width="100" align="right">' +
      strsurface_paysage_autres_cultures +
      '</td><td width="50" style="color:#62D5F3;font-weight:bold;" align="right">' +
      pc_paysage_autres_cultures +
      "%</td></tr>";
  /*    if (surface_paysage_cultures_fourrageres != 0) draw_repartition_pdf += '<tr><td colspan="5"><span class="cadre-categorie fourrage animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-fruits" style="cursor: pointer;"><span class="result-type"><span class="icon-fourragere ico-medium fourrage"></span></span><span class="result-chiffres row align-items-center"><span class="col mb-0 titre-categorie">Cultures fourragères</span><span class="col-auto ml-auto hectares">' + strsurface_paysage_cultures_fourrageres + '</span></span></span></td></tr>';
        if (surface_paysage_legumineuses != 0) draw_repartition_pdf += '<tr><td colspan="5"><span class="cadre-categorie legumineuse animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-cereales" style="cursor: pointer;"><span class="result-type"><span class="icon-legumineuses ico-medium legumineuse"></span></span><span class="result-chiffres row align-items-center"><span class="col mb-0 titre-categorie">Légumineuses</span><span class="col-auto ml-auto hectares">' + strsurface_paysage_legumineuses + '</span></span></span></td></tr>';
        if (surface_paysage_cereales_olea_proteagineux != 0) draw_repartition_pdf += '<tr><td colspan="5"><span class="cadre-categorie oleagineux animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><span class="result-type"><span class="icon-oleagineux ico-medium oleagineux"></span></span><span class="result-chiffres row align-items-center"><span class="col mb-0 titre-categorie">Céréales, Oléagineux, protéagineux</span><span class="col-auto ml-auto hectares">' + strsurface_paysage_cereales_olea_proteagineux + '</span></span></span></td></tr>';
        if (surface_paysage_cultures_industrielles != 0) draw_repartition_pdf += '<tr><td colspan="5"><span class="cadre-categorie pdt animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><span class="result-type"><span class="icon-cereales2 ico-medium pdt"></span></span><span class="result-chiffres row align-items-center"><span class="col mb-0 titre-categorie">Cultures industrielles alimentaires (pomme de terre, betterave à sucre…)</span><span class="col-auto ml-auto hectares">' + strsurface_paysage_cultures_industrielles + '</span></span></span></td></tr>';
        if (surface_paysage_fruits != 0) draw_repartition_pdf += '<tr><td colspan="5"><span class="cadre-categorie fruitssurface animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><span class="result-type"><span class="icon-ico_CATEGORIES_fruits ico-medium fruitssurface"></span></span><span class="result-chiffres row align-items-center"><span class="col mb-0 titre-categorie">Fruits</span><span class="col-auto ml-auto hectares">' + strsurface_paysage_fruits + '</span></span></span></td></tr>';
        if (surface_paysage_legumes != 0) draw_repartition_pdf += '<tr><td colspan="5"><span class="cadre-categorie legumessurface animated fadeIn delay-1s" onclick="" data-toggle="modal" data-target="#modal-viande" style="cursor: pointer;"><span class="result-type"><span class="icon-ico_CATEGORIES_legumes ico-medium legumessurface"></span></span><span class="result-chiffres row align-items-center"><span class="col mb-0 titre-categorie">Légumes</span><span class="col-auto ml-auto hectares">' + strsurface_paysage_legumes + '</span></span></span></td></tr>';
    */
  draw_repartition_pdf += "</table>";
  //alert(draw_repartition_pdf);

  // set the color scale

  var retour = {};
  retour["draw_repartition_pdf"] = draw_repartition_pdf;
  retour["data"] = data;
  retour["pie"] = ""; //data_ready;
  retour["colors"] = colors;

  return retour;
}
function get_pdf_chart(value, theme) {
  var website = "https://stg.parcel-app.org";
  var path = website + "/assets/img/icons/chart/";
  var themeimg = "vert-";
  var img = "vert-0";
  var url_img = "";
  if (theme != "") themeimg = theme + "-";

  if (value <= 0) img = themeimg + "0";
  if (value > 0 && value <= 7) img = themeimg + "5";
  if (value > 7 && value <= 12) img = themeimg + "10";
  if (value > 12 && value <= 17) img = themeimg + "15";
  if (value > 17 && value <= 22) img = themeimg + "20";
  if (value > 22 && value <= 27) img = themeimg + "25";
  if (value > 27 && value <= 32) img = themeimg + "30";
  if (value > 32 && value <= 37) img = themeimg + "35";
  if (value > 37 && value <= 42) img = themeimg + "40";
  if (value > 42 && value <= 47) img = themeimg + "45";
  if (value > 47 && value <= 52) img = themeimg + "50";
  if (value > 52 && value <= 57) img = themeimg + "55";
  if (value > 57 && value <= 62) img = themeimg + "60";
  if (value > 62 && value <= 67) img = themeimg + "65";
  if (value > 67 && value <= 72) img = themeimg + "70";
  if (value > 72 && value <= 77) img = themeimg + "75";
  if (value > 77 && value <= 82) img = themeimg + "80";
  if (value > 82 && value <= 87) img = themeimg + "85";
  if (value > 87 && value <= 92) img = themeimg + "90";
  if (value > 92 && value <= 97) img = themeimg + "95";
  if (value > 97) img = themeimg + "100";

  var url_img = path + img + ".png";
  return url_img;
}

function drawgraphs() {
  draw_products_graphs();
  draw_landscape_graphs();
}
