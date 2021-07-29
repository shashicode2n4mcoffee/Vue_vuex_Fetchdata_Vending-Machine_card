import { createStore } from 'vuex'
import axios from 'axios'
const [ADD_ITEM] = 'ADD_ITEM'
const [SET_DISPENSE] = 'SET_DISPENSE'
const [FETCH_DATA] = 'FETCH_DATA'
const [DELETE_DATA] = 'DELETE_DATA'

export default createStore({
  state: {
    item: 10,
    data: undefined,
    list: {
      name: 'Iphone 12',
      cost: 1200,
      stock: 25,
      image:
        'https://images.unsplash.com/photo-1605637158613-e81498245703?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGlwaG9uZSUyMDEyJTIwcHJvJTIwbWF4fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  },
  mutations: {
    [ADD_ITEM](state) {
      // console.log('In mutation')
      // console.log(state.item)
      state.item++
    },

    [SET_DISPENSE](state) {
      // console.log('In dispense mutation')
      // state.list.stock--

      if (state.list.stock > 0) {
        state.list.stock--
        // console.log(state.list.stock)
      } else {
        state.list.stock = 0
      }
    },

    [FETCH_DATA](state, payload) {
      // console.log('In FETCH DATA')
      // console.log(payload)
      // console.log('Showing data in State')
      // console.log(state.data)

      state.data = payload
    },

    [DELETE_DATA](state) {
      // console.log('Deleting data')
      state.data = undefined
    },

    // [SET_REFILL](state) {
    //   console.log('In Refill mutation')
    //   console.log(state.list.stock)
    //   state.list.stock = 25
    // },
  },
  actions: {
    addItem({ commit }) {
      // console.log('In item action')
      commit(ADD_ITEM)
    },

    // restock({ commit }) {
    //   console.log('In Restock')
    //   commit(SET_REFILL)
    // },

    dispense({ commit }) {
      // console.log('In dispense')
      commit(SET_DISPENSE)
    },

    fetchdata({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
          // console.log(response.data)
          commit(FETCH_DATA, response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    deletedata({ commit }) {
      commit(DELETE_DATA)
    },
  },
  modules: {},
})
