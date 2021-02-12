<template>
  <main class="main">
    <h1>Rockstar</h1>
    <p>
      This webapp built only for demo purposes. You can use wherever you want.
      However, you can NOT claim that the design belogs to you.
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
