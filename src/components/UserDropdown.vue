<template>
  <section class="dropdown">
    <span class="dropdown__email">{{ userInfo.email }}</span>
    <button class="dropdown__logout" @click="onLogout">Logout</button>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserDropdown",
  props: {
    userInfo: Object
  },
  methods: {
    ...mapActions("user", ["logout"]),
    onLogout() {
      this.logout();
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: absolute;
  margin-left: -6rem;
  height: 10rem;
  width: 25rem;
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  color: $color-black;

  &__logout {
    height: 4rem;
    margin-left: 10%;
    margin-top: 1rem;
    width: 80%;
    background-color: $color-black;
    border: 1px solid $color-secondary;
    color: $color-secondary;
    font-size: 1.6rem;
    cursor: pointer;
  }
}
</style>
