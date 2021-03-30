<template>
    <div class="flex flex-col w-full">
      <header class="text-white bg-blue-500 shadow-lg sticky left-auto top-0 right-0">
        <div class="h-12 px-6 flex relative items-center justify-between">
          <div class="flex items-center">
            <p class="text-white text-md font-semibold tracking-wider uppercase">Dashboard</p>
          </div>
          <div>
            <div class="flex flex-row space-x-2 items-center">
              <span>
                <a href="#"><img src="../../assets/svg/bell.svg" alt="icon" class="h-4 w-4"></a>
              </span>
              <span class="border-r border-gray-200 pr-4">
                <a href="#"><img src="../../assets/svg/settings.svg" alt="icon" class="h-4 w-4"></a>
              </span>
              <div class="flex flex-row items-center">
                  <span class="ml-2">
                      <img src="../../assets/svg/log-out.svg" alt="icon-logout" class="h-4 w-4 mr-1">
                  </span>
                  <a href="#" class="hover:underline">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
export default {
    
}
</script>