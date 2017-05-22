<template>
  <div class="root">
    <h1>Trade or View your Portfolio</h1>
    <ul>
      <li>You may Save&Load your data</li>
      <li>Click on 'End Day' to begin a new Day</li>
    </ul>
    <hr>
    <h2>Your Funds: $10.000</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/common';
.root {
  padding: getSizeByCustomHeight(50) getSizeByCustomHeight(25);
  border: 1px black solid;
  margin-top: 25px;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  margin-top: getSizeByCustomHeight(25);
  list-style: none;
  padding: 0;
}

li:not(:first-child) {
  margin-top: getSizeByCustomHeight(20);
}

h2 {
  margin-top: getSizeByCustomHeight(30);
}
</style>
