<template>
  <nav class="navbar">
    <div class="navbar__left">
      <router-link tag="a" to="/">
        <PersonalLogo class="navbar__logo" />
      </router-link>
      <router-link tag="a" to="/">
        Homepage
      </router-link>
    </div>
    <div class="navbar__right">
      <a href="#" class="navbar__homepage">Homepage</a>
      <a href="#" class="navbar__contact">Contact</a>
      <button class="navbar__localization">
        <IconWorld />
        <span class="navbar__local-text">TR</span>
      </button>
      <button class="navbar__login">Login</button>
    </div>
  </nav>
</template>

<script>
import PersonalLogo from "@/assets/PersonalLogo.svg";
import IconWorld from "@/assets/IconWorld.svg";

export default {
  name: "LayoutNavigation",
  components: {
    PersonalLogo,
    IconWorld
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 6rem;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__left {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      padding: 0 2rem;
    }
  }

  &__login {
    background-color: transparent;
    border: none;
    border-radius: $size-border-radius;
    background-color: $color-secondary;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
  }

  &__localization {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    color: $color-secondary;
    cursor: pointer;
  }

  &__local-text {
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
}
</style>
