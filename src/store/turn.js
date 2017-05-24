const turn = {
  state: {
    turn: 0
  },
  getters: {
    getTurn(state) {
      return state.turn;
    }
  },
  mutations: {
    incrementTurn(state) {
      state.turn += 1;
    }
  },
  actions: {
    endDay(context) {
      context.dispatch('changeStocksPrices');
      context.commit('incrementTurn');
    }
  }
}
export default turn;
