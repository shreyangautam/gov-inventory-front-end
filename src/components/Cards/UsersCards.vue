<template>
<div class="transition-all px-3 duration-150 flex w-full py-3 lg:w-1/2 xl:w-1/3">
        <div
          class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
        >
          <div class="md:flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1575320181282-9afab399332c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Blog Cover"
              class="object-cover w-full rounded-lg rounded-b-none md:h-56"
            />
          </div>
          <!-- SECOND LINE -->
          <div
            class="flex items-center justify-between px-4 py-2 overflow-hidden"
          >
            
            <div>
               <MenuDropdown/>  
            </div>
            
            
            <button
              class="inline-block px-3 py-0 text-xs font-medium leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded-full"
            >
              ONLINE
            </button>

          </div>
          <!-- SECOND LINE -->
          <div
            class="flex flex-col flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto"
          >
            <div class="customPosition">
              <img
                class="h-24 w-24 md rounded-full relative"
                src="https://www.flaticon.com/svg/vstatic/svg/3135/3135715.svg?token=exp=1617521332~hmac=4b71023bb6a80a0c95d49beb29c81288"
                alt=""
              />
            </div>

            <span class="text-2xl font-bold tracking-normal text-gray-600">
              Jephunneh Viernes
            </span>
            <span class="text-base tracking-normal text-gray-500">
              Jr. Frontend Developer
            </span>
          </div>
          <!-- <hr class="border-gray-300" /> -->
          <p
            class="flex flex-row flex-wrap w-full py-2 overflow-hidden justify-center text-sm text-gray-700"
          >
            <emailIcon class="text-blue-800" icon="envelope"/><span
              >&nbsp;&nbsp;jephv4@gmail.com&nbsp;&nbsp;</span
            >
            <phoneIcon class="text-blue-800" icon="phone-alt"/><span>+639 XXX XXXX</span>
          </p>
        </div>
  </div>    
</template>

<script>
import MenuDropdown from "../Dropdown/MenuDot"
import { EMAIL_SVG, PHONE_SVG } from "../../assets/svg_collection"
import Icons from "../../assets/Icons"   
    export default {
        components:{
           'emailIcon': EMAIL_SVG,
           'phoneIcon': PHONE_SVG,
           MenuDropdown
        }

    }
</script>

<style>

</style>