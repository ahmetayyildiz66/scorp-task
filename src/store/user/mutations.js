export const mutations = {
  ADD_USER(state, user) {
    state.title = user.title;
    state.username = user.name;
    state.password = user.password;
    state.isUserLoggedIn = true;
    state.email = user.email;
  }
};
