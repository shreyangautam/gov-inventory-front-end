<template>
     <div class="w-full flex flex-row  justify-end md:justify-between  items-center border-b border-gray-200 h-14 ">
            <div class="hidden md:block">
              <a href=""><span class="font-normal text-sm text-gray-400 font-custom">User Management</span></a>
              <font-awesome-icon class="h-3 w-3 text-gray-400 mx-2" icon="chevron-right"/>
              <a href=""><span class="font-medium text-sm text-blue-500 font-custom">Dashboard</span></a>
            </div>
            <div>
              <div class="flex justify-between items-center w-full gap-2">
                <div class="w-full flex justify-end">
                        <div class="w-full sm:w-full inline-block relative ">
                        <input type="" name="" class="leading-snug border border-gray-300 outline-none block w-full appearance-none bg-gray-200 text-sm text-gray-600 py-1 px-4 pl-8 rounded-3xl h-9" placeholder="Search.." />

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
                  <ProfileMenu/>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import ProfileMenu from '../Dropdown/ProfileMenu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell)

export default {
    props: Array,
    components: {
      ProfileMenu,
      "font-awesome-icon": FontAwesomeIcon,
    }
}
</script>