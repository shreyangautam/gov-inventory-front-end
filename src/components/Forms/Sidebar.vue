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
                <ul :class="menuList">
                    <div class="px-6 mr-2 mb-2">
                        <div :class="headerContainer" class="bg-secondary">
                            <img src="../../assets/svg/dashboard.svg" alt="dashboard icon" class="h-3 w-3 mr-2">
                            <div :class="dashboardHeader">Dashboard</div>
                        </div>
                    </div>
                    <li class="px-6 mr-2 transition duration-100">
                        
                        <a :class="menuListLink">
                            <span :class="menuListIcon">
                                <img src="../../assets/svg/home.svg" alt="home icon" class="h-3 w-3 mr-1">
                            </span>
                            <span :class="menuListText">Home</span>
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
            menuList: "flex flex-col py-6 space-y-1 uppercase",
            headerContainer: 
                "flex flex-row items-center h-8 pl-4 focus:outline-none bg-blue-800 shadow-md text-gray-100 hover:text-white rounded-md border-transparent",
            dashboardHeader: "flex font-semibold text-xs text-white my-4 font-sans tracking-widest uppercase",
            menuListLink: 
                "relative flex flex-row items-center h-8 focus:outline-none hover:bg-tertiary text-gray-100 hover:text-white rounded-md border-transparent",
            menuListIcon: "inline-flex justify-center items-center ml-4",
            menuListText: "ml-2 font-semibold text-xs tracking-widest truncate font-sans",
        }
    }
}
</script>