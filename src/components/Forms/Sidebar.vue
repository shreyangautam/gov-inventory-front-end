<template>
    <div :class="containerSidebar">
        <div :class="Sidebar">
            <div class="flex justify-center bg-primary border-b border-primary mx-5">
                <span class="py-4">
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
                    <li class="" v-for="module in modules" v-bind:key="module.id">
                        <div href="#" class="transition duration-300 ease-in-out" :class="[module.collapse ? menuListLinkActive : menuListLink1]" @click="module.collapse = !module.collapse">    
                            <div>
                                <span :class="menuListIcon">
                                    <img src="../../assets/svg/profit-report.svg" alt="home icon" class="h-4 w-4 mr-1">
                                </span>
                                <span :class="menuListText">{{module.name}}</span>
                            </div>
                            <div>
                                <font-awesome-icon class=" text-gray-300 mr-4" v-if="!module.collapse" icon="chevron-right" />
                                <font-awesome-icon class=" text-gray-700 mr-4" v-else icon="chevron-down" />
                            </div>
                        </div>
                        <ul class="mx-4 mt-2 inset-y-2 bg-primaryDark rounded-lg" v-if="module.collapse">
                         <li class="" v-for="specificPermission in module.specificPermissions" v-bind:key="specificPermission.id">
                            <a href="#" :class="[module.collapse ? notActive : active]">
                                <span :class="menuListIcon">
                                    <img src="../../assets/svg/profit-report.svg" alt="home icon" class="h-4 w-4 mr-1">
                                </span>
                                <span :class="menuListText">{{specificPermission.name}}</span>
                            </a>
                         </li>
                        </ul>
                    </li>
                </ul>
                <ul :class="menuList2">
                    <div class="px-5 mr-2 mb-2">
                        <div :class="headerContainer">
                            <div :class="managementHeader">Others</div>
                        </div>
                    </div>
                    <li class="transition duration-300">
                        <router-link to="/user-management">
                        <a href="#" :class="menuListLink2">
                            <span :class="menuListIcon">
                                <img src="../../assets/svg/management.svg" alt="home icon" class="h-5 w-5 mr-1">
                            </span>
                            <span :class="menuListText">User Management</span>
                         
                        </a>
                        </router-link>
                    </li>
                </ul>
           </div>
        </div>
    </div> 
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faChevronDown)

export default {
    components: {
       "font-awesome-icon": FontAwesomeIcon,
    },
    data() {
        return {
            containerSidebar: "min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50",
            Sidebar: "fixed flex flex-col top-0 left-0 w-64 bg-primary h-full shadow-lg",
            provincialLogo: "h-32 w-32",
            containerProfile: "flex items-center pl-6 h-20",
            imageProfile: 
                "rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500",
            profileInfo: "pl-1",
            profileName: "text-sm font-medium tracking-wide truncate text-white font-sans uppercase",
            profileBadge: 
                "px-2 py-0.5 ml-auto text-xs font-semibold tracking-wide text-white bg-red-400 rounded-md",
            containerMenu: "overflow-y-auto overflow-x-hidden flex-grow",
            menuList1: "flex flex-col pt-6",
            menuList2: "flex flex-col pt-4",
            headerContainer: 
                "flex flex-row items-center h-8 focus:outline-none text-gray-100 hover:text-white rounded-md border-transparent",
            dashboardHeader: "select-none flex font-semibold opacity-90 text-xs text-gray-200 text-blue-300 font-custom tracking-wide uppercase",
            managementHeader: "flex font-semibold opacity-90 text-xs text-gray-200 text-blue-300 font-sans tracking-wide uppercase",
            menuListLink1: 
                "relative flex flex-row justify-between select-none items-center h-12 focus:outline-none hover:bg-tertiary text-gray-100 hover:text-white ml-4 rounded-l-3xl border-transparent",
            menuListLink2: 
                "relative flex flex-row items-center h-10 select-none focus:outline-none hover:bg-tertiary text-gray-100 hover:text-white border-l-4 border-transparent",
            menuListLinkActive: 
                "relative flex flex-row justify-between select-none items-center h-12 outline-none bg-gray-100 text-gray-800  text-white ml-4 rounded-l-3xl",
            active: "relative flex flex-row items-center h-10 shadow-inner focus:outline-none text-white opacity-90",
            notActive: "relative flex flex-row items-center h-10 shadow-inner focus:outline-none text-gray-300 hover:text-white opacity-90 hover:text-white",
            menuListIcon: "inline-flex justify-center items-center ml-4",
            menuListText: "ml-2 font-normal text-md truncate font-custom",
            
            //UI Triggers
            collapse: true,
        }
    
    },
    props: {
        modules: Array
    },
    created(){
        console.log(this.modules)
    },
}
</script>