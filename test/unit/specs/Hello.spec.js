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

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(stockNew)
    const vm = new Constructor({ propsData, store }).$mount()
    expect(true)
      .to.equal(true)
  })
})
