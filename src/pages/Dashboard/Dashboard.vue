<template>
  <div class="relative flex min-h-screen flex-col lg:flex-row">
    <div class="flex-shrink-0 w-full lg:w-64">
      <Sidebar/>
    </div>
    <div class="relative min-h-screen flex flex-col w-full bg-primary px-3 sm:px-8 py-4 lg:py-5 lg:pl-0">
      <div class="relative flex flex-col w-full min-h-full bg-gray-100 px-5 py-1 rounded-3xl">
          <Navigation/>
          <div class="relative h-auto">
           <router-view>
           </router-view>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/Forms/Sidebar'
import Navigation from '../../components/Forms/Navigation'
import { mapState } from "vuex";
import store from "../../store/store";

export default {
  components: {
    Sidebar,
    Navigation,
  },
  computed: mapState(["userData", "token"]),
  created(){
     store.dispatch('checkToken')
  },
  methods(){
  }
};
</script>

<style scoped>
</style>