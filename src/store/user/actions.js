export const actions = {
  addUserInfo({ commit }, user) {
    commit("ADD_USER", user);
  },
  logout({ commit }) {
    commit("RESET_USER");
  },
  updateTitle({ commit }, title) {
    commit("UPDATE_TITLE", title);
  },
  updateUsername({ commit }, username) {
    commit("UPDATE_USERNAME", username);
  },
  updateEmail({ commit }, email) {
    commit("UPDATE_EMAIL", email);
  }
};
