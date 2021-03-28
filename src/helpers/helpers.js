import axios from "axios";
import { API_RESOURCE } from "./variables"


/*
@API_REQUEST - Import this function for API calls
*/
export const API_REQUEST = async (type, endpoint, data) => {

    try {
      if(type === "get"){
         const GET_REQUEST = await axios({
             method: type,
             url: `${API_RESOURCE}${endpoint}`,
         })
         let { data } = GET_REQUEST
         return data
      }
      else if(type === "delete"){     
          const DELETE_REQUEST = await axios({
            method: type,
            url: `${API_RESOURCE}${endpoint}`,
           })
          return DELETE_REQUEST
      }
      else if(type === "put"){
        const PUT_REQUEST = await axios({
          method: type,
          url: `${API_RESOURCE}${endpoint}`,
          data: data
         })
        return PUT_REQUEST
      }
    } catch (error) {
      console.log(error)
    }
}