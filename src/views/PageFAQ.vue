<template>
  <MenuSimple></MenuSimple>
  <h1>FAQ</h1>
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
        PARCEL?
      </div>

      <p>
        Un certain nombre d'outils sont disponibles sur PARCEL pour répondre à
        diverses interrogations. Tout d'abord la
        <a
          href="https://bck.parcel-app.org/storage/app/uploads/public/633/407/dd3/633407dd356ea638253814.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >Note méthodologique</a
        >
      </p>
      <p>
        Pour chaque résultat de sa simulation, PARCEL fournit des informations
        supplémentaires (sur la méthode, le domaine de validité, etc.) afin
        d'aider l'utilisateur à mieux comprendre ces résultats. Ces informations
        supplémentaires sont accessibles en cliquant sur les chevrons à côté des
        résultats.
      </p>
      <p>
        Pour les surfaces, c'est en cliquant sur ce chevron qu'on accède au
        détail par produit mentionné ci-dessus.
      </p>
      <p>
        Si toutefois vous ne trouvez pas la réponse à votre question, vous
        pouvez nous écrire à l'adresse email suivante :
        <span class="font-weight-bold">contact@parcel-app.org</span>
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
.titre-categorie {
  font-weight: 300;
  font-size: 36px;
  color: #015a5a;
  line-height: 1.2;
  border-bottom: 1px dashed #015a5a;
  padding: 4rem 0 1rem 0;
  margin: 3rem 0px 3rem;
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
