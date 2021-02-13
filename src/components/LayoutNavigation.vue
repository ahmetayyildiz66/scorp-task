<template>
  <nav class="navbar">
    <div class="navbar__left">
      <router-link tag="a" to="/" exact>
        <PersonalLogo class="navbar__logo" />
      </router-link>
      <router-link tag="a" to="/">
        {{ $route.name }}
      </router-link>
    </div>
    <button class="navbar__hamburger" @click="onRightIcon">
      <IconHamburger v-if="isHamburgerActive" />
      <IconCross class="navbar__cross" v-else />
    </button>
    <div class="navbar__right">
      <a href="#" class="navbar__homepage">Homepage</a>
      <router-link tag="a" to="/contact" class="navbar__contact"
        >Contact</router-link
      >
      <button class="navbar__localization" @click="onLanguageChange">
        <IconWorld />
        <span class="navbar__local-text">{{ $t("language") }}</span>
      </button>
      <button class="navbar__login" v-if="!userLoggedIn" @click="onLoginButton">
        Login
      </button>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PersonalLogo from "@/assets/PersonalLogo.svg";
import IconWorld from "@/assets/IconWorld.svg";
import IconHamburger from "@/assets/IconHamburger.svg";
import IconCross from "@/assets/IconCross.svg";

export default {
  name: "LayoutNavigation",
  components: {
    PersonalLogo,
    IconWorld,
    IconHamburger,
    IconCross
  },
  props: {
    isModalClosed: Boolean
  },
  data() {
    return {
      isHamburgerActive: true,
      isModalOpen: false
    };
  },
  computed: {
    ...mapGetters("language", ["currentLang"]),
    ...mapGetters("user", ["userLoggedIn"])
  },
  methods: {
    ...mapActions("language", ["changeLanguage"]),
    onRightIcon() {
      this.isHamburgerActive = !this.isHamburgerActive;
    },
    onLanguageChange() {
      if (this.currentLang === "en") {
        this.changeCurrentLanguage("tr");
      } else {
        this.changeCurrentLanguage("en");
      }
    },
    changeCurrentLanguage(lang) {
      this.changeLanguage(lang);
      this.$i18n.locale = lang;
    },
    onLoginButton() {
      this.isModalOpen = !this.isModalClosed;
      this.$emit("modal-open", this.isModalOpen);
    }
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

  &__logo {
    @include respond(phone) {
      display: none;
    }
  }

  &__left {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include respond(phone) {
      justify-content: start;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      padding: 0 2rem;
    }

    @include respond(phone) {
      display: none;
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

  &__hamburger {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @include respond(phone) {
      display: inline;
    }
  }

  &__cross {
    margin-right: 1rem;
  }
}
</style>
