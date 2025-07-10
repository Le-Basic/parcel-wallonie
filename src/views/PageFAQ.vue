<template>
  <MenuSimple></MenuSimple>
  <h1>Tutoriels et FAQ</h1>
  <div class="ss-titre-page">
    Retrouvez les réponses à vos questions les plus fréquemment posées.
    <div>
      <a href="#more" class=""
        >Si vous ne trouvez pas la réponse à votre question, vous pouvez-nous la
        poser directement.</a
      >
    </div>
  </div>
  <div class="container">
    <div>
      <h2 class="titre-categorie">Vidéos tutoriel</h2>
      <div class="tutorial-grid">
        <div>
          <div class="title-question">Réaliser un diagnostic</div>
          <iframe
            class="video-tutorial"
            src="https://www.youtube.com/embed/ELqrMOXazk0?si=7hoIblpyRCLXLHqc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            width="100%"
            height="auto"
          ></iframe>
        </div>
        <div>
          <div class="title-question">Paramétrer une simulation</div>
          <iframe
            class="video-tutorial"
            src="https://www.youtube.com/embed/kZnpGiid-6g?si=WCFlKWjVo2-47L8l"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div class="title-question">Interpréter les résultats</div>
          <iframe
            class="video-tutorial"
            src="https://www.youtube.com/embed/JtAohTx0SyY?si=O61UV6UrEARlwAG8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div class="title-question">Valoriser une surfce donnée</div>
          <iframe
            class="video-tutorial"
            src="https://www.youtube.com/embed/FFvd1x3lLC4?si=SY2RVXGhv3LXXRFv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div
      class="question-categorie"
      v-for="categorie in FAQ_CONTENT"
      :key="categorie.titreCategorie"
    >
      <p class="titre-categorie">
        {{ categorie.titreCategorie }}
      </p>
      <div class="question">
        <FAQQuestion
          v-for="question in categorie.questions"
          :key="question.titreQuestion"
        >
          <template v-slot:titreQuestion>
            {{ question.titreQuestion }}
          </template>
          <template v-slot:reponseQuestion>
            <p v-html="question.reponseQuestion"></p>
          </template>
        </FAQQuestion>
      </div>
    </div>
  </div>
  <div id="more" class="section-home container-fluid section-vert">
    <div class="container mx-auto">
      <div class="title">
        Où chercher pour trouver la réponse à une question que l'on se pose sur
        PARCEL-Wallonie ?
      </div>

      <p>
        Un certain nombre d'outils sont disponibles sur PARCEL-Wallonie pour
        répondre à diverses interrogations. Tout d'abord la
        <a
          href="/BASIC_Parcel Wallonie Fiche Méthodologique.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >Note méthodologique</a
        >
      </p>
      <p>
        Pour chaque résultat de sa simulation, PARCEL-Wallonie fournit des
        informations supplémentaires (sur la méthode, le domaine de validité,
        etc.) afin d'aider l'utilisateur à mieux comprendre ces résultats. Ces
        informations supplémentaires sont accessibles en cliquant sur les
        chevrons à côté des résultats.
      </p>
      <p>
        Pour les surfaces, c'est en cliquant sur ce chevron qu'on accède au
        détail par produit mentionné ci-dessus.
      </p>
      <p>
        Si toutefois vous ne trouvez pas la réponse à votre question, vous
        pouvez nous écrire à l'adresse email suivante :
        <span class="font-weight-bold">contact@parcel-wallonie.be</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import FAQQuestion from "@/components/FAQ/FAQQuestion.vue";
import MenuSimple from "@/components/Menu/MenuSimple.vue";
import { FAQ_CONTENT } from "@/content/faq_content.js";

console.log(FAQ_CONTENT);
</script>

<style scoped>
h1 {
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 61px;
  color: #91c423;
  letter-spacing: 0;
  text-align: center;
  line-height: 1.2em;
  margin-bottom: 30px;
}
.title-question {
  font-weight: 500;
  font-size: 19px;
  color: var(--bleu);
  line-height: 1.2;
  padding-left: 8px;
  margin-top: 0.5rem;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--vert);
  text-align: left;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.titre-categorie {
  font-weight: 300;
  font-size: 36px;
  color: #015a5a;
  line-height: 1.2;
  border-bottom: 1px dashed #015a5a;
  padding: 4rem 0 1rem 0;
  margin: 3rem 0px 3rem;
}

.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}

.video-tutorial {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
}

.question {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.ss-titre-page {
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #4a4a4a;
  letter-spacing: 0;
  line-height: 1.3em;
}
</style>
