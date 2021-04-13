<template>
  <div class="flex min-h-screen">
    <div class="w-64 flex-shrink-0">
      <Sidebar/>
    </div>
    <div class="relative flex flex-col w-full bg-primary pr-5 py-5 ">
      <div class="relative flex flex-col w-full bg-gray-100 p-8 rounded-3xl">
          <Navigation/>
           <router-view></router-view>
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