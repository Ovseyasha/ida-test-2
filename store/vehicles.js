import {getVehicles} from '@/api/request';

export const state = () => ({
  vehicles: [],
  filter: null
});

export const getters = {

  getByType(state){
    return state.vehicles.filter(item => item.type === state.filter)
  },

  getTypes(state) {
    const type = state.vehicles.map(item => {
      return item.type;
    });
    const result = [];
    for (let str of type) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  },
};

export const mutations = {

  create(state, payload) {
    state.vehicles.push(payload)
  },

  read(state, payload) {
    state.vehicles = payload;
  },

  setFilter(state, payload) {
    state.filter = payload
  }
};

export const actions = {

  create ({commit}, payload) {
    payload.type = 'custom'
    payload.id = Math.random()
    // and to server
    commit('create', payload)
  },

  async read({commit}) {
    try {
      const vehicles = await getVehicles();
      commit('read', vehicles);
      commit('setError', null, {root: true})
    } catch (e) {
      commit('setError', e, {root: true})
      console.log(e);
    }
  },

  setFilter({commit}, payload){
    try{
      commit('setFilter', payload)
    }catch (e){
      console.log(e)
    }
  }
};
