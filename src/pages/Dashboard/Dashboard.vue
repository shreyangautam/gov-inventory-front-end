<template>
  <div class="flex min-h-screen">
    <div class="w-60 flex-shrink-0">
      <Sidebar/>
    </div>
    <div class=" relative flex flex-col w-full">
      <Navigation/>
      <h1 class="mt-6 ml-6 font-bold uppercase tracking-wide">Dashboard</h1>
      <router-view></router-view>
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
    Navigation
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