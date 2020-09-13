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
    console.log(payload)
    state.error = payload
    console.log(state.error)
  },
  darkModeChange(state){
    state.darkMode = !state.darkMode
  }
}
export const actions = {
  async nuxtServerInit({ commit, dispatch}) {
    try{
      await dispatch('vehicles/read');
      commit('setError', null)
    }catch (e){
      commit('setError', e)
      // throw e
    }
  },

  darkModeChange({commit}){
    commit('darkModeChange')
  }
};
