<template>
  <div class="root">
    <header class="buy">
      <span class="bigger-text">{{stock.name}}</span>
      <span class="smaller-text">(Price: {{stock.currentPrice}})</span>
    </header>
    <section>
      <form class="buy" v-on:submit.prevent>
        <input v-model="quantity" class="form-control" placeholder="Quantity" type="number"></input>
        <button class="btn btn-success animated" @click="buy">Buy</button>
      </form>
      <p v-if="!isError" id="buy-value">{{buyValue}}</p>
      <p v-if="isError" id="buy-value">{{buyValue}}</p>
    </section>
  </div>
</template>

<script>
import { animate } from '../assets/helpers.js';
const animationClass = 'jello'
console.log(animate, animationClass);
export default {
  data() {
    return {
      quantity: null,
      inputQuantity: '',
      isError: false
    }
  },
  computed: {
    buyValue() {
      return this.quantity ? `Buy Value: ${this.quantity * this.stock.currentPrice}$` : null
    },
    quantityInput() {
      return this.quantity > 0 ? this.quantity : ' '
    }
  },
  props: {
    stock: {}
  },
  methods: {
    buy(e) {
      const buyAmount = parseInt(this.quantity) * this.stock.currentPrice;
      // checking if there are enough funds to make the buy
      if (buyAmount < this.$store.getters['fundsNumber']) {
        this.sendBuyOrder();
      } else {
      }
    },
    sendBuyOrder() {
      this.$store.dispatch('buySell', {
        stockName: this.stock.name,
        quantityChange: parseInt(this.quantity),
        currentPrice: this.stock.currentPrice
      });
    }

  }
}
</script>

<style scoped lang="scss">
@import '../assets/functions';
.root {
  margin-top: 20px;
}

header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: getSizeByCustomWidth(15); // border: 1px solid $borderColor;
  background-color: #dff0d8;
}

section {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #d6e9c6;
  padding: getSizeByCustomWidth(15);
}

.root form {
  // background-color:white;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-top: getSizeByCustomHeight(10);
  input {
    width: 40%;
    font-size: getSizeByCustomHeight(22);
  }
}

#buy-value {
  margin-top: getSizeByCustomHeight(10);
  font-size: getSizeByCustomHeight(22);
  color: green;
  margin-bottom: 0;
}

.bigger-text {
  font-size: getSizeByCustomHeight(18);
}

.smaller-text {
  font-size: getSizeByCustomHeight(12);
}

.error {
  color: red;
  font-size: getSizeByCustomHeight(22);
}
</style>
