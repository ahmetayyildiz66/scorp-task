<template>
  <main class="main">
    <h1>Spartacus</h1>
    <p>
      {{ $t("dummyMessage") }}
    </p>
  </main>
</template>

<script>
export default {
  name: "Homepage"
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 10rem;

  @include respond(phone) {
    margin-top: 5rem;
  }
}
</style>
