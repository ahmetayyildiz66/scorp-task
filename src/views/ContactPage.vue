<template>
  <main class="contact">
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
        class="form__input form__phone"
        placeholder="Phone number"
        type="text"
        v-model="phoneNumber"
      />
      <button class="form__submit" type="button">Send</button>
    </form>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ContactPage",
  data() {
    return {
      username: "",
      mail: "",
      phoneNumber: ""
    };
  },
  computed: {
    ...mapGetters("user", ["userInfo"]),
    title: {
      get() {
        return this.userInfo.title;
      },
      set(value) {
        this.updateTitle(value);
      }
    },
    name: {
      get() {
        return this.userInfo.username;
      },
      set(value) {
        this.username = value;
      }
    },
    email: {
      get() {
        return this.userInfo.email;
      },
      set(value) {
        this.mail = value;
      }
    }
  },
  methods: {
    ...mapActions("user", ["updateTitle", "updateUsername", "updateEmail"])
  }
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 10rem;
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
