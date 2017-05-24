<template>
  <div>
    <section class="stocks-grid">
      <stock class="stock" :stock="stock" v-for="(stock,index) in stocks" key="index"></stock>
    </section>
  </div>
</template>

<script>
import stock from '../components/stockNew'
export default {
  name: 'stocks',
  computed: {
    stocks() {
      return this.$store.getters['stocksList']
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
