import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const maxCount = 1500

const store = new Vuex.Store({
  state: {
    timer: null,
    counter: maxCount,
    isTimerOn: false
  },
  getters: {
    dateCounter: (state) => {
      const minutes = Math.floor(state.counter / 60)
      const seconds = state.counter % 60
      return `${('00' + minutes).slice(-2)}:${('00' + seconds).slice(-2)}`
    }
  },
  mutations: {
    start (state) {
      state.isTimerOn = true
      state.timer = setInterval(() => --state.counter, 1000)
    },
    pause (state) {
      state.isTimerOn = false
      clearInterval(state.timer)
    },
    reset (state) {
      state.isTimerOn = false
      clearInterval(state.timer)
      state.counter = maxCount
    }
  }
})

export default store