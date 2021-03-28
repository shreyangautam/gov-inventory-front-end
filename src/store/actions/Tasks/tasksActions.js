import { API_REQUEST } from "../../../helpers/helpers"

export default {
    async getTasks(context){
        try {
          //Get the data from the API
          const response = await API_REQUEST("get", "/tasks", null);
          //Pass the response in the mutation and update the state
          context.commit('loadTasks', response)
        } catch (error) {
          console.log(error)
        }
      }
  
}