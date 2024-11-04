<template>
  <div class="container">
    <img
      alt="logo"
      :src="require('@/assets/img/logos/logoPARCELWAL_vert.png')"
      width="500"
      height="auto"
    />
    <h1>
      Parcel.Wal est en cours de finalisation. Le site sera disponible très
      prochainement
    </h1>
    <h2>
      Pour être tenu.e.s informé.e.s, vous pouvez vous inscrire sur
      <a href="https://sytra.be/fr/abonnement-newsletter/"
        >la newsletter de Sytra</a
      >
    </h2>
  </div>
</template>

<style scoped>
.container {
  color: var(--bleu);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  font-family: "Work Sans", sans-serif;
  border-top: 10px solid var(--vert);
}

h1 {
  color: var(--bleu);
  font-weight: 500;
}

h2 {
  color: var(--bleu);
  font-size: 1.5rem;
  max-width: 700px;
}

a {
  color: var(--bleu);
  text-decoration: underline;
}
</style>
