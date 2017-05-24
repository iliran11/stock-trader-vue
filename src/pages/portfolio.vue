<template>
  <div>
    <stock v-for="(stock,index) in portfolio" :key="index" :stock="stock" :isBuy="false">
    </stock>
  </div>
</template>

<script>
import Stock from '../components/stock.vue'
export default {
  computed: {
    portfolio() {
      return this.$store.getters['portfolioList']
    }
  },
  components: { Stock }
}
</script>
