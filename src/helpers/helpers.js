import axios from "axios";
import { API_RESOURCE } from "./variables"


/**
* API_REQUEST
* converts string to title case - front end to Front End
* @param {*} type - str, "can be get, post, delete, put"
* @param {*} endpoint - str, api endpoint
* @param {*} data - object, data to be passed
* @param {*} params - object, search parameters
* @headers {*} headers - object, the request header if any
* return data of the response or null
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

/**
* clearAllFields
* clear all the values in the fields
* @param {*} fieldsArray - array, must be array of fields
* return array with value errased or null
*/
export const clearAllFields = (fieldsArray) => {
 let copy = fieldsArray
 fieldsArray?.map((data,idx) => {
     copy[idx].value = ""
     copy[idx].isError = false
 })
 return copy ? copy : null
   
}

/**
* resetStepperData
* clear all the values in the fields
* @param {*} stepperDataArray - array, must be array of fields
* return array with value errased or null
*/
export const resetStepperData = (stepperDataArray) => {
  console.log(stepperDataArray)
  let copy = stepperDataArray
  
    stepperDataArray?.map((data,idx) => {  
      if(idx == 0){
        copy[idx].isActive = true,
        copy[idx].isNext = false
      }
      if(idx == 1){
        copy[idx].isActive = false,
        copy[idx].isNext = true
      }
      if(idx > 1){
        copy[idx].isActive = false,
        copy[idx].isNext = false
  
      }
    })  
    return copy ? copy : null
   
 }

/**
* formValidation
* search for empty values in the field array (if required)
* @param {*} fieldsArray - array, must be array of fields
* return string as erro message or true if all fields have values
*/

export const formValidation = (fieldsArray) => {
  
  let errorCounter = 0
  fieldsArray?.map((data) => {
     if(data.isRequired){
        errorCounter = !data.value && errorCounter+1
     }
  })

  if(errorCounter > 0){
    return "Please fill out all the required fields"
  }
  else{
    return true
  }

}

/**
* alertMessageSelector
* search for empty values in the field array (if required)
* @param {*} selector - string, type of message you want
* return string as message or null the selector doenst match any records
*/

export const alertMessageSelector = (fieldsArray) => {
  
  let errorCounter = 0
  fieldsArray?.map((data) => {
     if(data.isRequired){
        errorCounter = !data.value && errorCounter+1
     }
  })

  if(errorCounter > 0){
    return "Please fill out all the required fields"
  }
  else{
    return true
  }

}