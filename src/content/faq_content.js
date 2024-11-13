export const FAQ_CONTENT = [
  {
    titreCategorie: "Les questions sur…la méthode, le périmètre et les données",
    questions: [
      {
        titreQuestion:
          "Les bases de données des entités géographiques (communes, provinces, arrondissements, GALs et Parcs naturels, …) utilisée par PARCEL.WAL est-elle à jour ?",
        reponseQuestion:
          "<p>La base de données utilisée pour les communes, provinces, arrondissements est celle de Stabel et datant de 2024 (qui prend en compte les communes fusionnées à partir de 2025).</p><p>La base de données utilisée pour les GALs est celle du Réseau Wallon PAC et pour les Parcs naturels, celle de la Fédération des Parcs Naturels de Wallonie, toutes deux à jour pour le programme LEADER 2024-2027.</p><p>Si vous travaillez sur une commune récemment fusionnée et qui n’apparaît pas dans PARCEL, vous pouvez la reconstituer en sommant les anciennes communes qui la composent (lorsque l’utilisateur choisi le territoire, il a la possibilité d’additionner plusieurs entités géographiques). Le même raisonnement peut être suivi pour reconstituer n’importe quel territoire non pris en compte dans les choix de PARCEL.WAL : nouveau GAL, initiative territoriale incluant plusieurs communes, etc.</p><p>Si cette solution ne vous satisfait pas, et que vous connaissez la population (nombre et âge) de la commune, vous pouvez aussi faire des estimations en sélectionnant une sous-population de la province de la commune (dans l’onglet « Choisissez la population concernée dont vous souhaitez relocaliser l’alimentation », entrez le nombre d’enfants (0-17 ans), d’adultes (18-64 ans) et de personnes âgées (65+ ans) que compte la commune). Cette estimation sera moins précise que l’estimation directe (pas de correction sur le sexe des habitants et tranches d’âge moins détaillée que celles utilisées dans le calcul à l’échelle de la commune directement), mais elle donnera le bon ordre de grandeur.</p>",
      },
      {
        titreQuestion: "Quels produits sont pris en compte dans PARCEL.WAL ?",
        reponseQuestion:
          "<p>Vous trouverez ci-dessous la liste des produits inclus dans PARCEL.WAL (image extraite de la Note méthodologique de l’outil PARCEL, page 5). 61 produits sont répertoriés dans la base de données de PARCEL. Certains produits étant des regroupements de produits (voir la ligne « Betteraves, radis, salsifis, similaires »), le périmètre de PARCEL.WAL couvre en réalité environ 90 produits. Les produits pris en compte par PARCEL.WAL représentent 91% de notre alimentation en volume. Ne sont pas pris en compte : les produits de la mer, les boissons alcoolisées et les produits tropicaux/exotiques (avocat, café, cacao, etc.).</p><p>Ainsi, PARCEL.WAL prend en compte les produits consommés par les Wallonn.e.s, qui ont un potentiel de relocalisation en Wallonie (qu’il est possible de cultiver en Wallonie) (donc les produits recensés à cette échelle dans les données agricoles Statbel), quelle que soit la forme dans laquelle sont consommés ces produits (frais, congelés, incorporés dans des produits transformés complexes…).</p><p>Les boissons alcoolisées (bière, vin) ne sont actuellement pas non plus incluses dans PARCEL.WAL, la volonté a été de se concentrer sur les besoins alimentaires primaires.</p>",
      },
      {
        titreQuestion:
          "Lorsque PARCEL.WAL relocalise 100 % des produits sur un territoire, il me propose de relocaliser des produits dont la culture n’est pas adaptée aux spécificités pédologiques et climatiques de la région agricole où se trouve ce territoire. Comment interpréter ces résultats ?",
        reponseQuestion:
          "<p>Quel que soit le choix de périmètre géographique de l’utilisateur, PARCEL.WAL propose de relocaliser l’ensemble des produits. Ainsi, il peut arriver que PARCEL.WAL propose de relocaliser des produits qui actuellement ne sont pas produits sur le territoire en question. Cependant, PARCEL.WAL indique, dans l’onglet de détail par produit si les productions sont recensées par le ministère de l’agriculture au niveau départemental, régional ou national. Cette information donne une idée de la disponibilité du produit à l’échelle interrogée.</p><p>Le choix a été fait de proposer une relocalisation pour l’ensemble des produits, quel que soit le territoire. PARCEL.WAL fournit donc des estimations théoriques, sans aborder directement la nécessité d’une réorganisation des filières. Cette réflexion sur une éventuelle réorganisation devra être menée dans un second temps pour comprendre les raisons de l’absence de certaines productions (pédoclimatiques, économiques, politiques, etc.) à une échelle donnée et les implications socio-économiques d’un tel changement.</p>",
      },
    ],
  },
  {
    titreCategorie:
      "Les questions sur… les paramètres d’entrée : relocalisation, bio, régime alimentaire",
    questions: [
      {
        titreQuestion:
          "Que représente exactement le pourcentage de bio indiqué ?",
        reponseQuestion:
          "<p>La valeur minimale de la part de produits bio présentée lors de la simulation correspond à la part des produits bio actuellement produite (en volume) sur le territoire. Ces valeurs minimales sont calculées sur la base des données en surface (fournies par Statbel/Biowallonie) qui ont été converties en volume en utilisant les rendements. Cela permet de calculer les pourcentages de bio par grandes catégories de produits (fruits, légumes, grandes cultures, élevage). Le pourcentage de bio minimum global du territoire est calculé en fonction du pourcentage des quatre catégories pondérées par les volumes que représentent chacune dans le régime alimentaire moyen.</p><p>Lors des simulations, l’utilisateur peut décider d’augmenter la part de produits bio dans l’alimentation relocalisée (c’est-à-dire la part de denrées bio produites et consommées localement), mais elle ne peut pas être fixée en dessous de la valeur minimale.</p><p>Astuce : Pour revenir à cette valeur minimale après avoir fait bouger le curseur, il faut tirer ce dernier au maximum vers la gauche.</p><p>Attention : Ce pourcentage ne concerne que les produits considérés par PARCEL.WAL.</p>",
      },
      {
        titreQuestion:
          "Les spécificités des différents convives des établissements de restauration collective (nombre de repas par jour, nombre de jours dans l’année, âge des consommateurs) sont-elles bien prises en compte par PARCEL.WAL ?",
        reponseQuestion:
          "<p>Oui, PARCEL.WAL prend en compte les spécificités des différents types de convives.</p><p>Ainsi, pour les établissements scolaires (écoles maternelles, écoles primaires, écoles secondaires, hautes écoles et universités), un seul repas par jour est comptabilisé et les repas pendant les vacances scolaires sont retranchés. En revanche, les pensions complètes dans les internats ne sont pas prises en compte, car il n’est pas possible d’identifier de manière robuste la présence ou non d’un internat pour chaque établissement ni l’effectif concerné. Pour pallier cette limite, il est possible de sélectionner un « groupe de personnes ».</p><p>Pour les restaurants d’entreprise, un repas par jour ouvré est comptabilisé. Pour les maisons de retraite et les hôpitaux, trois repas par jour par personne sont comptabilisés sur toute l’année.</p><p>L’âge de la population des établissements est également pris en compte dans les calculs. A titre d’exemple, pour les écoles, le profil de consommation se base sur un nombre d’enfants mais également un nombre d’encadrants.</p>",
      },
      {
        titreQuestion:
          "Comment sont évaluées les quantités de produits alimentaires consommés en Wallonie et dans les territoires ?",
        reponseQuestion:
          "<p>Statbel dresse des bilans d’approvisionnement annuels (quantité produite, quantité importée, quantité exportée…) qui permettent de déduire la consommation moyenne d’une denrée par habitant, en Wallonie.</p><p>Pour certaines denrées (fruits, légumes et lait) les bilans ne sont pas dressés par Statbel (ou sont datés) : PARCEL.WAL produit des estimations équivalentes. Pour ce faire, l’outil mobilise les statistiques d’importations et d’exportations de la Banque Nationale Belge ainsi que des données de production de Stabel.</p><p>PARCEL.WAL territorialise ensuite les régimes alimentaires à l’échelle des communes en croisant cette donnée de consommation moyenne par habitant avec :</p><ul><li>Les coefficients de variation des régimes alimentaires selon l’âge et le sexe des consommateurs (étude de consommation alimentaire de Sciensano) ;</li><li>Les données de population des communes (données Statbel).</li></ul><p>Pour plus de détail sur cette partie, se référer la Note méthodologique de l’outil PARCEL, pages 8 à 10.</p>",
      },
      {
        titreQuestion:
          "Est-ce que PARCEL.WAL prend en compte les éventuels différentiels de consommation d’une commune à l’autre ?",
        reponseQuestion:
          "<p>Afin d’évaluer la consommation alimentaire d’un territoire, PARCEL.WAL croise les données de consommations alimentaires nationales et les données démographiques du territoire sélectionné (selon leur âge et leur sexe). La consommation est donc adaptée au territoire sélectionné en termes de population, mais les potentielles spécificités régionales autres ne sont pas prises en compte.</p><p>En effet, les différences de consommation entre individus sont beaucoup plus marquées selon l’âge et le sexe que selon la région. Les personnes de même sexe et appartenant à la même classe d’âges ont des comportements alimentaires très similaires. Cela constitue des variables significatives qu’il est intéressant de prendre en compte pour adapter les données de consommation au plus proche de la population. Ainsi, dans une province dans laquelle se trouveraient deux communes avec le même nombre d’habitant.e.s, mais de composition différente (moyenne d’âge différente, ratio homme/femme différent…), PARCEL.WAL proposera deux résultats différents en termes de surfaces et d’emplois lors de simulations. A l’inverse, d’après l’Étude de Consommation Alimentaire de Sciensano, les spécificités régionales ne sont pas très significatives.</p>",
      },
      {
        titreQuestion:
          "Est-ce que PARCEL.WAL prend en compte tous les aliments transformés ? (Est-ce qu’on mesure le nombre de kg de tomates dans les importations de pizza ?)",
        reponseQuestion:
          "<p>Grâce aux bilans d’approvisionnement fournis par Statbel (et les estimations équivalentes réalisées par PARCEL.WAL, voir question 6), PARCEL.WAL estime des volumes globaux de matières premières agricoles nécessaires à l’alimentation, quelle que soit la forme de la consommation finale (produits bruts, produits transformés ou ultra-transformés). Cette méthode permet de ne pas avoir besoin de faire le lien entre les matières premières agricoles et les produits finis, et donc de devoir convertir des quantités de produits transformés (pizzas, ratatouille…) consommés chaque année en matières premières en modélisant la recette exacte.</p>",
      },
      {
        titreQuestion:
          "Est-ce que les données de consommation prennent en compte le gaspillage alimentaire ?",
        reponseQuestion:
          "<p>Oui, le gaspillage et les pertes au sein des filières sont pris en compte dans les données de consommation de PARCEL.WAL. Si des améliorations se produisent au niveau du gaspillage et des pertes, cela sera visible dans les calculs réalisés dans PARCEL.WAL (la production agricole nécessaire à nourrir la population sera moindre et cela se reflétera dans les surfaces agricoles nécessaires).</p>",
      },
      {
        titreQuestion:
          "Est-ce que l’on connait la part de produits actuellement consommés en local ?",
        reponseQuestion:
          "<p>Non. PARCEL.WAL ne donne pas les consommations locales actuelles (ni leur nature, ni leur provenance). Les données dans ce domaine sont limitées, mais l’IWEPS estime, dans son Cahier de prospective n°8 : « La sécurité et la souveraineté alimentaires de la Wallonie : un questionnement prospectif » de juin 2024, qu’« environ 16 % de la valeur de la production des secteurs agroalimentaires wallons est consommée localement (en Wallonie) et que seuls 12 % de la valeur de la consommation alimentaire régionale est d’origine locale (wallonne). »</p>",
      },
    ],
  },
  {
    titreCategorie: "Les questions sur… les surfaces agricoles",
    questions: [
      {
        titreQuestion:
          "Quelles données pour les surfaces actuelles de mon territoire sont utilisées par PARCEL.WAL ?",
        reponseQuestion:
          "<p>Jusqu’en 2021, pour l’affichage des surfaces actuelles des territoires, PARCEL.WAL utilisait les données du recensement agricole de 2010 (pour les surfaces par communes) et les données de l’enquête Teruti-Lucas (pour les surfaces à l’échelle départementale). Courant 2021, la source des données de surface actuelle des territoires a évolué pour devenir le Registre Parcellaire Graphique, 2019.</p><p>Un retraitement de cette base de données a permis de prendre en compte uniquement les surfaces agricoles au sein des limites administratives des communes (si une parcelle est à cheval sur deux communes, le retraitement permettra d’allouer aux communes les surfaces localisées dans leur entité géographique respective).</p>",
      },
      {
        titreQuestion:
          "Différence de surfaces nécessaires pour une même conso en fonction de la localisation en Belgique ? Est-ce que PARCEL.WAL tient compte des spécificités de production locales (rendements) pour calculer les surfaces nécessaires ?",
        reponseQuestion:
          "<p>Non, il n’existe pas de données aussi précises de production à l’échelle communale. Pour une même population et consommation, les surfaces calculées restent donc identiques, quelle que soit la commune ou la localisation du territoire sélectionné.</p>",
      },
      {
        titreQuestion:
          "Les surfaces viticoles sont-elles prises en compte dans PARCEL.WAL dans les données de surfaces agricoles actuellement disponibles ?",
        reponseQuestion:
          "<p>Oui, les surfaces viticoles sont incluses dans les données de surfaces agricoles disponibles dans PARCEL.WAL.</p>",
      },
      {
        titreQuestion:
          "Où sont comptabilisées les surfaces de céréales nécessaires à l’alimentation animale ?",
        reponseQuestion:
          "<p>Les surfaces de céréales nécessaires à l’alimentation animale sont comptabilisées dans les surfaces « produits laitiers » et « viandes et œufs ». Les surfaces « céréales » concernent uniquement les cultures dédiées à l’alimentation humaine directe.</p>",
      },
      {
        titreQuestion:
          "Où sont comptabilisées les surfaces de cultures à destination des agro-carburants ?",
        reponseQuestion:
          "<p>Les surfaces d’oléagineux destinés aux agrocarburants sont comptabilisées dans la catégorie « Elevage » du fait des co-produits qui servent à l’alimentation des animaux d’élevage. Nous avons donc comptabilisé 100% de ces surfaces (choix méthodologique), car ces productions doivent être cultivées pour répondre aux demandes énergétiques animales et que l’exercice d’allocation de surface entre les utilisations énergétiques et en alimentation animale semble incertain (dépendant d’hypothèses trop fortes).</p>",
      },
      {
        titreQuestion:
          "La relocalisation de l’alimentation des animaux d’élevage est-elle prise en compte dans PARCEL.WAL ?",
        reponseQuestion:
          "<p>On peut distinguer 3 types de surfaces d’alimentation animale, en fonction de leur origine :</p><ul><li>Les surfaces d’alimentation présentes sur la ferme d’élevage : elles sont comptabilisées dans le résultat de PARCEL.WAL.</li><li>Les surfaces d’alimentation présentes sur d’autres territoires en Wallonie (maïs, tourteaux d’oléagineux…) et dont les productions sont utilisées pour les animaux d’élevage du territoire : elles sont également comptabilisées dans le résultat de PARCEL.WAL (on fait l’hypothèse que le territoire produit localement l’alimentation animale produite aujourd’hui dans d’autres départements) ;</li><li>Les surfaces d’alimentation importées d’autres pays (tourteaux de soja, …) : elles sont comptabilisées dans le résultat de PARCEL.WAL, en étant substituées par des productions de fourrage local. L’outil propose ainsi des simulations en relocalisant la part de l’alimentation animale actuellement importée.</li></ul><p>Cet état de fait transparait aussi dans l’indicateur d’impact écologique « déforestation importée ». La déforestation importée liée à l’alimentation est principalement liée à l’importation de soja d’Amérique du Sud pour l’alimentation animale.</p>",
      },
      {
        titreQuestion:
          "Quels rendements sont utilisés ? Rendements conventionnels vs rendements bio : quelles sources ?",
        reponseQuestion:
          "<p>Les données les plus fines disponibles concernant les rendements actuels de production sont au niveau régional; les enjeux de confidentialité des données ne permettent pas d’avoir des informations à des échelles plus précises. Pour lisser les éventuels écarts de rendement d’une année sur l’autre (liés notamment au climat), PARCEL.WAL utilise une moyenne des rendements sur 4 ans (2018-2022).</p><p>Concernant les rendements en bio, les données disponibles à date ne permettent pas d’appliquer la même méthode de calcul que pour l’agriculture conventionnelle. Ainsi, pour calculer les rendements en bio, PARCEL.WAL applique aux rendements conventionnels des coefficients d’ajustement, qui représentent le différentiel de rendement entre bio et conventionnel pour chaque produit. Pour obtenir ces coefficients d’ajustement, différentes sources ont été mobilisées (articles de recherche, bases de données et entretiens d’experts).</p><p>NB : Lors de l’interprétation des résultats, il faut avoir en tête que les données de production utilisées par PARCEL.WAL sont à l’échelle régionale : PARCEL.WAL n’est donc pas en mesure de tenir compte des spécificités à une échelle plus fine que la Région wallonne.</p>",
      },
      {
        titreQuestion:
          "Comment PARCEL.WAL prend-il en compte que plusieurs cultures peuvent être menées sur une même parcelle agricole au cours d’une année ?",
        reponseQuestion:
          "<p>Lors du calcul des surfaces nécessaires à la relocalisation de l’alimentation de la population d’un territoire donné, PARCEL.WAL mobilise 2 informations : les « surfaces développées » et « la surface d’utilisation du territoire ».</p><p>Les données de « surface d’utilisation du territoire » ont tendance à surestimer les besoins en terres cultivables car elles ne prennent pas en compte la possibilité de cultiver plusieurs produits alimentaires sur une même parcelle à différents moments de l’année.</p><p>Les données liées aux « surfaces développées », quant à elles, ont tendance à sous-estimer les besoins en terres cultivables car elles prennent en compte une utilisation intensive des terres agricoles pour cultiver plusieurs produits tout au long de l’année.</p><p>Lors de ses simulations, PARCEL.WAL combine ces 2 types de données. PARCEL.WAL utilise ainsi le « rendement corrigé de l’utilisation du territoire ». L’outil pondère les rendements agronomiques de manière à s’assurer que la somme des surfaces calculées pour chacun des 61 produits correspond exactement à la part du territoire mobilisée pendant une année pour leur production.</p>",
      },
      {
        titreQuestion:
          "Est-ce qu’il y a assez de surfaces en Wallonie pour passer toute notre alimentation en bio ?",
        reponseQuestion:
          "<p>Lorsque l’on fait une simulation pour la Wallonie d’une alimentation 100% relocalisée et 100% bio, on obtient une surface nécessaire d’environ 828 000 hectares. C’est plus que la SAU agricole actuelle (environ 737 000). En revanche, si l’on diminue de 25% la part de produits animaux, une alimentation 100% relocalisée et 100% bio nécessite environ 670 000 hectares.</p><p>Dans le cas d’une alimentation 100% bio et locale où la consommation de produits animaux est divisée par deux, ce sont environ 520 000 hectares qui sont nécessaires (toujours sur le périmètre de PARCEL.WAL et en conservant des échanges notamment sur les produits exotiques, etc.).</p><p>Il faut néanmoins souligner que PARCEL.WAL n’a pas pour ambition ni pour objectif d’être un outil d’expertise agronomique. Dans le scénario d’une production 100% en agriculture biologique, PARCEL.WAL n’assure pas de rebouclage des cycles de nutriments (azote, etc.), et ce pour plusieurs raisons :</p><ul><li>Les résultats de surface et d’assolement de PARCEL.WAL sont des variables de sorties, qui dépendent des données de consommation (variable d’entrée), et non l’inverse ;</li><li>Il existe différentes méthodes de rebouclage des cycles (ajustement des assolements, utilisation de la méthanisation, ajustement de la part de l’élevage, etc.). PARCEL.WAL ne modifiant pas les systèmes de production actuels, il ne permet pas de « construire » des rebouclages ;</li><li>Il n’y a pas de présupposé sur le fonctionnement en autonomie des territoires. Ainsi, sur la question du rebouclage des cycles d’azote, il peut être imaginé des échanges entre différents territoires, avec un développement variable de l’agriculture biologique, plus ou moins adaptés à l’élevage, etc.</li></ul><p>Différents travaux se sont penchés sur les rebouclages des cycles (TYFA au niveau de l’Europe par exemple). PARCEL.WAL a été pensé pour être complémentaire de ces exercices de scénarisation : l’outil permet d’illustrer les impacts des différents scénarios explorés par ces travaux.</p>",
      },
    ],
  },
  {
    titreCategorie: "Les questions sur… les emplois agricoles",
    questions: [
      {
        titreQuestion:
          "Quels emplois sont concernés par les simulations de PARCEL.WAL ? Emplois directs ou pas ?",
        reponseQuestion:
          "<p>PARCEL.WAL estime les emplois agricoles directs liés à la valorisation des surfaces nécessaires pour relocaliser l’alimentation. Ces emplois directs concernent les personnes qui travaillent sur les fermes dans des activités de production, qu’elles soient salariées ou non-salariées, saisonniers ou non.</p><p>Les emplois sont calculés en équivalent temps pleins (ETP), sur base des données de Statbel.</p><p>Les emplois annexes, qu’ils soient situés sur les fermes ou en dehors (transformation, logistique, distribution, conseil…), ne sont pas pris en compte dans les simulations de PARCEL.WAL.</p>",
      },
      {
        titreQuestion:
          "Est-ce que l’on pourrait mesurer les impacts sur l’emploi global (agro-alimentaire, logistique…)?",
        reponseQuestion:
          "<p>La comptabilisation des emplois annexes pourrait faire l’objet de futurs développements de PARCEL.</p>",
      },
      {
        titreQuestion:
          "Les données d’emplois de PARCEL.WAL sont-elles actualisées ?",
        reponseQuestion:
          "<p>Les valeurs sont mises à jour selon la mise à disposition de nouvelles données disponibles. Actuellement, PARCEL.WAL utilise les données du recensement agricole de 2010. Ces données seront actualisées sur la base des résultats du dernier recensement agricole datant de 2020, lorsqu’elles seront disponibles.</p>",
      },
      {
        titreQuestion:
          "Comment est estimé le nombre d’emplois nécessaire à la relocalisation de l’alimentation ?",
        reponseQuestion:
          "<p>Pour donner un ordre de grandeur du nombre d’emplois agricoles directs, PARCEL.WAL se base sur les chiffres de Statbel, et plus particulièrement sur le volume de travail total mobilisé par hectare, exprimé en Unité de Travail Annuel (UTA) par hectare pour chaque « production agricole », c’est-à-dire pour chaque orientation technique des exploitations (ou OTE).</p><p>Ce nombre d’UTA par hectare pour chaque production, qui sert de base pour faire les estimations, est appelé « coefficient d’emploi » dans PARCEL.WAL.</p><p>Afin d’assurer la cohérence des estimations de PARCEL.WAL à l’échelle « macro », un facteur de correction du coefficient d’emploi issu du Recensement Agricole est appliqué afin de vérifier que, lorsqu’on multiplie ce coefficient par les surfaces agricoles actuelles d’un territoire wallon (et notamment de la Région wallonne), on retombe bien sur l’emploi agricole total actuel de ce même territoire (tel que répertorié dans la statistique agricole).</p>",
      },
      {
        titreQuestion:
          "Quelle fiabilité des données sur l’emploi en Agriculture Biologique ?",
        reponseQuestion:
          "<p>Statbel fournit des données précises pour l’agriculture biologique, et ce sont celles qui sont utilisées. Bien que ce soient des moyennes qui ne reflètent pas les disparités de pratiques au sein de l’agriculture bio, ce sont des données fiables pour les ordres de grandeur que propose PARCEL.WAL.</p>",
      },
    ],
  },
  {
    titreCategorie: "Les questions sur… les impacts écologiques",
    questions: [
      {
        titreQuestion:
          "Quelles différences entre l’impact par hectare et l’impact par personne ?",
        reponseQuestion:
          "<p>PARCEL.WAL est un calculateur d’empreinte alimentaire qui évalue les impacts d’un changement de pratiques de consommation (part de bio, modification du régime alimentaire, réduction des pertes et gaspillage). Ainsi, ces impacts sont présentés sous forme de différence par rapport aux impacts de la production nécessaire pour couvrir les besoins alimentaires actuels, quel que soit le lieu de production.</p><p>Il ne s’agit donc pas d’une comparaison avec les impacts de l’activité agricole actuelle du territoire, qui peut ne pas être exclusivement destinée à l’alimentation de sa population.</p>",
      },
      {
        titreQuestion:
          "Pourquoi ne peut-on pas avoir une adaptation territoriale des impacts écologiques ?",
        reponseQuestion:
          "<p>PARCEL.WAL donne un ordre de grandeur moyen, en utilisant des références de différences moyennes d’impacts écologiques à l’échelle de la Wallonie. Ces différentiels d’impacts ne reflètent pas les contextes spécifiques à chaque territoire (pratiques agricoles, contextes environnementaux particuliers, etc.).</p><p>Le calcul des indicateurs écologiques se base sur l’état actuel de la recherche. Néanmoins, la territorialisation des impacts ne semble pas être envisageable à court terme tant les contextes sont hétérogènes. Des études plus approfondies, sur la base des connaissances des acteurs locaux et des données de terrain, peuvent être menées pour spécifier ces résultats.</p>",
      },
      {
        titreQuestion:
          "Pourquoi PARCEL.WAL n’indique pas d’impacts lors d’une relocalisation de l’alimentation actuelle (part de bio actuelle, régimes actuels, gaspillage actuel) ?",
        reponseQuestion:
          "<p>Seuls les impacts liés à une modification du régime alimentaire (augmentation des produits bio / diminution des produits animaux / réduction du gaspillage) sont comptabilisés dans PARCEL.WAL. En effet, l’état de la recherche actuelle ne permet pas d’objectiver de manière systématique les impacts d’une relocalisation de notre alimentation. Des travaux existent sur ces impacts mais ils tendent à démontrer que ces derniers sont très fortement dépendants des contextes locaux (circuits logistiques en particulier). Il n’y a cependant pas assez d’éléments objectivables pour refléter ces contextes dans l’outil PARCEL.WAL.</p><p>En particulier sur l’approche « foncière », calculer l’impact de la relocalisation implique de connaître la nature des terres qui seraient mobilisées pour relocaliser l’agriculture. Ainsi, si la relocalisation implique de mobiliser des terres agricoles supplémentaires sur un territoire donné, l’impact de la relocalisation sera très différent si ces terres supplémentaires sont actuellement occupées par une forêt ou au contraire par du tissu urbain.</p>",
      },
      {
        titreQuestion:
          "Pourquoi PARCEL.WAL n’indique pas d’impacts sur la consommation d’eau d’un passage en bio ?",
        reponseQuestion:
          "<p>PARCEL.WAL n’indique pas ces impacts par manque de données consolidées sur l’impact du bio sur la consommation d’eau. En revanche, PARCEL.WAL indique l’impact du changement de la part de produits animaux sur la consommation en eau.</p><p>Sauf exception, les impacts sur la consommation d’eau de la diminution des produits animaux sont les suivants :</p><ul><li>La consommation par hectare a tendance à augmenter, du fait que les productions d’élevage (peu consommatrices en eau lorsqu’on les ramène à l’unité de surface) sont remplacées par des productions végétales (dont certaines sont plus consommatrices en eau par unité de surface) ;</li><li>La consommation par personne a tendance à diminuer car on réduit significativement le nombre d’hectares nécessaires.</li></ul>",
      },
      {
        titreQuestion:
          "Pourquoi une diminution de la consommation des produits animaux augmente-t-elle parfois les émissions de GES par hectare (à taux de bio égal) ?",
        reponseQuestion:
          "<p>Ce résultat est lié au fait que, par hectare, les produits animaux ne sont pas forcément plus impactants que les produits végétaux (avec de grandes disparités entre produits). La raison principale est la grande empreinte spatiale de l’élevage (prairies, et cultures) qui dilue beaucoup l’impact GES de l’élevage par hectare. En revanche, si on regarde l’impact par personne, l’effet de la diminution des produits animaux est très net.</p>",
      },
      {
        titreQuestion:
          "Quel est l’impact en termes de GES de l’augmentation de la part de bio dans la consommation ?",
        reponseQuestion:
          "<p>Le passage au bio permet de réduire les émissions de GES par hectare. Avec des différences selon les produits. Par exemple, sur une simulation pour la France entière, si on passe 100% d’une production en bio (sans toucher aux autres paramètres), on observe les impacts suivants :</p><ul><li>En passant 100% de l’élevage français en bio, on diminue de 52% les émissions de GES par ha</li><li>En passant 100% des grandes cultures en bio, on diminue de 7% les émissions de GES par ha</li><li>En passant 100% des légumes en bio, on augmente de 1% les émissions de GES par ha</li></ul><p>En réalité, ce résultat est lié au fait que l’impact par hectare est calculé sur un hectare moyen permettant de répondre à la demande alimentaire du territoire (et pas sur un ha de la culture considérée). Lorsqu’on passe 100% de l’élevage français en bio, le passage en bio concerne 93% de l’hectare moyen... etc.</p><p>De manière générale, le passage au bio permet une réduction des émissions par hectare de terre agricole.</p>",
      },
      {
        titreQuestion:
          "Pourquoi dans certains territoires, une diminution de la part des produits animaux augmente-t-elle la consommation d’eau par personne ?",
        reponseQuestion:
          "<p>Ce résultat est lié à des situations spécifiques où les rendements en productions animales sont très importants (par exemple, en Ille-et-Vilaine). Cette forte productivité implique une différence moindre en termes d’empreinte spatiale entre l’élevage et les productions végétales. Or c’est la différence d’empreinte spatiale entre l’élevage et les productions végétales qui explique qu’un régime avec moins de produits animaux est moins consommateur d’eau par personne.</p>",
      },
    ],
  },
];
