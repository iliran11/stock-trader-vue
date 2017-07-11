import Vue from 'vue'
import stockNew from '@/components/stockNew'

describe('newStock', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(stockNew)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
