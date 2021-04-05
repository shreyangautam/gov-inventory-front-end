<template>
<div class="flex flex-row justify-between px-3">
      <div>
        <button
          class="inline-flex items-right px-3 py-2 text-sm font-medium leading-6 text-white uppercase hover:transition-colors duration-150 ease-in bg-blue-800 rounded shadow hover:shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          <Icon class="mt-1" :icon="config.buttonIcon"/>
          <span>&nbsp;{{config.buttonText}}</span>
        </button>
      </div>
      <div class="mt-1.5">
        <span class="text-sm text-gray-500 select-none"
          >Showing 1 to 10 of 150 results</span
        >
      </div>
      <div>
        <div class="relative w-64">
          <input
            type="text"
            id="password"
            class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:text-gray-500 focus:border-blue-800 transition-colors"
            placeholder="Search..."
          />
          <button
            class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-600 transition-colors"
          >
            <Icon icon="search"/>
          </button>
        </div>
      </div>
    </div>
</template>

<script>

import Icon from "../../assets/Icons"
    export default {
       props: {
          config: Object
       },
       components:{
           Icon
       },
    }
</script>

<style>

</style>