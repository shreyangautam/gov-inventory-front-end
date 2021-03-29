import { API_REQUEST } from "../../../helpers/helpers"

export default {
    async getUserData(context, payload){
        try {
          let params = {
              email: payload.email,
              password: payload.password
          }
          //Get the data from the API
          const response = await API_REQUEST("get", "users", null, params);
          if(response.length > 0){
            context.commit('loadUserData', response)
            return true
          }
          else{
            return false
          }
          
        } catch (error) {
          console.log(error)
        }
      }
  
}