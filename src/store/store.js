import { createStore } from 'vuex'
import mutations from "./mutations/mutations"
import actions from "./actions/actions"

export default createStore({
  state: {
    userData: null,
    token: null,
    usersList: null
  },
  mutations,
  actions,
})
