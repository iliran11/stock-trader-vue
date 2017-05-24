const stockNames = ['Google', 'BMW', 'Apple', 'Microsoft', 'Vue']
const randomPrice = () => {
  return Math.floor(Math.random() * 100) + 50
}
const stocks = {
  state: [],
  getters: {
    stocksList(state) {
      return state;
    },
    portfolioList(state) {
      return state.filter(stock => {
        if (stock.portfolioQuantity > 0) {
          return true;
        }
        return false;
      })
    }
  },
  mutations: {
    priceMutate(state, payload) {
      const a = state.find(element => {
        return element.name === payload;
      });
      a.currentPrice = randomPrice();
    },
    portfolioQuantityMutate(state, payload) {
      state.find(stock => {
        return stock.name === payload.stockName
      })
        .portfolioQuantity += payload.quantityChange
    },
    createStock(state, stock) {
      state.push({
        name: stock.name,
        currentPrice: randomPrice(),
        portfolioQuantity: 0
      });
    }
  },
  actions: {
    init(context) {
      stockNames.forEach(currentValue => {
        context.commit('createStock', {
          name: currentValue
        });
      })
    },
    changeStocksPrices(context) {
      context.state.forEach(currentStock => {
        context.commit('priceMutate', currentStock.name);
      });
    },
    buySell(context, payload) {
      // payload: stockName,quantityChange,currentPrice
      const fundsChange = payload.quantityChange * payload.currentPrice * -1;
      context.commit('portfolioQuantityMutate', payload)
      context.dispatch('transactionChange', fundsChange);
    }
  }
}

export default stocks;
