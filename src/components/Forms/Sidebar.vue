<template>
    <div :class="containerSidebar">
        <div :class="Sidebar">
            <div class="flex justify-center bg-blue-500 border-b border-blue-500">
                <span class="py-3">
                    <img src="../../assets/logo.png" alt="Logo" class="h-40 w-40">
                </span>
            </div>
            <div :class="containerProfile">
                <img src="../../assets/Me.jpg" alt="" :class="imageProfile">
                <div :class="profileInfo">
                    <p :class="profileName">JED DYLAN LEE</p>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div class="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                            <p class="text-white text-xs mr-2">Online</p>
                        </div>
                        <!-- <span :class="profileBadge">Admin</span> -->
                    </div>
                </div>
            </div>
            <div :class="containerMenu">
                <ul :class="menuList">
                    <li class="px-4">
                        <div class="flex flex-row items-center h-10 pl-4 focus:outline-none bg-blue-800 shadow-md text-gray-100 hover:text-white rounded-lg border-transparent">
                            <img src="../../assets/dashboard.svg" alt="dashboard icon" class="h-4 w-4 mr-2">
                            <div :class="dashboardHeader">Dashboard</div>
                        </div>
                    </li>
                    <li class="px-4">
                        <a href="#" :class="menuListLink">
                            <span :class="menuListIcon">
                                <img src="../../assets/home.svg" alt="home icon" class="h-4 w-4 mr-1">
                            </span>
                            <span :class="menuListText">Home</span>
                        </a>
                    </li>
                </ul>
           </div>
        </div>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            containerSidebar: "min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50",
            Sidebar: "fixed flex flex-col top-0 left-0 w-64 bg-blue-700 h-full shadow-lg",
            containerProfile: "flex items-center pl-6 h-20 border-b border-blue-600 bg-blue-700",
            imageProfile: 
                "rounded-full h-10 w-10 flex items-center justify-center mr-3 border-2 border-green-500",
            profileInfo: "ml-1",
            profileName: "text-md font-medium tracking-wide truncate text-white font-sans",
            profileBadge: 
                "px-2 py-0.5 ml-auto text-xs font-semibold tracking-wide text-white bg-red-400 rounded-md",
            containerMenu: "overflow-y-auto overflow-x-hidden flex-grow",
            menuList: "flex flex-col py-6 space-y-1 uppercase",
            dashboardHeader: "flex font-semibold text-sm text-white my-4 font-sans uppercase",
            menuListLink: 
                "relative flex flex-row items-center h-10 focus:outline-none hover:bg-blue-500 text-gray-100 hover:text-white rounded-lg border-transparent",
            menuListIcon: "inline-flex justify-center items-center ml-4",
            menuListText: "ml-2 font-semibold text-sm tracking-wide truncate font-sans",
        }
    }
}
</script>