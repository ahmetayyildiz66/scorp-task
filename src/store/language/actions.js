export const actions = {
  changeLanguage({ commit }, language) {
    console.log("languageeeee: ", language);
    commit("CHANGE_LANGUAGE", language);
  }
};
