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
      <p v-if="showMessage" id="sell-value">Sell Value: {{sellValue}}$</p>
      <p v-if="errorMessage" class="error">{{errorMessage}}</p>
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
      quantity: 0
    }
  },
  computed: {
    sellValue() {
      return this.quantity * this.stock.currentPrice
    },
    showMessage() {
      return this.getQuantity > 0 && this.isEnoughPortfolioQuantity;
    },
    getQuantity() {
      return parseInt(this.quantity) || 0;
    },
    isQuantityPositive() {
      return this.getQuantity > 0 || this.quantity === null
    },
    errorMessage() {
      if (this.getQuantity > this.stock.portfolioQuantity) {
        return 'You dont have enough stocks to sell this amount'
      }
      if (!this.isQuantityPositive) {
        return 'Please Enter positive Number'
      }
    },
    isError() {
      return this.quantity > this.stock.portfolioQuantity
    },
    isEnoughPortfolioQuantity() {
      return this.quantity <= this.stock.portfolioQuantity
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
  color: #20abab;
  margin-top: getSizeByCustomHeight(10);
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
