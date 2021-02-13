export const mutations = {
  ADD_USER(state, user) {
    state.userInfo.title = user.title;
    state.userInfo.username = user.name;
    state.userInfo.password = user.password;
    state.userInfo.email = user.email;
    state.isUserLoggedIn = true;
  },
  RESET_USER(state) {
    state.userInfo = {};
    state.isUserLoggedIn = false;
  }
};
