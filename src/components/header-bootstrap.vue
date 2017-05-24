<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/" tag="a" activeClass="active">Stock Trader</router-link>
        <!--<a class="navbar-brand" href="#">Stock Trader</a>-->
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">

          <router-link to="/portfolio" tag="li" activeClass="active">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" activeClass="active">
            <a>Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a @click="endDay">End Day </a>
          </li>
          <li>
            <a>Save&Load</a>
          </li>
          <li>
            <a v-on:click.prevent :style="{'font-weight':'bold'}" href="">Funds: {{funds}}</a>
          </li>
          <li>
            <a v-on:click.prevent>Turn: {{turn}}</a>
          </li>
        </ul>
      </div>
      <!--/.nav-collapse -->
    </div>
    <!--/.container-fluid -->
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters['fundsStatus'];
    },
    turn() {
      return this.$store.getters['getTurn'];
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch('endDay');
    }
  }
}
</script>
