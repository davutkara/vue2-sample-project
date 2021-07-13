export default {
  namespaced: true,
  state: () => ({
    active: false,
    name: undefined,
    email: undefined,
  }),
  getters: {
    isSessionActive(state) {
      return state.active;
    },
  },
  mutations: {
    setUserSession(state, { name, email }) {
      state.active = true;
      state.name = name;
      state.email = email;
    },
    resetUserSession(state) {
      state.active = false;
      state.name = undefined;
      state.email = undefined;
    },
  },
  actions: {
    login({ commit }, { name, email, password }) {
      // fake request
      return Promise.resolve({
        name,
        email,
        password,
      }).then(({ name, email }) => {
        commit("setUserSession", { name, email });
      });
    },
    logout({ state, commit }) {
      // fake logout request.
      return Promise.resolve({
        email: state.email,
      })
        .then(() => {
          // some other logic
        })
        .finally(() => {
          commit("resetUserSession");
        });
    },
  },
};
