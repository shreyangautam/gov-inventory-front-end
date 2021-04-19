<template>
  <div :class="mainContainer">
    <div :class="loginContainer">
      <div :class="leftContainer">
        <div class="w-full px-20 py-12 flex flex-col">
          <div class="flex justify-center items-center">
            <div :class="nameStyle">
              <img src="logo.png" :class="logo" />
              <a>{{ name }}</a>
            </div>
          </div>
          <div>
            <img src="../../assets/svg2/Working.svg" alt="working" class="rounded-3xl my-6">
          </div>
          <p :class="descriptionStyle">{{ description }}</p>
        </div>
      </div>
      <div :class="rightContainer" class="right relative">
        <div class="w-full relative px-16 lg:px-48 py-16 lg:py-32">
          <div class="lg:px-auto 2xl:my-auto">
          <h3 :class="loginHeader">ACCOUNT LOGIN</h3>

          <h3 :class="invalidMsg" v-if="isLoginFailed">{{isLoginFailed ? 'Invalid Email or Password' : ''}}</h3>
          <Loading v-if="isLoading"/>
          <div :class="space" v-if="!isLoading && !isLoginFailed"></div>
          <form :class="formStyle">
            <div :class="inputContainer">
              <label for="email" :class="inputLabel">Email Address</label>
              <input
                type="email"
                id="email"
                autofocus
                class="bg-gray-100"
                :class="[isLoginFailed ? inputFieldInvalid : inputField]"
                v-model="email"
                @keydown="nameKeydown($event)"
              />
            </div>
            <div :class="inputContainer">
              <div class="flex items-center justify-between">
                <label for="password" :class="inputLabel">Password</label>
                <a href="#" :class="forgotPasswordLink">Forgot Password?</a>
              </div>
              <input
                type="password"
                id="password"
                class="bg-gray-100"
                :class="[isLoginFailed ? inputFieldInvalid : inputField]"
                v-model="password"
                @keydown="nameKeydown($event)"
              />
            </div>
            <div class="flex items-center space-x-2">
              <input type="checkbox" id="remember" :class="rememberCheckBox" />
              <label for="remember" class="text-sm font-semibold text-white"
                >Remember me</label
              >
            </div>
          </form>
          <button 
          :class="[isLoading ? submitButtonDisabled : submitButton]" 
          @click="$emit('login', email, password)" 
          :disabled="isLoading">{{isLoading ? 'Logging in...' : 'Log in'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../Loading"
export default {
  data() {
    return {
      logo: "w-24 h-24 my-3.5",
      invalidMsg: "mb-5 text-red-500",
      mainContainer:
        "flex items-center w-full h-screen bg-primary xl:justify-center",
      space: "pb-8",
      loginContainer:
        "relative flex flex-col overflow-hidden bg-primary shadow-lg max md:flex-row md:flex-1 w-full xl:w-screen xl:h-screen sm:h-screen",
      leftContainer:
        "w-full h-screen hidden md:block my-auto mx-auto text-white bg-primary md:w-3/6 md:flex-shrink-0 md:justify-evenly flex justify-center",
      nameStyle: "text-3xl font-bold tracking-wider text-center gap-2 flex justify-center items-center",
      descriptionStyle: "mt-6 font-normal text-center text-gray-300 md:mt-0",
      rightContainer: "w-full h-screen bg-primaryDark md:flex-1",
      loginHeader: "my-4 text-2xl font-semibold text-white",
      formStyle: "flex flex-col space-y-5",
      inputContainer: "flex flex-col space-y-1 w-full",
      inputLabel: "text-sm font-semibold text-white",
      inputField:
        "px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500",
      inputFieldInvalid:
      "px-4 py-2 transition duration-300 border-2 border-red-500 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-red-200",

      forgotPasswordLink:
        "text-sm text-blue-400 hover:underline focus:text-blue-800",
      rememberCheckBox:
        "w-4 h-4 transition duration-500 rounded focus:outline-none",
      submitButton:
        "w-full mt-14 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4",
      submitButtonDisabled:
        "w-full mt-14 px-4 py-2 text-lg font-semibold text-white bg-blue-400 rounded-md",
      //DATA
      email: "",
      password: "",
    };
  },
  props: {
    name: String,
    description: String,
    isLoginFailed: Boolean,
    isLoading: Boolean
  },
  components: {
    Loading
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    },
    nameKeydown(e){
      if(e.key == "Enter"){
        this.$emit('login', this.email, this.password)
      }
    }
  },
};
</script>

<style scoped>
.right {
  border-top-left-radius: 75px;
}
</style>
