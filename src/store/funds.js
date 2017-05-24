const funds = {
  state: {
    funds: 100
  },
  getters: {
    fundsStatus(state) {
      return state.funds.toLocaleString() + '$';
    }
  },
  mutations: {
    transactionMutate(state, payload) {
      state.funds += payload
    }
  },
  actions: {
    transactionChange(context, payload) {
      context.commit('transactionMutate', payload);
    }
  }
}

export default funds;
