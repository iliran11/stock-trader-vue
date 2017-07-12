import Vue from 'vue'
import Hello from '@/components/stockNew.vue'
import stockNew from '@/components/stockNew.vue'
import Vuex from 'vuex'

import store from '../../../src/store/store.js'
const propsData = {
  stock: {
    currentPrice: 101,
    name: "google",
    portfolioQuantity: 0
  }
}

describe('Buy New Stock', () => {
  it('should render correct price-text if  price-props is 101', () => {
    const Constructor = Vue.extend(stockNew)
    const vm = new Constructor({ propsData, store }).$mount()
    expect(vm.$el.querySelector('.price').textContent)
      .to.equal('(Price: 101)')
  })
})
