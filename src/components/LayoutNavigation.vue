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
    <div
      class="navbar__right"
      :class="{ 'hamburger-active': isHamburgerActive }"
    >
      <router-link to="/" class="navbar__homepage">{{
        $t("homepage")
      }}</router-link>
      <router-link tag="a" to="/contact" class="navbar__contact">{{
        $t("contact")
      }}</router-link>
      <button class="navbar__localization" @click="onLanguageChange">
        <IconWorld />
        <span class="navbar__local-text">{{ $t("language") }}</span>
      </button>
      <button class="navbar__login" v-if="!userLoggedIn" @click="onLoginButton">
        {{ $t("login") }}
      </button>
      <div class="user" v-else>
        <h4 class="user__name" @click="toggleDropdown">
          {{ userInfo.username }}
        </h4>
        <UserDropdown v-if="isDropdownOpen" :userInfo="userInfo" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import UserDropdown from "./UserDropdown";
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
    IconCross,
    UserDropdown
  },
  props: {
    isModalClosed: Boolean
  },
  data() {
    return {
      isHamburgerActive: true,
      isModalOpen: false,
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters("language", ["currentLang"]),
    ...mapGetters("user", ["userLoggedIn", "userInfo"])
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
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
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
      & > * {
        padding: 0.5rem 0;
      }
      position: absolute;
      top: 6rem;
      left: 4.7rem;
      width: 85%;
      height: 18rem;
      align-items: flex-start;
      color: $color-black;
      flex-direction: column;
      background-color: $color-secondary;
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

    @include respond(phone) {
      color: $color-secondary;
      background-color: $color-primary;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-bottom: 1rem;
    }
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

    @include respond(phone) {
      color: $color-black;
    }
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

.user {
  &__name {
    cursor: pointer;
  }
}

.hamburger-active {
  @include respond(phone) {
    display: none;
  }
}
</style>
