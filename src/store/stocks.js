const stocks = {
  namespaced: true,
  state: {
    availableStocks: ['Google', 'BMW', 'Apple', 'Microsoft', 'Vue']
  },
  getters: {
    getList(state) {
      return state.availableStocks.map(stockName => {
        return {
          name: stockName,
          quantity: Math.floor(Math.random() * 100) + 1

        }
      });
    }
  },
  mutations: {
    addStock(state, stock) {
      state.list.push(stock);
    }
  },
  actions: {
    addStock(context, stock) {
      context.commit('addStock', stock)
    }
  }
}

export default stocks;
