<template>
  <div class="root">
    <div class="left-hand">
      <ul>
        <li class="logo">Stock Trader</li>
        <li>Portfolio</li>
        <li>Stocks</li>
      </ul>
    </div>
    <div class="right-hand">
      <ul>
        <li>End Day</li>
        <li>Save & Load</li>
        <li>Funds: $10,000</li>
      </ul>
    </div>
  </div>
</template>

<script>
// Libs

// Components

// Assets

// Directives

// Export
export default {}
</script>


<style lang="scss" scoped>
@import '../assets/common';
.root {
  padding-left:  getSizeByCustomWidth(20);
  padding-right: getSizeByCustomWidth(20);
  padding-top: getSizeByCustomHeight(25);
  padding-bottom: getSizeByCustomHeight(25);
  background-color: #F9F7F9;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    font-size: getSizeByCustomHeight(16);
  }
  .logo {
    font-size: getSizeByCustomHeight(30);
  }
}

li:not(:first-child) {
  margin-left: getSizeByCustomWidth(40);
}
</style>
