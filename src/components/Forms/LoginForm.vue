<template>
  <div :class="mainContainer">
    <div :class="loginContainer">
      <div :class="leftContainer">
        <div>
          <img src="logo.png" :class="logo" />
        </div>
        <div :class="nameStyle">
          <a>{{ name }}</a>
        </div>
        <p :class="descriptionStyle">{{ description }}</p>
      </div>
      <div :class="rightContainer">
        <h3 :class="loginHeader">ACCOUNT LOGIN</h3>

        <h3 v-if="isLoginFailed">Invalid Email or Password</h3>
        <Loading/>
        <form :class="formStyle">
          <div :class="inputContainer">
            <label for="email" :class="inputLabel">Email address</label>
            <input
              type="email"
              id="email"
              autofocus
              :class="inputField"
              v-model="email"
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
              :class="inputField"
              v-model="password"
            />
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="remember" :class="rememberCheckBox" />
            <label for="remember" class="text-sm font-semibold text-gray-500"
              >Remember me</label
            >
          </div>
        </form>
        <button :class="submitButton" @click="$emit('login', email, password)">Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../Loading"
export default {
  data() {
    return {
      logo: "w-40 h-40 my-3.5",
      mainContainer:
        "flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center",
      loginContainer:
        "flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md",
      leftContainer:
        "p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly",
      nameStyle: "my-3 text-4xl font-bold tracking-wider text-center",
      descriptionStyle: "mt-6 font-normal text-center text-gray-300 md:mt-0",
      rightContainer: "p-5 bg-white md:flex-1",
      loginHeader: "my-4 text-2xl font-semibold text-gray-700",
      formStyle: "flex flex-col space-y-5",
      inputContainer: "flex flex-col space-y-1",
      inputLabel: "text-sm font-semibold text-gray-500",
      inputField:
        "px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200",
      forgotPasswordLink:
        "text-sm text-blue-600 hover:underline focus:text-blue-800",
      rememberCheckBox:
        "w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200",
      submitButton:
        "w-full mt-14 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4",

      //DATA
      email: "",
      password: "",
    };
  },
  props: {
    name: String,
    description: String,
    isLoginFailed: Boolean
  },
  components: {
    Loading
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    },
  },
};
</script>
