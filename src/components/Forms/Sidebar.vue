<template>
    <div :class="containerSidebar">
        <div :class="Sidebar">
            <div class="flex justify-center bg-primary">
                <span class="py-4">
                    <img src="../../assets/logo.png" alt="Logo" class="h-32 w-32">
                </span>
            </div>
            <div :class="containerProfile" class="bg-secondary">
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
            </div>
            <div :class="containerMenu">
                <ul :class="menuList1">
                    <div class="px-5 mr-2 mb-2">
                        <div :class="headerContainer">
                            <div :class="dashboardHeader">Dashboard</div>
                        </div>
                    </div>
                    <li class="transition duration-100">
                        <a :class="menuListLink">
                            <span :class="menuListIcon">
                                <img src="../../assets/svg/profit-report.svg" alt="home icon" class="h-4 w-4 mr-1">
                            </span>
                            <span :class="menuListText">Reports</span>
                        </a>
                    </li>
                </ul>
                <ul :class="menuList2">
                    <div class="px-5 mr-2 mb-2">
                        <div :class="headerContainer">
                            <div :class="managementHeader">User Management</div>
                        </div>
                    </div>
                    <li class="transition duration-300">
                        <a href="#" :class="menuListLink">
                            <span :class="menuListIcon">
                                <img src="../../assets/svg/profile.svg" alt="home icon" class="h-5 w-5 mr-1">
                            </span>
                            <span :class="menuListText">Account</span>
                        </a>
                    </li>
                </ul>
           </div>
        </div>
    </div> 
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            containerSidebar: "min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50",
            Sidebar: "fixed flex flex-col top-0 left-0 w-60 bg-primary h-full shadow-lg",
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
            dashboardHeader: "flex font-semibold opacity-90 text-xs text-gray-200 text-blue-300 font-sans tracking-wide uppercase",
            managementHeader: "flex font-semibold opacity-90 text-xs text-gray-200 text-blue-300 font-sans tracking-wide uppercase",
            menuListLink: 
                "relative flex flex-row items-center h-10 pl-3 focus:outline-none hover:bg-tertiary text-gray-100 hover:text-white border-l-4 hover:border-blue-500 border-transparent",
            menuListIcon: "inline-flex justify-center items-center ml-4",
            menuListText: "ml-2 font-normal text-md truncate font-sans",
        }
    }
}
</script>