<template>
  <div>
    <h1>This is the dashboard</h1>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  computed: mapState(["userData"]),
  created(){
    console.log(this.userData)
  }
};
</script>

<style scoped>
</style>