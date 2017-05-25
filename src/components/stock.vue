<template>
  <div class="root">
    <header class="sell">
      <span class="bigger-text">{{stock.name}}</span>
      <span class="smaller-text">(Quantity: {{stock.portfolioQuantity}})</span>
      <span class="smaller-text">(currentPrice: {{stock.currentPrice}})</span>
    </header>
    <section>
      <form class="sell" v-on:submit.prevent>
        <input class="form-control" v-model="quantity" placeholder="Quantity" type="number"></input>
        <button class="btn btn-danger" @click="sell">Sell</button>
      </form>
      <p id="sell-value">{{sellValue}}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    stock: {}
  },
  data() {
    return {
      quantity: null
    }
  },
  computed: {
    sellValue() {
      return this.quantity ? `Sell Value:${this.quantity * this.stock.currentPrice}` : ''
    }
  },
  methods: {
    sell() {
      this.$store.dispatch('buySell', {
        stockName: this.stock.name,
        quantityChange: parseInt(this.quantity) * -1,
        currentPrice: this.stock.currentPrice
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/functions';
.sell {
  background-color: #DAEEF6;
  border: 1px solid #EDF6F8;
}

.root {
  margin-top: 20px;
}

header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: getSizeByCustomWidth(15); // border: 1px solid $borderColor;
}

section {
  padding: getSizeByCustomWidth(15);
}

.root form {
  // background-color:white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  input {
    width: 40%;
    font-size: getSizeByCustomHeight(22);
  }
  button {
    font-size: getSizeByCustomHeight(22);
  }
}

#sell-value {
  font-size: getSizeByCustomHeight(22);
  color: red;
  margin-top: getSizeByCustomHeight(10);
  margin-bottom: 0;
}

.bigger-text {
  font-size: getSizeByCustomHeight(18);
}

.smaller-text {
  font-size: getSizeByCustomHeight(12);
}
</style>
