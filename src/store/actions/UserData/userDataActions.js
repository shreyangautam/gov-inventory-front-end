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
            localStorage.setItem('token', response.data.token)
            context.commit('loadToken', response.data.token)
            return true
          }
          else{
            return false
          }
          
        } catch (error) {
          console.log(error)
        }
    },

    checkToken(context){
       if(localStorage.getItem('token')){
         console.log(localStorage.getItem('token'))
         context.commit('loadToken', localStorage.getItem('token'))
       }
    },

    async logout(context) {
        try {
          const response = await API_REQUEST("post", "/logout",null, null, {
            'Accept': 'application/json', 
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          });
          if(response.status == 200) {
            console.log(response)
            localStorage.clear()
          }
         
        } catch (error) {
          console.log(error)
        }
    },

}
    // authLogout (context) {
    //   if(localStorage.removeItem('token')){
    //     console.log(localStorage.removeItem('token'))
    //     context.commit('loadToken', localStorage.removeItem('token'))
    //   }
    // }