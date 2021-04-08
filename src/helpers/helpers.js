import axios from "axios";
import { API_RESOURCE } from "./variables"


/*
@API_REQUEST - Import this function for API calls
*/
export const API_REQUEST = async (type, endpoint, data, params, headers) => {

    try {
      if(type === "get"){
        console.log(params)
         const GET_REQUEST = await axios({
             method: type,
             url: `${API_RESOURCE}${endpoint}`,
             params: params ? {...params} : '',
             headers: headers ? headers : ''
         })
         let { data } = GET_REQUEST
         return data
      }

      else if(type === "post"){
        const POST_REQUEST = await axios({
          method: type,
          url: `${API_RESOURCE}${endpoint}`,
          data: data,
          headers: headers
         })
        return POST_REQUEST
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
      return error.response.status
    }
}