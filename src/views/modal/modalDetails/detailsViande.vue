<template>
  <detailsTemplate
    modalTitre="Viande"
    icone="icon-ico_CATEGORIES_viande"
    iconeClasse="viande"
    classeCouleurFond="fond-viande"
    :proportionImportation="CHIFFRES_DIAGNOSTICS.ELEVAGE.importation"
    :proportionAssiette="CHIFFRES_DIAGNOSTICS.ELEVAGE.consommation"
    :proportionSurface="CHIFFRES_DIAGNOSTICS.ELEVAGE.production"
  >
    <template #domainedevalidite>
      <ul>
        <li>
          La donnée de surface donne un ordre de grandeur
          <strong
            >des hectares de terres agricoles qu’il faudrait mobiliser pour
            satisfaire la consommation en produits de l’élevage</strong
          >, compte tenu des paramètres choisis par l’utilisateur (%
          relocalisation, % bio, assiette).
        </li>
        <li>
          Dans le cas de l’élevage, ces surfaces correspondent à l’alimentation
          des animaux d’élevage, soit :
          <ul>
            ­
            <li>Des surfaces de prairies ;</li>
            ­
            <li>Des surfaces de céréales et autres grandes cultures :</li>
            <ul>
              <li>
                Les animaux d’élevage consomment les co-produits ou
                sous-produits de certaines cultures et notamment des filières
                oléagineuses. Par exemple, lors des étapes de trituration des
                graines oléagineuses, une partie solide et riche en protéines
                est formée : les tourteaux, qui sont valorisés en alimentation
                animale.
              </li>
              <li>
                Au sein de PARCEL, les surfaces d’oléagineux destinées à la
                production d’huiles pour la consommation humaine sont
                comptabilisées dans la catégorie « Céréales et autres cultures
                ». Les surfaces d’oléagineux destinées aux agrocarburants sont
                comptabilisées dans la catégorie « Élevage » du fait des
                co-produits ou sous-produits qui servent à l’alimentation des
                animaux d’élevage.
              </li>
            </ul>
          </ul>
        </li>
        <li>
          Actuellement en Région wallonne, la production d’alimentation pour les
          animaux se répartit environ entre 37% de prairies et 63% de cultures.
        </li>
        <li>
          Au sein des systèmes d’élevage, une partie de l’alimentation provient
          d’importations, particulièrement de tourteaux de soja. Les surfaces
          correspondant à la part de l’alimentation qui est importée
          apparaissent dans le niveau de détails par produits. PARCEL utilise
          les références de production de la statistique agricole annuelle et ne
          modifie pas le fonctionnement technique des systèmes qui y sont
          décrits. Ainsi, PARCEL ne relocalise pas la part de l’alimentation des
          animaux qui est actuellement importée, (ce qui pourrait être proposé
          dans une version ultérieure).
        </li>
        <li>
          <strong
            >Les produits pris en compte par PARCEL représentent environ 91% de
            notre alimentation (en volume)</strong
          >. Ce sont les produits recensés par la Statistique Agricole Annuelle
          d’Agreste. PARCEL ne prend pas en compte : ­
          <ul>
            <li>
              Les produits qui ne possèdent pas de potentiel de production en
              Région wallonne (café, cacao, fruits exotiques etc.) ;
            </li>
            ­
            <li>
              Les boissons (bières, vins etc.) qui pourraient être intégrées
              dans une prochaine version ;
            </li>
            ­
            <li>
              Les produits de la mer (difficulté de donner un indicateur
              d’empreinte spatiale) ;
            </li>
          </ul>
        </li>
      </ul>
    </template>
    <template #pointsmethode>
      <ul>
        <li>
          On calcul la surface nécessaire pour produire 1 kg d’un certain
          produit animal. Pour ce faire, on identifie les surfaces actuellement
          mobilisées pour les productions d’élevage wallonnes (prairies,
          cultures fourragères, céréales etc.). Ces surfaces sont ensuite
          réparties entre les différentes espèces d’animaux selon leur besoin.
        </li>
        <li>
          Pour calculer ces surfaces, en se basant sur les données de
          consommation, PARCEL utilise un coefficient, appelé « rendement
          corrigé de l’utilisation du territoire ». Les rendements agronomiques
          ne peuvent pas être directement utilisés pour réaliser ces calculs car
          ils sont rattachés à des produits particuliers (tomates par exemple)
          et pourraient ainsi mener à des doubles comptages. En effet, les
          surfaces mobilisées pour une production donnée (par exemple les
          tomates de saison) peuvent être utilisées pendant le reste de l’année
          pour d’autres productions (pois, salades…).
        </li>
        <li>
          Pour éviter ce biais, PARCEL calcule le nombre total d’hectares
          nécessaires en termes d’utilisation du territoire, ces hectares
          pouvant être le support de différentes productions d’une même
          catégorie (légumes, fruits, céréales…) selon les saisons (par exemple
          tomates, pois…).
        </li>
        <li>
          Pour ce faire, les rendements agronomiques sont pondérés de manière à
          s’assurer que la somme des surfaces calculées pour chacun des 61
          produits correspond exactement à la part du territoire mobilisée
          pendant une année pour leur production. Ces rendements pondérés
          correspondent aux « rendements corrigés de l’utilisation du territoire
          ».
        </li>
        <li>
          Ces rendements sont calculés sur des moyennes de 3 ans (les trois
          dernières années disponibles pour l’ensemble des données utilisées,
          soit la période 2014-2016 pour la version 2019 de PARCEL). Des mises à
          jour auront lieu fréquemment pour mettre à jour ces moyennes sur la
          base des dernières données disponibles
        </li>
        <li>
          On divise la donnée de consommation (différente selon le régime
          choisi) par le rendement corrigé de l’utilisation du territoire, pour
          obtenir la surface agricole à mobiliser par produit.
        </li>
        <li>
          Pour l’agriculture biologique, un différentiel de rendement a été
          calculé, principalement à partir de fiches techniques régionales.
        </li>
        <li>
          Pour plus d’éléments sur la méthode de calcul, se référer à la
          <a href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
            >page annexe méthodologique</a
          >, accessible par le menu principal.
        </li>
      </ul>
    </template>
    <template #sourcesdedonnees>
      <ul>
        <li>
          <div class="h1-liste">Production et surface</div>
          <ul>
            <li>
              ­<span class="source-titre"
                ><a
                  href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures"
                  >Chiffres Agricoles</a
                > </span
              ><span class="source-auteur"> – Statbel</span
              ><span class="source-année"></span>
              <div>
                <a
                  class=""
                  href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures"
                  >Voir la page de statistiques</a
                >
              </div>
            </li>
            <li>
              ­<span class="source-titre"
                >Crop production in EU standard humidity</span
              ><span class="source-auteur"> – Eurostat</span>
              <div>
                <a
                  class=""
                  href="https://ec.europa.eu/eurostat/web/agriculture/database"
                  >Voir l'enquête</a
                >
              </div>
            </li>
            <li>
              ­<span class="source-titre">Etudes filières</span
              ><span class="source-auteur"> – Sytra</span>
              <div>
                <a
                  class=""
                  href="https://ec.europa.eu/eurostat/web/agriculture/database"
                  >Voir l'enquête</a
                >
              </div>
            </li>
            <li>
              ­<span class="source-titre"
                >Rapport sur l'Industrie Laitière Belge en 2024</span
              ><span class="source-auteur"> – Collège des producteurs</span>
              <div>
                <a
                  class=""
                  href="https://collegedesproducteurs.be/filiere/bovins-laitiers/2024/industrie-laitiere-belge-en-2024-enjeux-et-perspectives-economiques-selon-le-memorandum-de-la-cbl/#:~:text=La%20CBL%20(Conf%C3%A9d%C3%A9ration%20Belge%20de,de%20l'industrie%20alimentaire%20belge."
                  >Lire l'étude</a
                >
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="h1-liste">Consommation</div>
          <ul>
            <li>
              ­<span class="source-titre">Recensement de la population</span
              ><span class="source-auteur"> – Statbel </span
              ><span class="source-année"></span>
              <div>
                <a
                  class=""
                  href="https://statbel.fgov.be/fr/propos-de-statbel/que-faisons-nous/recensement-census"
                  >Voir le site de Statbel</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre"
                >Enquête de consommation alimentaire</span
              ><span class="source-auteur">
                - Institut Scientifique de Santé Publique</span
              >
              <div>
                <a
                  class=""
                  href="https://www.sciensano.be/fr/biblio/enquete-de-consommation-alimentaire-2014-2015-partie-4-consommation-alimentaire"
                  >Voir l'enquête</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre"
                >Bilan d'Approvisionnement Céréales</span
              ><span class="source-auteur"> - Collège des Producteurs</span>
              <div>
                <a
                  class=""
                  href="https://goodfood.brussels/sites/default/files/inline-files/Filière%20céréales.pdf"
                  >Voir la présentation</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre"
                >­Étude individuelle nationale des consommations alimentaires 3
                (INCA 3)</span
              ><span class="source-auteur"> - ANSES</span
              ><span class="source-année"> - 2017</span>
              <div>
                <a
                  class=""
                  href="https://www.anses.fr/fr/system/files/NUT2014SA0234Ra.pdf"
                  >Voir l'étude</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre">Bilan d'Approvisionnement Viande</span
              ><span class="source-auteur"> - Statbel</span
              ><span class="source-année"> - 2023</span>
              <div>
                <a
                  class=""
                  href="https://statbel.fgov.be/fr/themes/agriculture-peche/bilans-dapprovisionnement"
                  >Voir l'étude</a
                >
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="h1-liste">Agriculture Biologique</div>
          <ul>
            <li>
              ­<span class="source-titre">­­Fiches techniques régionales</span>
            </li>
            <li>­<span class="source-titre">­Entretiens d’experts</span></li>
          </ul>
        </li>
      </ul>
    </template>
  </detailsTemplate>
</template>

<script setup>
import detailsTemplate from "@/views/modal/modalDetails/detailsTemplate.vue";
import { CHIFFRES_DIAGNOSTICS } from "@/assets/data/chiffresCles";
</script>
