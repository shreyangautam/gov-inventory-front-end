<template>
 <!-- PC, Laptop -->
 <li class="hidden lg:block" v-for="module in modules" v-bind:key="module.id">
    <!-- APPLY CUSTOM BORDER -->
    <borderTop v-if="module.collapse"/>
    <div href="#" :class="[module.collapse ? menuListLinkActive1 : menuListLink1]" @click="module.collapse = !module.collapse">    
        <div>
            <span :class="menuListIcon1">
                <img src="../../assets/svg/profit-report.svg" alt="home icon" class="h-4 w-4 mr-1">
            </span>
            <span :class="menuListText">{{module.name}}</span>
        </div>
        <div>
            <font-awesome-icon class=" text-gray-300 mr-6" v-if="!module.collapse" icon="chevron-right" />
            <font-awesome-icon class=" text-gray-700 mr-6" v-else icon="chevron-down" />
        </div>
    </div>
    <!-- APPLY CUSTOM BORDER -->
    <borderBottom v-if="module.collapse"/>
        <!-- ITEMS -->
        <ul class="relative mx-4 mt-2 mb-5 inset-y-2 bg-primaryDark rounded-lg z-20" v-if="module.collapse">
            <li class="" v-for="specificPermission in module.specificPermissions" v-bind:key="specificPermission.id">
                <router-link :to="specificPermission.route">
                <a href="#" :class="[module.collapse ? notActive : active]">
                    <span :class="subListText">{{specificPermission.name}}</span>
                </a>
                </router-link>
            </li>
        </ul>
</li>

<!-- MOBILE -->

 <!-- PC, Laptop -->
 <li class="block lg:hidden" v-for="module in modules" v-bind:key="module.id">
    <div href="#" :class="menuListLink1Mobile" @click="module.collapse = !module.collapse">    
        <div>
            <span :class="menuListIcon1">
                <img src="../../assets/svg/profit-report.svg" alt="home icon" class="h-4 w-4 mr-1">
            </span>
            <span :class="menuListText">{{module.name}}</span>
        </div>
        <div>
            <arrowIconUp :class="[module.collapse ? 'transform transition-all ease-in rotate-180' : 'transform transition-all ease-out rotate-95']"/>
        </div>
    </div>
        <!-- ITEMS -->
     <transition       
      enter-active-class="animate-fade-in-down"
      leave-active-class="animate-fade-in-up"
    >

        <ul class="relative mx-4 mb-5 bg-primaryDark rounded-lg z-20" v-if="module.collapse">
            <li class="" v-for="specificPermission in module.specificPermissions" v-bind:key="specificPermission.id">
                <router-link :to="specificPermission.route">
                <a href="#" :class="[module.collapse ? notActive : active]" @click="$emit('closeMenu')">
                    <span :class="subListText">{{specificPermission.name}}</span>
                </a>
                </router-link>
            </li>
        </ul>
          </transition>
</li>
</template>

<script>
import { sideBarNavBorderTop, sideBarNavBorderBottom} from "../../helpers/uiHelpers"
import { ARROW_DOWN_SVG } from "../../assets/svg_collection"
export default {
    components: {
        "borderTop": sideBarNavBorderTop,
        "borderBottom": sideBarNavBorderBottom,
        "arrowIconUp": ARROW_DOWN_SVG
    },
    data() {
        return {

            menuListLinkActive1: 
                "relative flex flex-row justify-between select-none items-center h-12 outline-none bg-gray-100 text-gray-800  text-white ml-4 rounded-l-3xl",
            menuListLink1: 
                "relative flex flex-row z-20 transition duration-300 ease-in-out justify-between select-none items-center h-12 focus:outline-none text-gray-100 ml-4 rounded-l-3xl border-transparent",
            menuListIcon1: "inline-flex justify-center items-center ml-4",
            menuListText: "ml-2 font-normal text-md truncate",
            subListText: "ml-11 font-normal text-md truncate",
            active: "relative flex flex-row items-center h-10 shadow-inner focus:outline-none text-white opacity-90",
            notActive: "relative flex flex-row items-center h-10 shadow-inner focus:outline-none text-gray-300 hover:text-white opacity-90 hover:text-white",
            //UI Triggers
            collapse: true,
            

            //MOBILE
            menuListLink1Mobile: 
                "relative flex flex-row z-20 transition duration-300 ease-in-out justify-between select-none items-center h-12 focus:outline-none text-gray-100 ml-4 rounded-l-3xl border-transparent pr-8",

        }
    },
    props: {
        modules: Array
    },
}
</script>