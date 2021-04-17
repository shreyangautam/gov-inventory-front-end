<template>
  <div class="relative flex min-h-screen sm-x-2:flex-col lg:flex-row">
    <div class="flex-shrink-0 w-full lg:w-64">
      <Sidebar/>
    </div>
    <div class="relative flex flex-col w-full bg-primary pr-5 py-5 lg:pl-0 sm-x-2:pl-5">
      <div class="relative flex flex-col w-full h-auto bg-gray-100 p-8 rounded-3xl">
          <Navigation/>
           <router-view>
           </router-view>
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