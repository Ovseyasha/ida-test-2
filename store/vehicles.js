import {getVehicles} from '@/api/request';

export const state = () => ({
  vehicles: [],
});

export const getters = {
  getByType: state => type => {
    return state.vehicles.filter(item => item.type === type);
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
  read(state, payload) {
    state.vehicles = payload;
  },
};

export const actions = {
  async read({commit}) {
    try {
      const vehicles = await getVehicles();
      commit('read', vehicles);
    } catch (e) {
      console.log(e);
    }
  },
};
