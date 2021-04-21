<template>
  <div class="relative">
    <label class="text-sm font-semibold text-gray-500 pl-1">{{ label }}</label>
    <div class="relative w-full">
      <input
        type="text"
        @input="(event) => search(event)"
        v-model="value"
        id="password"
        class="rounded-lg border-2 text-gray-600 border-gray-200 focus:outline-none focus:border-blue-500 p-3 w-full"
        :placeholder="placeholder"
      />
      <button
        class="block w-7 h-7 text-center text-xl leading-0 absolute top-3 right-2 text-gray-500 focus:outline-none hover:text-gray-600 transition-colors"
      >
       <menuIcon />
      </button>
    </div>
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
        class="absolute py-1 px-1 w-full bg-white rounded-lg shadow-xl z-50 my-2 border-2 border-gray-200"
      >
        <span class="block text-base text-gray-600 px-4 py-3" v-if="!optionFound">Option Not found</span>
        <a
          href="#"
          v-else
          class="block px-4 py-3 text-base rounded-lg text-gray-600 hover:bg-blue-900 hover:text-white"
          v-for="info in dataList"
          :key="info"
          @click="setActiveSelection(info)"
        >
          {{ info }}
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
      optionFound: true,
      selectedData: "",
      activeMonth: "",
      value: '',
      dataList: [],
      linkDisabled: false
      
    };
  },
  props: {
    label: String,
    data: Array,
    name: String,
    placeholder: String
  },
  created() {},
  components: {
    Icon,
    menuIcon: MENU_DOTS,
  },
  methods: {
    onClickAway(event) {
      this.showDropdown = !this.showDropdown;
      if(!this.optionFound){
        this.value = null;
      }   
      console.log(this.value)
    },
    setActiveSelection(data) {
      this.value = data;
      this.showDropdown = false;
    },
    search(e){
      this.showDropdown = true
      console.log(e.target.value)
      const globalRegex = RegExp(`^${e.target.value}`, 'g');
      this.dataList = this.data.filter((data) => e.target.value && globalRegex.test(data)).length > 0 ? this.data.filter((data) => globalRegex.test(data)) : !e.target.value ? this.data.slice(0, 4) : ["Option Not Found"]
      console.log(this.dataList)
      if(this.dataList[0] === "Option Not Found"){
          this.optionFound = false
      }
      else{
          this.optionFound = true
      }
    }
  },
};
</script>

<style>
</style>