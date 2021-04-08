<template>
<UserList :data="usersList" :isLoading="isLoading"/>
</template>

<script>
import List from "../../components/List/List"
import store from "../../store/store";
import { mapState } from "vuex";
    export default {
        computed: mapState(["usersList"]),
        data(){
            return{
                isLoading: true
            }
        },
        components: {
            'UserList': List
        },
        created(){ 
            this.getUserList()
        },
        methods:{
           async getUserList(){
            let result = await store.dispatch('getUsersList')
            if(result === "UNAUTHORIZED"){
                this.$router.push('/')
            }
            else{
                setTimeout(() => this.isLoading = false, 2000) 
            }
           }
        }
    }

</script>

<style scoped>

</style>