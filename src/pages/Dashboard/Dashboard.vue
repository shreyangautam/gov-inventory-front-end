<template>
  <div class="flex min-h-screen">
    <div class="w-64 flex-shrink-0">
      <Sidebar/>
    </div>
    <div class="flex flex-col w-full">
      <header class="text-white bg-blue-700 shadow-lg sticky left-auto top-0 right-0">
        <div class="h-14 px-6 flex relative items-center justify-between">
          <div class="flex items-center">
            <img src="../../assets/logo.png" alt="" class="h-10 w-10 mr-3 object-contain">
            <h1 class="text-lg font-bold font-sans tracking-wide uppercase">PGSO Inventory</h1>
          </div>
          <div>
            <ul class="flex flex-row">
              <li>Home</li>
            </ul>
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