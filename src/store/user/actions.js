export const actions = {
  addUserInfo({ commit }, user) {
    commit("ADD_USER", user);
  },
  logout({ commit }) {
    commit("RESET_USER");
  }
};
