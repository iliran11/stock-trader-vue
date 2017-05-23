<template>
  <div>
    <stock v-for="(stock,index) in portfolio" :key="index" :stock="{name:stock.name,quantity:stock.quantity}" :isBuy="false">
    </stock>
  </div>
</template>

<script>
import Stock from '../components/stock.vue'
export default {
  computed: {
    portfolio() {
      debugger;
      return this.$store.getters['portfolio/getPortfolio']
    }
  },
  components: { Stock }
}
</script>
