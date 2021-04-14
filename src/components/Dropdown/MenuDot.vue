<template>
    <div >
    <button
      @click="showDropdown = !showDropdown"
      class="relative z-10 block rounded-md text-gray-600 bg-white p-2 focus:outline-none hover:text-blue-800"
    >
      <menuIcon/>
    </button>
   
    <!-- DROPDOWN -->
    <transition
      enter-active-class="transition ease-out duration-150 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
    <div
      v-if="showDropdown"
      v-click-away="onClickAway"
      class="absolute py-2 w-28 bg-blue-800 rounded-md shadow-xl z-20"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white"
      >
        Edit
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white"
      >
        Delete
      </a>
    </div>
    </transition>
    </div>
</template>

<script>
import Icon from "../../assets/Icons"
import { MENU_DOTS } from "../../assets/svg_collection"
export default {
   data(){
       return{
          showDropdown: false,
       }
   },
   created(){
      
   },
    components: {
       Icon,
       'menuIcon': MENU_DOTS,
   },
   methods:{
      onClickAway(event) {
         this.showDropdown = !this.showDropdown
    }  
  }
};

</script>

<style>

</style>