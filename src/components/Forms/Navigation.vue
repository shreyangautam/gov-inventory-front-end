<template>
     <div class=" w-full flex flex-row justify-between items-center border-b border-gray-300 h-14 px-5">
            <div class="">
              <a href=""><span class="font-normal">User Management</span></a>
              <font-awesome-icon class="text-xs text-gray-400 mx-2" icon="chevron-right"/>
              <a href=""><span class="font-medium text-blue-600">Dashboard</span></a>
            </div>
            <div>
              <div class="flex justify-between items-center w-full gap-2">
                <div class="w-full flex justify-end px-2">
                        <div class="w-full sm:w-52 inline-block relative ">
                        <input type="" name="" class="leading-snug border border-gray-300 outline-none block w-full appearance-none bg-gray-200 text-sm text-gray-600 py-1 px-4 pl-8 rounded-2xl h-8" placeholder="Search.." />

                        <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-400">

                            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
                            <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
                            </svg>
                        </div>
                        </div>
                </div>
                <div>
                  <font-awesome-icon class="text-lg text-gray-500 mx-2" icon="bell"/>
                </div>
                <div class="flex items-center h-12 w-12">
                    <img src="../../assets/Me.jpg" alt="" class="rounded-full flex items-center justify-center border-2 border-gray-300">
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faBell)

export default {
    data() {
        return {

        }
    },
    components: {
      "font-awesome-icon": FontAwesomeIcon,
    }
}
</script>