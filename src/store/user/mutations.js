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
  },
  UPDATE_TITLE(state, title) {
    state.userInfo.title = title;
  },
  UPDATE_USERNAME(state, username) {
    state.userInfo.username = username;
  },
  UPDATE_EMAIL(state, email) {
    state.userInfo.email = email;
  }
};
