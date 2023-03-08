import { createStore } from 'vuex'
import axios from 'axios';
const dotify = "https://eomp-node-js-dotify.onrender.com/"
// render
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    }
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${dotify}login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
      }else {
        context.commit('setMessage',err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${dotify}register` ,payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
        context.commit('setMessage', err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${dotify}products`);
      const {results} = await res.data;
      if(results) {
        console.log(results);
        context.commit('setProducts', results)
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${dotify}products/${id}`);
      console.log(await res.data)
      context.commit('setProduct', await res.data)
    },
    async fetchUsers(context) {
      const res = await axios.get(`${dotify}users`);
      const {results} = await res.data;
      if(results) {
        console.log(results);
        context.commit('setUsers', results)
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${dotify}user/${id}`);
      console.log(await res.data)
      context.commit('setUser', await res.data)
    },
  },
  modules: {
  }
})