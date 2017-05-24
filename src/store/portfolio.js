const portfolio = {
  state: {
    portfolio: []
  },
  getters: {
    getPortfolio(state, getters, rootState) {
      console.log(state.portfolio);
      return state.portfolio.map(currentStock => {
        return {
          name: state.portfolio.name,
          quantity: state.portfolio.quantity
        }
      });
    }
  },
  mutations: {
    addSellStock(state, payload) {
      try {
        state.portfolio.find(findStock, payload).quantity += payload.quantity;
      } catch (e) {
        state.portfolio.push({
          name: payload.name,
          quantity: payload.quantity
        });
      }
    }
  },
  actions: {
    addSellStock(context, payload) {
      context.commit('addSellStock', payload);
    }
  }
}
function findStock(element) {
  return element.name === this.name
}
export default portfolio;
