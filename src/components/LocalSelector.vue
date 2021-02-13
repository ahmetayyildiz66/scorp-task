<template>
  <select class="local-selector" v-model="languageSelect" @change="onChange">
    <option disabled value="">select language</option>
    <option>EN</option>
    <option>TR</option>
  </select>
</template>

<script>
export default {
  name: "LocalSelector",
  data() {
    return {
      languageSelect: ""
    };
  },
  methods: {
    onChange() {
      this.$emit("selectedLang", this.languageSelect);
    }
  }
};
</script>

<style lang="scss" scoped></style>
