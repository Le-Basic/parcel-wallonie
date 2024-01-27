<template>
  <!-- <?php $menu = 'menu2-resultats';
  $page = 'cultures';
  $affiner = 'false';
  ?> -->

  <div class="asy-wrapper">
    <div class="content">
      <!-- <?php include '../partials/nav2.php'; ?> -->
      <div
        id="section0"
        class="section centrervh"
      >
        <div class="container">
          <h1 class="animated fadeInUp fast mb-2">
            <span id="choixsurface">100</span> <span id="typesurface">hectares</span><!-- à <br><span id="nomvilleter">- </span>--> ainsi répartis
          </h1>
          <!-- <div class="mb-5"> <?php include '../partials/resum-result2.php'; ?></div> -->
          <div class="cadre-graphique">
            <div class="resultats-categories repartition">
              <table
                id="CategoryresultsTable"
                summary="Resultats"
                class="auto-style1 w-100"
                border="1"
              >
                <thead />
                <tbody>
                  <tr style="display:none;">
                    <td class="auto-style12">
&nbsp;
                    </td>
                    <td class="auto-style14">
&nbsp;
                    </td>
                    <td class="auto-style14">
&nbsp;
                    </td>
                    <td class="auto-style14">
&nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="resultats-categories repartition graph"
              style="background-color:#fff;height:100%;margin-top:20px;min-height:400px;"
            >
              <div id="viz" />
            </div>
          </div>
          <div class="cadre-resultat d-flex animated fadeInUp delay-1s besoins-alim">
            <div class="text-left legende">
              répondent aux besoins alimentaires complets de
            </div>
            <div class="ml-auto nbr-affiche">
              <div
                id="couvertstotal"
                class="nbr-ha"
              >
                -
              </div>
              <div class="hectares">
                personnes
              </div>
            </div>
          </div>
          <div class="mb-big div-continuer animated fadeInUp delay-1-5s">
            <a href="/composition-des-assiettes-relocalisees"><button
              type="button"
              class="btn btn-principal"
            >Changer la répartition</button></a>
          </div>
        </div>
      </div>
    </div>

    <nav
      id="asy-sidebar"
      class=""
    >
      <!-- <?php include '../partials/menu-affiner-2modales.php'; ?> -->
    </nav>
  </div>
  <div
    id="modal-legumes"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div><span class="icon-ico_CATEGORIES_legumes icon legumes" /></div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">
              Légumes
            </div>
            <div class="hectares" />
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="icon-ico_fermer icon" />
          </button>
        </div>
        <div class="modal-body">
          <div
            id="accordeon-fiche"
            class="accordeon-detail legumes-fonce"
          >
            <!-- <?php include '../partials/modal-detail-legume.php'; ?> -->

            <div class="card">
              <div
                id="heading2"
                class="card-header "
              >
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white" /> Détail par produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"><strong>en pourcentage de surfaces cultivées</strong></span>
                  <div class="list-produits">
                    <table
                      id="ProductresultsTable1"
                      summary="Resultats"
                      class="auto-style1 w-100"
                    >
                      <tbody>
                        <tr style="display:none;">
                          <td class="auto-style15">
&nbsp;
                          </td>
                          <td class="auto-style12">
&nbsp;
                          </td>
                          <td class="auto-style14">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="modal-fruits"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div><span class="icon-ico_CATEGORIES_fruits icon fruits" /></div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">
              Fruits
            </div>
            <div class="hectares" />
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="icon-ico_fermer icon" />
          </button>
        </div>
        <div class="modal-body">
          <div
            id="accordeon-fiche"
            class="accordeon-detail fruits-fonce"
          >
            <!-- <?php include '../partials/modal-detail-fruits.php'; ?> -->

            <div class="card">
              <div
                id="heading2"
                class="card-header "
              >
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white" /> Détail par produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"><strong>en pourcentage de surfaces cultivées</strong></span>
                  <div class="list-produits">
                    <table
                      id="ProductresultsTable2"
                      summary="Resultats"
                      class="auto-style1 w-100"
                    >
                      <tbody>
                        <tr style="display:none;">
                          <td class="auto-style15">
&nbsp;
                          </td>
                          <td class="auto-style12">
&nbsp;
                          </td>
                          <td class="auto-style14">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="modal-cereales"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div><span class="icon-ico_CATEGORIES_cereales icon cereales" /></div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">
              Céréales et autres cultures
            </div>
            <div class="hectares">
              Consommés directement (pain, lentilles, huiles, etc.)
            </div>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="icon-ico_fermer icon" />
          </button>
        </div>
        <div class="modal-body">
          <div
            id="accordeon-fiche"
            class="accordeon-detail cereales-fonce"
          >
            <!-- <?php include '../partials/modal-detail-cereales.php'; ?> -->
            <div class="card">
              <div
                id="heading2"
                class="card-header "
              >
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white" /> Détail par produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"><strong>en pourcentage de surfaces cultivées</strong></span>
                  <div class="list-produits">
                    <table
                      id="ProductresultsTable3"
                      summary="Resultats"
                      class="auto-style1 w-100"
                    >
                      <tbody>
                        <tr style="display:none;">
                          <td class="auto-style15">
&nbsp;
                          </td>
                          <td class="auto-style12">
&nbsp;
                          </td>
                          <td class="auto-style14">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="modal-viande"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div><span class="icon-ico_CATEGORIES_viande icon viande" /></div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">
              Elevage
            </div>
            <div class="hectares">
              Intègre l'ensemble des surfaces de cultures destinées à l’alimentation de l’élevage (prairies, céréales, tourteaux, etc.)
            </div>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="icon-ico_fermer icon" />
          </button>
        </div>
        <div class="modal-body">
          <div
            id="accordeon-fiche"
            class="accordeon-detail viande-fonce"
          >
            <!-- <?php include '../partials/modal-detail-viande.php'; ?> -->

            <div class="card">
              <div
                id="heading2"
                class="card-header "
              >
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white" /> Détail par produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"><strong>en pourcentage de surfaces cultivées</strong></span>
                  <div class="list-produits">
                    <table
                      id="ProductresultsTable4"
                      summary="Resultats"
                      class="auto-style1 w-100"
                    >
                      <tbody>
                        <tr style="display:none;">
                          <td class="auto-style15">
&nbsp;
                          </td>
                          <td class="auto-style12">
&nbsp;
                          </td>
                          <td class="auto-style14">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                          <td class="auto-style8">
&nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr>En plus de ces surfaces à mobiliser, ces productions animales nécessitent environ <span id="surfaceimport" /> hectares de surfaces importées (tourteaux etc.)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
