import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

const componentsContext = require.context('./modules', true, /.js$/)
const modules = {}
componentsContext.keys().forEach(part => {
  const fileName = part.slice(2, -3)
  modules[fileName] = { ...require(`./modules/${fileName}`).default }
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: modules,
  getters,
})

export default store
