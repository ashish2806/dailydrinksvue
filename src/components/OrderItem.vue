<template>
    <tr>
        <td>{{ item.strName }}</td>
        <td>{{ item.intPrice}}</td>
        <td v-html="item.strNote"></td>
        <td><a href="javascript: void(0);" @click="editItem(index)">Edit</a> / <a href="javascript: void(0);" @click="deleteItem(index)">Delete</a></td>
    </tr>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'OrderItem',
        props: [ 'item', 'index' ],
        computed: {
            ...mapState(['orders', 'intEditIndex'])
        },
        methods: {
            // Set index for edit order
            editItem(index) {
                this.$store.commit('EDIT_ORDER', { index: index})
            },
            // Delete order
            deleteItem(index) {
                this.$store.dispatch('deleteItem', { index: index})
            }
        }
    }
</script>

<style>
    @import '../assets/styles/OrderItem.css';
</style>