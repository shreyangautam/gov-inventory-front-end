import { API_REQUEST } from "../../../helpers/helpers"

export default {
    async getUsersList(context){
        try {
            const response = await API_REQUEST("get", "/v1/user/list", null, null, { 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            });
            if(response === 401){
                //clear the local storage to redirect to login again
                localStorage.clear();
                return 'UNAUTHORIZED'
            }
            else{
                context.commit('loadUsersList', response)
            }
            //return response
          
        } catch (error) {
            console.log(error)
        }
    }
}