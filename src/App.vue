<template>
  <div class="wrapper" :class="{ 'lighten-bg': isModalOpen }">
    <div class="container">
      <LayoutNavigation
        @modal-open="openModal"
        :isModalClosed="isModalOpen"
        :class="{ 'disable-navigation': isModalOpen }"
      />
      <router-view></router-view>
      <LayoutFooter />
      <LoginModal @close-modal="closeModal" v-if="isModalOpen" />
    </div>
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation";
import LayoutFooter from "@/components/LayoutFooter";
import LoginModal from "@/components/LoginModal";

export default {
  name: "App",
  components: {
    LayoutNavigation,
    LayoutFooter,
    LoginModal
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal(modalVal) {
      this.isModalOpen = modalVal;
    },
    closeModal() {
      this.isModalOpen = false;
    }
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

.lighten-bg {
  background-color: $color-dark-gray;
}

.disable-navigation {
  pointer-events: none;
}
</style>
