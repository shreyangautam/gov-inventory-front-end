export default {
    //PUT ALL TASK MUTATIONS HERE
    loadTasks (state, payload){
        return state.tasks = [...payload];
    }
  
}