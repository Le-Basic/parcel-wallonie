<template>
  <div class="asy-wrapper">
    <div class="content">
      <a
        href="javascript:history.go(-1)"
        aria-label="Close"
        class="close"
        style="font-size: 40px; margin: 50px 50px 0 0"
      >
        <span class="sr-only">Fermer</span>
        <span class="icon-ico_fermer icon" style="font-size: 40px"></span>
      </a>
      <div class="section centrervh" id="recommencer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 d-flex flex-column mb-4">
              <h1 class="animated fadeInUp faster mb-5">
                Modifiez votre recherche
              </h1>
              <div
                class="mt-auto mb-auto choix-pop animated fadeInUp delay-05s faster align-items-center"
              >
                <div class="col-12 ml-auto mr-auto">
                  <router-link to="/2-choix-de-la-population"
                    ><button
                      type="button"
                      class="btn btn-big-light btn-recommencer"
                    >
                      <span
                        class="icon-ico_navigation_population ico-medium"
                      ></span
                      ><span>choisir une nouvelle population</span>
                    </button></router-link
                  >
                </div>
                <div class="col-12 ml-auto mr-auto">
                  <router-link
                    to="/1-choix-du-territoire"
                    onclick="localStorage.clear();"
                    ><button
                      type="button"
                      class="btn btn-big-light btn-recommencer"
                    >
                      <span
                        class="icon-ico_navigation_parcours ico-medium"
                      ></span
                      ><span>recommencer</span>
                    </button></router-link
                  >
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-12 col-sm-8 choix-alim ml-auto mr-auto">
              <h1 class="animated fadeInUp mb-1">Changez de parcours</h1>

              <div class="col-12 animated fadeInUp delay-05s">
                <div class="text-center">
                  <div class="bloc-parcours">
                    <router-link
                      to="/1-relocaliser-une-surface-disponible"
                      onclick="localStorage.clear();"
                      ><img
                        alt="parcours"
                        src="../assets/img/parcours/parcours2.svg"
                        width="100%"
                        height="auto"
                    /></router-link>
                  </div>
                  <div class="sous-titre-parcours">
                    Combien de personnes peut-on nourrir avec une parcelle ou un
                    terrain donné ?
                  </div>
                  <router-link
                    to="/1-relocaliser-une-surface-disponible"
                    onclick="localStorage.clear();"
                    ><button type="button" class="btn btn-principal mt-5">
                      Commencer
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade modal-simple"
    id="modal-population-groupe"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span class="icon-ico_navigation_population icon vert-clair"></span>
          </div>
          <div class="">
            <div class="titre-categorie">
              Définissez votre groupe de personne
            </div>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="icon-ico_fermer icon"></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="bloc">
            <span class="nombres-ajout"
              ><a href="#secondPage"><button class="btn-moins">-</button></a
              ><span class="nombre">2</span
              ><a href="#secondPage"
                ><button class="btn-plus">+</button></a
              ></span
            ><span>Enfants (0-17 ans)</span>
          </div>
          <div class="bloc">
            <span class="nombres-ajout"
              ><a href="#secondPage"><button class="btn-moins">-</button></a
              ><span class="nombre">2</span
              ><a href="#secondPage"
                ><button class="btn-plus">+</button></a
              ></span
            ><span>Adultes (18-64 ans) </span>
          </div>
          <div class="bloc">
            <span class="nombres-ajout"
              ><a href="#secondPage"><button class="btn-moins">-</button></a
              ><span class="nombre">1</span
              ><a href="#secondPage"
                ><button class="btn-plus">+</button></a
              ></span
            ><span>Personnes âgées (65+ ans)</span>
          </div>
          <a href="#"
            ><button type="button" class="btn btn-principal">Valider</button></a
          >
        </div>
      </div>
      <!-- modal body-->
    </div>
    <!-- modal-content -->
  </div>
  <!-- modal-dialog -->
</template>
