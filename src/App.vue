<template>
  <div class="container">
    <Header title="Task Tracker" />
    <h1 v-if="showLoad">...LOADING</h1>
    <Tasks :tasks="tasks" />
  </div>
</template>

<script>
//COMPONENTS
import Header from "./components/Header";
import Tasks from "./components/Tasks";

//HELPERS
//import { API_REQUEST } from "./helpers/helpers";

//VUEX
import store from "./store/store";
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      showLoad: false,
    };
  },
  components: {
    Header,
    Tasks,
  },
  created() {
    this.showLoad = true;
    this.getTasks();
  },
  computed: mapState(["tasks"]),
  methods: {
    async getTasks() {
      await store.dispatch("getTasks");
      this.showLoad = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
