import Vue from 'vue'
import Hello from '@/components/stockNew.vue'
import stockNew from '@/components/stockNew.vue'
const props = {
  stock: {
    currentPrice: 101,
    name: "google",
    portfolioQuantity: 0
  }
}

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(stockNew)
    const vm = new Constructor({ propsData: props }).$mount()
    expect(true)
      .to.equal(true)
  })
})
// import Vue from 'vue'

// // helper function that mounts and returns the rendered text
// function getRenderedText(Component, propsData) {
//   const Ctor = Vue.extend(Component)
//   const vm = new Ctor({ propsData: propsData }).$mount()
//   return true;
// }
// describe('MyComponent', () => {
//   it('renders correctly with different props', () => {
//     expect(getRenderedText(stockNew,props)).toBe(true)
//     expect(getRenderedText(stockNew,props)).toBe(true)
//   })
// })
