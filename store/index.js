export const state = () => ({
  error: null,
  modal: false,
});

export const getters = {
  error(state) {
    return state.error;
  },


  modal(state) {
    return state.modal;
  },
};

export const mutations = {
  setError(state, payload) {
    // console.log(payload)
    state.error = payload;
    // console.log(state.error)
  },

  toggleModal(state) {
    state.modal = !state.modal;
  },
};

export const actions = {
  async nuxtServerInit({commit, dispatch}) {
    try {
      await dispatch('vehicles/read');
      commit('setError', null);
    } catch (e) {
      commit('setError', e);
      // throw e
    }
  },

};
