<template>
  <transition       
      enter-active-class="animate-fade-in-down">
  <div :class="cardContainer" v-if="showCards">
    <div :class="cardBody">
      <div :class="cardCover">
        <img
          src="https://images.unsplash.com/photo-1575320181282-9afab399332c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          class="object-cover w-full rounded-lg rounded-b-none md:h-56"
        />
      </div>
      <!-- MENU -->
      <div :class="cardMenu">
        <div>
          <MenuDropdown />
        </div>
        <button disabled :class="[isActive ? (isOnline ? accountStatusOnline : accountStatusOffline) : accountStatusInActive]">
          {{ isActive ? (isOnline ? "ONLINE" : "OFFLINE") : "INACTIVE" }}
        </button>
      </div>
      <!-- MENU -->
      <div :class="userInfoBasic">
        <div class="customPosition">
          <img :class="userImage" src="../../assets/svg/profile.svg" />
        </div>
        <span :class="userName"> {{ firstName }} {{ lastName }} </span>
        <span :class="userPosition"> User Position </span>
      </div>
      <p :class="userOtherInfo">
        <emailIcon class="text-blue-800" icon="envelope" /><span
          >&nbsp;&nbsp;{{ email }}&nbsp;&nbsp;</span
        >
        <phoneIcon class="text-blue-800" icon="phone-alt" /><span
          >+639 XXX XXXX</span
        >
      </p>
    </div>
  </div>
  </transition>
</template>

<script>
import MenuDropdown from "../Dropdown/MenuDot";
import { EMAIL_SVG, PHONE_SVG } from "../../assets/svg_collection";
import Icons from "../../assets/Icons";
export default {
  props: {
    email: String,
    firstName: String,
    lastName: String,
    isOnline: Number,
    isActive: Number,
  },
  components: {
    emailIcon: EMAIL_SVG,
    phoneIcon: PHONE_SVG,
    MenuDropdown,
  },
  mounted(){
     this.showCards = true
  },
  data() {
    return {
      //Styles
      cardContainer: "px-3 flex w-full py-3 lg:w-1/2 xl:w-1/3",
      cardBody:
        "flex flex-col items-stretch min-h-full pb-4 mb-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-175 ease-in",
      cardCover: "md:flex-shrink-0",
      cardMenu: "flex items-center justify-between px-4 py-2 overflow-hidden",
      accountStatusOnline:
        "inline-block px-3 py-0 text-xs font-bold leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded-full",
      accountStatusOffline:
        "inline-block px-3 py-0 text-xs font-bold leading-6 text-center text-gray-400 uppercase transition bg-transparent border-2 border-gray-400 rounded-full",
      accountStatusInActive:
        "inline-block px-3 py-0 text-xs font-bold leading-6 text-center text-red-500 uppercase transition bg-transparent border-2 border-red-500 rounded-full",
      userInfoBasic:
        "flex flex-col flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto",
      userImage: "h-24 w-24 md rounded-full relative",
      userName: "text-2xl font-bold tracking-normal text-gray-600",
      userPosition: "text-base tracking-normal text-gray-500",
      userOtherInfo:
        "flex flex-row flex-wrap w-full py-2 overflow-hidden justify-center text-sm text-gray-700",

      //UI Config
      showCards: false
    };
  },
};
</script>
