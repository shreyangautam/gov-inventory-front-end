<template>
  <div :class="[taskDetails.done ? 'reminder' : '','task']">
    <div class="col1">
    <h4>{{ taskDetails.task }} </h4> 
    <p>{{taskDetails.date}}</p>
    </div>
    <div class="col2">
    <i class="fas fa-times" @click="deleteTask(taskDetails.id)"></i>
    </div>
  </div>
</template>

<script>
import { API_REQUEST } from "../helpers/helpers"
import  store  from "../store/store";
export default {

  name: "TaskDetails",
  props: {
    taskDetails: Object,
  },
  methods: {
      async deleteTask(id) {
      const result = await API_REQUEST("delete", `/tasks/${id}`, null);
      console.log(result)
      store.dispatch('getTasks');
    },

  }
};
</script>

<style scoped>
.fas {
  color: red;
}
.col1{
  width: 80%;
}
.col2{
  width: 20%;
  text-align: right;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>