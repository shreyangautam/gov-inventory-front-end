<template>
    <div v-for="task in tasks" v-bind:key="task.id">
         <TaskDetails :taskDetails="task" @click="toogleTask(task)"/>
    </div>
</template>

<script>
import TaskDetails from "./TaskDetails"
import { API_REQUEST } from "../helpers/helpers"   
import store from "../store/store"
    export default {
        name: "Tasks",
        components: {
           TaskDetails
        },
        props: {
            tasks: Array
        },
        methods: {
           async toogleTask(task){ 
           task = {...task, ["done"] : !task.done}
           const result = await API_REQUEST("put", `/tasks/${task.id}`, task);
           console.log(result)
           store.dispatch('getTasks');             
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>