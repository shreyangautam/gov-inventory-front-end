<template>
    <div>
       <LoginForm 
        name="PGSO INVENTORY SYSTEM" 
        description="An online inventory monitoring for the Provincial Government"
        :isLoginFailed="isLoginFailed"
        @login="login"
       />
    </div>
</template>

<script>
import store from "../../store/store";
import LoginForm from "../../components/Forms/LoginForm"
    export default {
        data(){
           return{
               isLoginFailed : false
           }
        },
        components: {
            LoginForm,
        },
        methods: {
           async login(email, password){
             let result = await store.dispatch({
                 type: "getUserData",
                 email, password
             })
             //redirect to dashboard if account founc
             if(result){
                this.$router.push('/')
             }
             else{
               this.isLoginFailed = true
             }
           }
        }
    }
</script>

<style scoped>

</style>