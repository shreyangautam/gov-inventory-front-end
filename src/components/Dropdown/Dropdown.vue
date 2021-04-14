<template>
  <div>
    <label class="text-sm font-semibold text-gray-500 pl-1">{{ label }}</label>
    <button
      @click="showDropdown = !showDropdown"
      class="flex flex-row relative z-10 justify-between rounded-lg border-2 text-gray-600 border-gray-200 focus:outline-none focus:border-blue-500 p-3 w-full"
    >
     {{selectedData ? selectedData : `Select ${name}`}}
      <menuIcon />
    </button>

    <!-- DROPDOWN -->
    <transition
      enter-active-class="transition ease-out duration-150 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showDropdown"
        v-click-away="onClickAway"
        class="absolute py-2 w-60 bg-blue-800 rounded-md shadow-xl z-20 my-2"
      >
        <a
          href="#"
          class="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-900 hover:text-white"
          v-for="info in data" :key="info"
          @click="setActiveSelection(info)"
        >
         {{info}}
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "../../assets/Icons";
import { MENU_DOTS } from "../../assets/svg_collection";
export default {
  data() {
    return {
      showDropdown: false,
      selectedData: "",
      activeMonth: "",
    };
  },
  props: {
    label: String,
    data: Array,
    name: String
  },
  created() {},
  components: {
    Icon,
    menuIcon: MENU_DOTS,
  },
  methods: {
    onClickAway(event) {
      this.showDropdown = !this.showDropdown;
    },
    setActiveSelection(data){
      this.selectedData = data
      this.showDropdown = false
    }
  },
};
</script>

<style>
</style>