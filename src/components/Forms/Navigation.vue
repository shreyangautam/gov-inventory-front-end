<template>
    <div :class="containerBar">
      <header :class="navigationBar">
        <div :class="navigationBox">
          <div class="flex">
            <input
              type="search"
              id="search"
              placeholder="Search"
              :class="searchBar"
              v-model="searchBox"
            />
          </div>
          <div>
            <div :class="iconsBox">
              <span>
                <a href="#"><img src="../../assets/svg/bell.svg" alt="icon" class="h-4 w-4"></a>
              </span>
              <span class="border-r border-gray-200 pr-4">
                <a href="#"><img src="../../assets/svg/settings.svg" alt="icon" class="h-4 w-4"></a>
              </span>
              <div :class="logoutBox">
                  <a href="#" class="hover:underline flex items-center">
                    <span class="ml-2">
                        <img src="../../assets/svg/log-out.svg" alt="icon-logout" class="h-4 w-4 mr-1">
                    </span>
                    Logout
                  </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            containerBar: "flex flex-col w-full",
            navigationBar: "text-white bg-blue-500 shadow-lg sticky left-auto top-0 right-0",
            navigationBox: "h-12 px-6 flex relative items-center justify-between",
            searchBar: "px-4 transition duration-100 text-black border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400",
            iconsBox: "flex flex-row space-x-2 items-center",
            logoutBox: "flex flex-row items-center",
        }
    }
}
</script>