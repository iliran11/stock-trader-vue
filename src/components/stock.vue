<template>
  <div class="root">
    <header :class="colorTheme">
      <span class="bigger-text">{{stock.name}}</span>
      <span class="smaller-text">({{subHeaderText}}: {{stock.quantity}})</span>
    </header>
    <form :class="colorTheme" v-on:submit.prevent>
      <input class="form-control" v-model="quantity" placeholder="Quantity"></input>
      <button :class="`btn ${btnClass}`" @click="buy">{{buttonText}}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isBuy: {
      default: true
    },
    stock: {}
  },
  data() {
    return {
      quantity: ''
    }
  },
  computed: {
    buttonText() {
      return this.isBuy ? 'Buy' : 'Sell'
    },
    colorTheme() {
      return this.isBuy ? 'buy' : 'sell'
    },
    btnClass() {
      return this.isBuy ? 'btn-success' : 'btn-danger'
    },
    subHeaderText() {
      return this.isBuy ? 'Price' : 'Quantity'
    }
  },
  methods: {
    buy() {
      this.$store.dispatch('portfolio/addStock', {
        name: this.stock.name,
        quantity: this.quantity
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
