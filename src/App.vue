<template>
  <div class="wrapper">
    <div class="container">
      <LayoutNavigation />
      <router-view></router-view>
      <LayoutFooter />
    </div>
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation";
import LayoutFooter from "@/components/LayoutFooter";

export default {
  name: "App",
  components: {
    LayoutNavigation,
    LayoutFooter
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.wrapper {
  width: 85%;
  margin: 0 auto;
  background-color: $color-primary;
}

.container {
  width: 83%;
  margin: 0 auto;
  height: 100vh;

  @include respond(phone) {
    width: 93%;
  }
}
</style>
