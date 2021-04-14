<template>
    <div>
       <LoginForm 
        name="Sorsogon Provincial Government" 
        description="An online inventory monitoring for the Provincial Government"
        :isLoginFailed="isLoginFailed"
        :isLoading="isLoading"
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
               isLoginFailed : false,
               isLoading : false
           }
        },
        components: {
            LoginForm,
        },
        methods: {
           async login(email, password){
             this.isLoginFailed = false
             this.isLoading = true
             let isLoginSuccess = await store.dispatch({
                 type: "getUserData",
                 email, password
             })
             //redirect to dashboard if account found
             if(isLoginSuccess){
                this.isLoginFailed = false
                this.$router.push('/dashboard')
             }
             //Re enable login button
             else{
               setTimeout(() => {
                 this.isLoading = false
                 this.isLoginFailed = true
               }, 3000)
               
             }
             
           }
        }
    }
</script>

<style scoped>

</style>