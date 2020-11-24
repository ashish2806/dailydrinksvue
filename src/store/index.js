//index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        orders: [],
        intEditIndex: ''
    }),
    mutations: {
        STORE_FORM (state, data) {
            state.orders.unshift(data.formData);
        },
        EDIT_ORDER(state, data) {
            state.intEditIndex = data.index;
        },
        DELETE_ORDER(state, data) {
            state.orders.splice(data.index, 1);
        },
        UPDATE_ORDER(state, data) {
            Vue.set(state.orders, data.intEditIndex, data.formData);
        }
    },
    actions: {
        submitForm(context, payload) {
            return new Promise((resolve) => {
                (payload.intEditIndex || payload.intEditIndex === 0) ? context.commit('UPDATE_ORDER', payload) : context.commit('STORE_FORM', payload);
                resolve();
            });
        },
        deleteItem(context, payload) {
            context.commit('DELETE_ORDER', payload);
        }
    }
});