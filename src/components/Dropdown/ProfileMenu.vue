<template>
    <div >
    <button
      @click="showProfDropdown = !showProfDropdown"
      class="relative z-10 block rounded-md text-gray-600 focus:outline-none hover:text-blue-800"
    >
       <span class="cursor-pointer">
        <img src="../../assets/Me2.jpg" alt="" class="rounded-full flex items-center object-cover justify-center border-2 h-9 w-9 border-gray-200">
       </span>
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
      v-if="showProfDropdown"
      v-click-away="onClickAway"
      class="absolute right-6 mt-2 py-4 w-56 bg-primary rounded-md shadow-2xl z-20"
    >
      <div class="px-6 pb-4 border-b border-primary">
          <a href="" class="flex flex-col">
            <span class="text-white font-medium tracking-wider font-custom text-sm mx uppercase">Jed Dylan Lee</span>
            <span class="text-white font-custom opacity-80 text-xs">Jr. Frontend Developer</span>
          </a>
      </div>
       <router-link to="/profile">
      <a
        href="#"
        class="block px-2.5 py-2 mx-4 mt-2 rounded-md text-sm capitalize text-gray-300 font-custom hover:bg-primaryDark hover:text-white"
      > 
        <span>
        <font-awesome-icon icon="user" class="mr-2 text-sm"/> Profile
        </span>
      </a>
       </router-link>
      <a
        href="#"
        class="flex justify-between px-2 py-2 mx-4 rounded-md text-sm capitalize text-gray-300 font-custom hover:bg-primaryDark hover:text-white"
      >
        <span class="flex">
        <settingIcon icon="gear" class="mr-2 text-sm"/> Settings
        </span>
        <!--- Switch --->
        <Switch :switchValue="switchValue" @switchValueChanged="switchValue = !switchValue"/>
      </a>
      <a
        href="#"
        class="block px-6 pt-2 my-1 text-sm capitalize text-gray-300 font-custom hover:text-white border-t border-primary"
        @click="logout"
      >
        <span class="flex pt-1 ml-1">
        <logoutIcon icon="box-right-arrow" class="mr-2 text-sm"/> Logout
        </span> 
      </a>
    </div>
    </transition>
    </div>
</template>

<script>
import { SETTING_SVG, LOGOUT_SVG } from '../../assets/svg_collection'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Switch from '../Accordion/Switch'

library.add(faUser)

export default {
    data() {
        return {
            showProfDropdown: false,
            switchValue: true,
        }  
    },
    components: {
        'font-awesome-icon': FontAwesomeIcon,
        'settingIcon': SETTING_SVG,
        'logoutIcon': LOGOUT_SVG,
        Switch,
    },
    methods:{
        onClickAway(event) {
            this.showProfDropdown = !this.showProfDropdown
        },

        logout: function () {
          this.$store.dispatch('logout')
          .then(() => {
            this.$router.push('/login')
          })
        }
    }
}
</script>