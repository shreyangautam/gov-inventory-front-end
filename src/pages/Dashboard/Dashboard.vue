<template>
  <div class="flex min-h-screen">
    <div class="w-64 flex-shrink-0">
      <Sidebar :modules="modules"/>
    </div>
    <div class="relative flex flex-col w-full bg-primary pr-8 py-5">
      <div class="relative flex flex-col w-full bg-gray-100 rounded-3xl h-screen">
          <!-- BRAD DIDI MO IBUTANG AN COMPONENT SAN NAVIGATION -->
          <h1 class="mt-6 ml-6 font-bold uppercase tracking-wide">Dashboard</h1>
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
  data(){
    return{
      modules: [
        {
          id: 1,
          name: "PBAC ACOCOUNT",
          collapse: false,
          specificPermissions: [
             {
               id: 1,
               name: "Purchase Request"
             },
             {
               id: 2,
               name: "Second Modules"
             }

          ]
        },
                {
          id: 2,
          name: "PGSO",
          collapse: false,
          specificPermissions: [
             {
               id: 1,
               name: "Purchase Request"
             },
             {
               id: 2,
               name: "Second Modules"
             }

          ]
        }

      ]
    }
  },
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