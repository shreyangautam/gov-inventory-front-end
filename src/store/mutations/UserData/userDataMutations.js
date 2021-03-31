export default {
    //MUTATIONS
    loadUserData (state, payload){
        console.log(payload)
        return state.userData = payload ;
    },
    loadToken (state, payload){
        return state.token = payload
    }
  
}