const funds = {
  namespaced: true,
  state: {
    funds: 10000
  },
  getters: {
    funds(state) {
      return state.funds.toLocaleString() + '$';
    }
  },
  mutations: {
    transaction(state, payload) {
      state.funds += payload
    }
  },
  actions: {
    transaction(context, payload) {
      debugger;
      context.commit('transaction', payload);
    }
  }
}

export default funds;
