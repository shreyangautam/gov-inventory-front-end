<template>
  <div class="flex min-h-screen">
    <div class="w-60 flex-shrink-0">
      <Sidebar/>
    </div>
    <Navigation/>
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

  computed: mapState(["userData"]),
  created(){
    console.log(this.userData)
  }
};
</script>

<style scoped>
</style>