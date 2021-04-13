<template>
    <div :class="containerSidebar">
        <div :class="Sidebar">
            <div class="flex justify-center bg-primary border-b border-primary mx-5">
                <span class="py-8">
                    <img src="../../assets/logo.png" alt="Logo" :class="provincialLogo">
                </span>
            </div>
            <!-- <div :class="containerProfile" class="bg-secondary">
              <img src="../../assets/Me.jpg" alt="" :class="imageProfile">
                 <div :class="profileInfo">
                    <p :class="profileName">Jed Dylan Lee</p>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div class="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                            <p class="text-white text-xs mr-2">Online</p>
                        </div>
                    </div>
                </div>
            </div> -->
            <div :class="containerMenu">
                <ul :class="menuList1">
                    <div class="px-5 mr-2 mb-2">
                        <div :class="headerContainer">
                            <div :class="dashboardHeader">Modules</div>
                        </div>
                    </div>
                    
                    <Modules :modules="modules"/>
                </ul>
                <ul :class="menuList2">
                    <div class="px-5 mr-2 mb-2">
                        <div :class="headerContainer">
                            <div :class="managementHeader">Others</div>
                        </div>
                    </div>
                    <li class="transition duration-300">
                        <router-link to="/user-management">
                        <borderTop v-if="isUserMgtActive"/>
                        <a href="#" :class="[isUserMgtActive ? menuListLinkActive2 : menuListLink2]" @click="isUserMgtActive = true">
                            <span :class="menuListText"><font-awesome-icon icon='user-cog' class="ml-2 mr-3"/>User Management</span>
                        </a>
                        <borderBottom v-if="isUserMgtActive"/>
                        </router-link>
                    </li>
                </ul>
           </div>
        </div>
    </div> 
</template>

<script>
import Modules from '../Accordion/Modules'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faChevronDown, faUserCog)

export default {
    components: {
       "font-awesome-icon": FontAwesomeIcon,
       Modules,
    },
    data() {
        return {
            containerSidebar: "h-full flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 overscroll-none",
            Sidebar: "relative flex flex-col top-0 left-0 w-64 bg-primary h-full shadow-lg overscroll-none",
            provincialLogo: "h-32 w-32",
            containerProfile: "flex items-center pl-6 h-20",
            imageProfile: 
                "rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500",
            profileInfo: "pl-1",
            profileName: "text-sm font-medium tracking-wide truncate text-white font-sans uppercase",
            profileBadge: 
                "px-2 py-0.5 ml-auto text-xs font-semibold tracking-wide text-white bg-red-400 rounded-md",
            containerMenu: "overflow-y-auto overflow-x-hidden bg-primary flex-grow h-full",
            menuList1: "flex flex-col pt-6",
            menuList2: "flex flex-col pt-4",
            headerContainer: 
                "flex flex-row items-center h-8 focus:outline-none text-gray-100 hover:text-white rounded-md border-transparent",
            dashboardHeader: "select-none flex font-semibold opacity-90 text-xs text-gray-200 text-blue-300 font-custom tracking-wide uppercase",
            managementHeader: "flex font-semibold opacity-90 text-xs text-gray-200 text-blue-300 font-sans tracking-wide uppercase",
          
            menuListLink2: 
                "relative flex flex-row z-20 select-none items-center h-12 focus:outline-none hover:bg-tertiary text-gray-100 hover:text-white ml-4 rounded-l-3xl border-transparent",
         
            menuListLinkActive2: 
                "relative flex flex-row select-none items-center h-12 outline-none bg-gray-100 text-gray-800  text-white ml-4 rounded-l-3xl",
           
            menuListText: "ml-2 font-normal text-md truncate",
          
            
            //UserManagement
            isUserMgtActive: false,

            modules: [
                {
                id: 1,
                name: "PBAC Account",
                collapse: false,
                    specificPermissions: [
                        {
                        id: 1,
                        name: "Purchase Request"
                        },
                        {
                        id: 2,
                        name: "Second Modules"
                        }

                    ]
                },
                        {
                id: 2,
                name: "PGSO",
                collapse: false,
                    specificPermissions: [
                        {
                        id: 1,
                        name: "Purchase Request"
                        },
                        {
                        id: 2,
                        name: "Second Modules"
                        }

                    ]
                }

            ],
        }
    },
    created(){
        console.log(this.modules)
    },
}
</script>

<style>
/* FOR CUSTOM SIDEBAR BORDER */
.custom{
    margin-top: -40px; 
}
.customBottom{
    margin-bottom: -40px;
}
</style>