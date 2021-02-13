<template>
  <div class="countries">
    <input
      type="text"
      class="countries__input"
      placeholder="You can search countries"
      @click="onInput"
      autocomplete="nope"
      v-model="selectedCountry"
    />
    <IconDown
      v-if="isDropdownOpen"
      @click="handleFocusOut"
      class="icon icon__down"
    />
    <IconUp v-else class="icon icon__up" @click="handleFocusOut" />
    <ul class="countries__select" v-if="isDropdownOpen">
      <li
        class="countries__list"
        v-for="country in filteredCountries"
        :key="country.id"
        @click="chooseCountry(country)"
      >
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import IconUp from "@/assets/IconUp.svg";
import IconDown from "@/assets/IconDown.svg";

export default {
  name: "CountrySearch",
  components: {
    IconUp,
    IconDown
  },
  data() {
    return {
      countryList: [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "United Kingdom" },
        { id: "DE", name: "Germany" },
        { id: "SE", name: "Sweden" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brazil" },
        { id: "ZW", name: "Zimbabwe" }
      ],
      selectedCountry: "",
      isDropdownOpen: false
    };
  },
  computed: {
    filteredCountries() {
      return this.countryList.filter(country =>
        country.name.toLowerCase().includes(this.selectedCountry.toLowerCase())
      );
    }
  },
  methods: {
    onInput() {
      this.isDropdownOpen = true;
    },
    chooseCountry(country) {
      this.isDropdownOpen = false;
      this.selectedCountry = country.name;
      this.$emit("country-code", country.id);
    },
    handleFocusOut() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.countries {
  width: 120rem;
  margin-left: -2rem;
  position: relative;

  &__input {
    height: 4rem;
    width: 24rem;
    text-indent: 1rem;
    border-radius: $size-border-radius;

    &:focus {
      border: none;
      outline: none;
    }
  }

  &__select {
    margin-left: 1rem;
    height: 20rem;
    width: 24rem;
    background-color: $color-white;
    overflow: scroll;
  }

  &__list {
    list-style: none;
    color: $color-primary;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
      background-color: $color-secondary;
    }
  }
}

.icon {
  position: absolute;
  top: 0.5rem;
  right: 0.1rem;
  cursor: pointer;
  padding: 0.5rem 0;

  &__down {
    top: 0.5rem;
    padding: 0;
  }
}
</style>
