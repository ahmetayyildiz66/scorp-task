<template>
  <footer class="footer">&copy; {{ $t("footer") }}</footer>
</template>

<script>
export default {
  name: "LayoutFooter"
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  top: 95%;
  left: calc(50% - 20rem);

  @include respond(phone) {
    top: 88%;
    padding: 0 4rem;
    text-align: center;
  }
}
</style>
