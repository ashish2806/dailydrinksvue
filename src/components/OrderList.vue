<template>
    <div class="container">
        <h4>ORDER LIST</h4>
        <div style="overflow-x:auto;" v-if="orderList.length > 0">
            <table>
                <OrderHead></OrderHead>
                <OrderItem v-for="(order, index) in orderList" v-bind:key="index" :index="index" :item="order"></OrderItem>
            </table>
        </div>
        <div v-else>!Oops, Not found any order.</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import OrderItem from "./OrderItem";
    import OrderHead from "./OrderHead";

    export default {
        name: 'OrderList',
        data() {
          return {
              'orderList' : []
          }
        },
        components: {OrderHead, OrderItem},
        computed: {
            ...mapState(['orders'])
        },
        watch: {
            // Parsing data for render
            'orders': function (list) {
                this.orderList = JSON.parse(JSON.stringify(list));
            }
        }
    }
</script>

<style>
    @import '../assets/styles/OrderList.css';
</style>