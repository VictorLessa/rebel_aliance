import Vue from 'vue'
import Vuex from 'vuex'

import apiGiphy from '../features/apiGiphy/store/index'

Vue.use(Vuex)

const modules = {
  apiGiphy,
}

const store = new Vuex.Store({ modules })

export default store
