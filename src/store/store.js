import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './stocks.js';
import portfolio from './portfolio.js';
import funds from './funds.js';
import turn from './turn.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio,
    funds,
    turn
  }
});

export default store;
