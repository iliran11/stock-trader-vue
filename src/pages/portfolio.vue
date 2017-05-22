<template>
  <stock :data="stock" :isBuy="false">
  </stock>
</template>

<script>
import Stock from '../components/stock.vue'
export default {
  data() {
    return {
      stock: {
        name: 'BMW',
        price: 100
      }
    }
  },
  components: { Stock }
}
</script>
