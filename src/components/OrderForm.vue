<template>
    <div class="container">
        <h4>ORDER</h4>
        <form @submit.prevent="submitForm">
            <div class="order-form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.strName" required placeholder="Name">
            </div>

            <div class="order-form-group">
                <label for="price">Price:</label>
                <input type="number" id="price" v-model="form.intPrice" required placeholder="Price">
            </div>

            <div class="order-form-group">
                <label for="note">Note:</label><br>
                <vue-editor  id="note" name="note" v-model="form.strNote"></vue-editor>
            </div>

            <div class="order-form-group">
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { VueEditor } from "vue2-editor";

    export default {
        name: 'OrderForm',
        components: { VueEditor },
        data(){
            return {
                form: {
                    strName: '',
                    intPrice: '',
                    strNote: ''
                }
            }
        },
        methods: {
            // Form submition and save data
            submitForm() {
               this.$store.dispatch('submitForm', {
                    'formData': {
                        strName: this.form.strName,
                        intPrice: this.form.intPrice,
                        strNote: this.form.strNote
                    },
                    'intEditIndex': this.intEditIndex
               }).then(() => {
                   this.clearForm();
               });
            },
            // Clear form after save data
            clearForm() {
                this.form.strName = '';
                this.form.intPrice = '';
                this.form.strNote = '';
                this.$store.commit('EDIT_ORDER', { index: ''})
            }
        },
        computed: {
            ...mapState(['orders', 'intEditIndex'])
        },
        watch: {
            //Populate data by index on edit
            intEditIndex: function (editIndex) {
               if(editIndex || editIndex === 0) {
                   this.form.strName = this.orders[editIndex].strName;
                   this.form.intPrice = this.orders[editIndex].intPrice;
                   this.form.strNote = this.orders[editIndex].strNote;
               }
            }
        }
    }
</script>

<style>
    @import '../assets/styles/OrderForm.css';
</style>