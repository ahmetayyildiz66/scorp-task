<template>
  <footer class="footer">
    &copy; 2021 This basic web app was built only for Scorp
  </footer>
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
  }
}
</style>
