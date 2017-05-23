<template>
  <div>
    <section class="stocks-grid">
      <stock class="stock" :isBuy="true" :stock="stock" v-for="(stock,index) in stocks" key="index"></stock>
    </section>
  </div>
</template>

<script>
import stock from '../components/stock'
export default {
  name: 'stocks',
  computed: {
    stocks() {
      return this.$store.getters['stocks/getList']
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
