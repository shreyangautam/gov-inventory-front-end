<template>
<!-- 
  @PROP NAME - config
    @ATTRIBUTES
     -buttonIcon <String> - name of the icon
     -buttonText <String> - buttonText
  
  @ACTIONS
  -buttonAction <Function> - trigger action in the component decleration
 -->
<div class="flex flex-row justify-between mb-3">
      <div>
        <!-- ADD USER BUTTON -->
        <button
          class="inline-flex items-right px-3 py-2 text-sm font-medium leading-6 text-white uppercase hover:transition-colors duration-150 ease-in bg-blue-800 rounded shadow-md hover:shadow-lg hover:bg-blue-700 focus:outline-none"
          @click="$emit('buttonAction')"
        >
          <Icon class="mt-1" :icon="config.buttonIcon"/>
          <span>&nbsp;{{config.buttonText}}</span>
        </button>
        <!-- MODAL -->

      </div>
      <div class="mt-1.5">
        <span class="text-sm text-gray-500 select-none"
          >Showing 1 to 10 of 150 results</span
        >
      </div>
      <div>
        <div class="relative w-64">
          <input
            type="text"
            id="password"
            class="w-full pl-3 pr-10 py-2 shadow-sm hover:shadow-md rounded-lg hover:border-gray-300 focus:outline-none focus:text-gray-500 focus:border-blue-800 transition-colors"
            placeholder="Search..."
          />
          <button
            class="block w-7 h-7 text-center text-xl leading-0 absolute top-1 right-2 text-gray-400 focus:outline-none hover:text-gray-600 transition-colors"
          >
            <Icon icon="search"/>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import Loading from '../Loading'
import PopupModal from '../../components/Alert/SuccessAlert'
import Icon from "../../assets/Icons"
import Input from "../Input/Input"
    export default {
      data() {
        return {
          openModal: false,
          testdata: '',
          fields: [
            {
              label: 'TEST',
              api_field: 'test',
              value: ""
            }
          ]
        }
      },
      methods: {
      },
       props: {
          config: Object
       },
       components:{
           Icon,
           PopupModal,
           Loading,
           Input,
       },
    }
</script>


