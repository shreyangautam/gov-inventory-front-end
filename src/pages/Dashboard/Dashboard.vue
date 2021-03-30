<template>
  <div class="flex min-h-screen">
    <div class="w-60 flex-shrink-0">
      <Sidebar/>
    </div>
    <div class="flex flex-col w-full">
      <header class="text-white bg-blue-500 shadow-lg sticky left-auto top-0 right-0">
        <div class="h-12 px-6 flex relative items-center justify-between">
          <div class="flex items-center">
            <p class="text-white text-md font-semibold tracking-wider uppercase">Dashboard</p>
          </div>
          <div>
            <div class="flex flex-row space-x-2">
              <span>
                <a href=""><img src="../../assets/svg/bell.svg" alt="icon" class="h-4 w-4"></a>
              </span>
              <span>
                <a href=""><img src="../../assets/svg/settings.svg" alt="icon" class="h-4 w-4"></a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/Forms/Sidebar'
import { mapState } from "vuex";

export default {
  components: {
    Sidebar
  },

  computed: mapState(["userData"]),
  created(){
    console.log(this.userData)
  }
};
</script>

<style scoped>
</style>