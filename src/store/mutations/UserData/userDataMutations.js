export default {
    //MUTATIONS
    loadUserData (state, payload){
        console.log(payload)
        return state.userData = {...payload[0]} ;
    },
  
}