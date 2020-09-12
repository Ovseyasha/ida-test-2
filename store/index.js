export const state = () => ({
  error: null,
  darkMode: false
});
export const getters = {
  error(state){
    return state.error
  },
  darkMode(state){
    return state.darkMode
  }
}
export  const mutations = {
  setError(state, payload){
    state.error = payload
  },
  darkModeChange(state){
    state.darkMode = !state.darkMode
  }
}
export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('vehicles/read');
  },

  darkModeChange({commit}){
    commit('darkModeChange')
  }
};
