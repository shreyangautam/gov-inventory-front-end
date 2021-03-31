import { API_REQUEST } from "../../../helpers/helpers"

export default {
    async getUserData(context, payload){
        try {
          let bodyFormData = new FormData();
          bodyFormData.set('email', payload.email);
          bodyFormData.set('password', payload.password);

          //Get the data from the API
          const response = await API_REQUEST("post", "/login", bodyFormData, null, { 'Content-Type': 'multipart/form-data' });
          
          if(response){
            console.log(response)
            context.commit('loadUserData', response.data.user_auth)
            context.commit('loadToken', response.data.token)
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