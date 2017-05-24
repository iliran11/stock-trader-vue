<template>
  <div class="root">
    <header class="buy">
      <span class="bigger-text">{{stock.name}}</span>
      <span class="smaller-text">(Price: {{stock.currentPrice}})</span>
    </header>
    <form class="buy" v-on:submit.prevent>
      <input class="form-control" v-model="quantity" placeholder="Quantity" type="number"></input>
      <button class="btn btn-success" @click="buy">Buy</button>
    </form>
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
  methods: {
    buy() {
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
.buy {
  background-color: #dff0d8;
  border: 1px solid #d6e9c6;
}

.root {
  margin-top: 20px;
}

header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: getSizeByCustomWidth(15); // border: 1px solid $borderColor;
}

.root form {
  // background-color:white;
  padding: getSizeByCustomWidth(15);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  input {
    width: 40%;
  }
}

.bigger-text {
  font-size: getSizeByCustomHeight(18);
}

.smaller-text {
  font-size: getSizeByCustomHeight(12);
}
</style>
