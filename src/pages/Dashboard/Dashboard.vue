<template>
  <div>
    <Sidebar/>
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