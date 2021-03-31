<template>
  <div class="flex min-h-screen">
    <div class="w-60 flex-shrink-0">
      <Sidebar/>
    </div>
    <div class="flex flex-col w-full">
      <Navigation/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/Forms/Sidebar'
import Navigation from '../../components/Forms/Navigation'
import { mapState } from "vuex";

export default {
  components: {
    Sidebar,
    Navigation
  },

  computed: mapState(["userData", "token"]),
  created(){
    console.log(this.userData)
    console.log(this.token)
  }
};
</script>

<style scoped>
</style>