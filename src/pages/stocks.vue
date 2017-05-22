<template>
  <div>
    <section class="stocks-grid">
      <stock class="stock" :isBuy="true" :data="stock" v-for="(stock,index) in stocks" key="index"></stock>
    </section>
  </div>
</template>

<script>
import stock from '../components/stock'
export default {
  name: 'stocks',
  data() {
    return {
      stocks: [
        {
          name: 'BMW',
          price: 100
        },
        {
          name: 'Apple',
          price: 34
        },
        {
          name: 'Google',
          price: 139
        },
        {
          name: 'Twitter',
          price: 8
        }
      ]
    }
  },
  components: { stock }

}
</script>

<style lang="scss" scoped>
@import '../assets/common';

.stocks-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.stock {
  margin-right: getSizeByCustomWidth(40);
}
</style>
