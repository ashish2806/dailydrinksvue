<template>
  <div>
    <h1>DAILYDRINKS</h1>
    <div style="width: 50%; float: left">
      <OrderForm></OrderForm>
    </div>
    <div style="width: 50%; float: left">
      <OrderList></OrderList>
    </div>
  </div>
</template>

<script>

import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

export default {
  name: 'App',
  components: {
      OrderList,
      OrderForm
  }
}
</script>

<style>
  h1 {
    margin-left: 50px;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
