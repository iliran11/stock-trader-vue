<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/" tag="a" activeClass="active">Stock Trader</router-link>
        <!--<a class="navbar-brand" href="#">Stock Trader</a>-->
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">

          <router-link to="/portfolio" tag="li" activeClass="active"><a>Portfolio</a></router-link>
          <router-link to="/stocks" tag="li" activeClass="active"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="./">End Day</a>
          </li>
          <li>
            <a href="../navbar-static-top/">Save&Load</a>
          </li>
          <li>
            <a :style="{'font-weight':'bold'}" href="../navbar-fixed-top/">Funds: 10,000$</a>
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
  data() {
    return {

    }
  }
}
</script>
