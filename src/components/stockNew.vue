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
      <p v-if="PurchaseMessage" id="buy-value">Buy Value: {{buyValue}}</p>
      <p v-if="isError" class="error">{{getErrorMessage}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'stock-new',
  data() {
    return {
      quantity: null
    }
  },
  computed: {
    isError() {
      return !(this.isEnoughFunds && this.isQuantityPositive)
    },
    PurchaseMessage() {
      return parseInt(this.quantity) > 0 && this.isEnoughFunds
    },
    buyValue() {
      return this.quantity ? `${this.quantity * this.stock.currentPrice}$` : ' '
    },
    isEnoughFunds() {
      const buyAmount = this.getQuantity * this.stock.currentPrice;
      if (buyAmount <= this.$store.getters['fundsNumber']) {
        return true
      }
      return false;
    },
    isQuantityPositive() {
      return this.getQuantity > 0 || this.quantity === null
    },
    getErrorMessage() {
      if (!this.isQuantityPositive) {
        return 'Please Enter Positive Number'
      }
      if (!this.isEnoughFunds) {
        return 'You Do not have Enough funds to buy this amount';
      }
    },
    getQuantity() {
      return parseInt(this.quantity) || 0;
    },
  },
  props: {
    stock: {}
  },
  methods: {
    buy(e) {
      // checking if there are enough funds to make the buy
      if (this.isEnoughFunds) {
        this.sendBuyOrder();
        this.quantity = null;
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
  margin-top: 40px;
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
  position: relative;
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
  font-size: getSizeByCustomHeight(16);
}
</style>
