const portfolio = {
  namespaced: true,
  state: {
    portfolio: []
  },
  getters: {
    getPortfolio(state) {
      return state.portfolio;
    }
  },
  mutations: {
    addStock(state, payload) {
      try {
        state.portfolio.find(findStock, payload).quantity += payload.quantity;
      } catch (e) {
        state.portfolio.push({ name: payload.name, quantity: payload.quantity });
      }
    }
  },
  actions: {
    addStock(context, payload) {
      context.commit('addStock', payload);
    }
  }
}
function findStock(element) {
  return element.name === this.name
}
export default portfolio;
