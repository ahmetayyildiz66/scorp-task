<template>
  <div class="modal">
    <button class="modal__button" @click="closeModal">X</button>
    <form class="form">
      <input
        class="form__input form__title"
        type="text"
        placeholder="Title"
        v-model="title"
      />
      <input
        class="form__input form__name"
        placeholder="Name"
        type="text"
        v-model="name"
      />
      <input
        class="form__input form__email"
        placeholder="Email"
        type="email"
        v-model="email"
      />
      <input
        class="form__input form__password"
        placeholder="Password"
        type="password"
        v-model="password"
      />
      <LocalSelector class="form__language" @selectedLang="chosenLang" />
      <button class="form__submit" type="button" @click="onLogin">
        {{ $t("login") }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LocalSelector from "./LocalSelector";

export default {
  name: "LoginModal",
  components: {
    LocalSelector
  },
  data() {
    return {
      isModalClosed: false,
      title: "",
      name: "",
      email: "",
      password: "",
      language: ""
    };
  },
  methods: {
    ...mapActions("user", ["addUserInfo"]),
    ...mapActions("language", ["changeLanguage"]),
    closeModal() {
      this.isModalClosed = true;
      this.$emit("close-modal", this.isModalClosed);
    },
    chosenLang(language) {
      this.language = language;
    },
    onLogin() {
      const user = {
        title: this.title,
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.addUserInfo(user);
      if (!this.language) {
        this.language = "EN";
      }
      this.changeLanguage(this.language.toLowerCase());
      this.$i18n.locale = this.language.toLowerCase();
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 15%;
  left: 14%;
  height: 70vh;
  width: 70vw;
  background-color: $color-black;
  box-shadow: 0 8px 12px rgba($color-black, 0.8);

  &__button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0 1rem;
    font-size: 2rem;
    border: none;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
}

.form {
  margin: 1.5rem auto;
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__input {
    margin-bottom: 2rem;
    height: 4rem;
    width: 24rem;
    text-indent: 1rem;
    border-radius: $size-border-radius;

    &:focus {
      border: none;
      outline: none;
    }
  }

  &__submit {
    background-color: $color-secondary;
    color: $color-white;
    padding: 1rem 2rem;
    cursor: pointer;
  }

  &__language {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
}
</style>
