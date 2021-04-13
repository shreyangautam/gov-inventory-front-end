<template>
  <div class="w-full px-3">
  <div
    class="mb-5 w-full bg-gray-100 rounded-xl flex flex-row justify-between overflow-hidden shadow-none antialiased"
  >
    <div v-for="(step, index) in tempData" :key="index" class="w-full">
    <div :class="[step.isActive ? activeStep : step.isNext ? nextStep : defaultStep]">
      <span>
        STEP 0{{index + 1}}</span
      ><br />
      <span
        :class="[step.isActive ? activeStepName : step.isNext ? nextStepName : defaultStepName]"
        >{{step.stepName}}</span
      >
    </div>
    </div>
  </div>
  </div>
  <slot name="stepper-pages"> </slot>

  <!-- Buttons -->
  <div class="flex justify-between gap-4 mt-1 px-3">
    <button
      class="inline-flex items-right pl-1 py-2 text-md font-medium leading-6 text-gray-400 hover:transition-colors duration-150 ease-in border-none hover:text-gray-500 focus:outline-none"
      @click="previous"
    >
      <span>Previous Step</span>
    </button>
    <button
      class="inline-flex items-right px-4 py-2 text-md font-medium leading-6 text-white hover:transition-colors duration-150 ease-in bg-blue-800 rounded shadow hover:shadow-lg hover:bg-blue-700 focus:outline-none"
      @click="next"
    >
      <span>{{counter + 1 === tempData.length ? 'Finish' : 'Next Step'}}</span>
    </button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      tempData: [
        {
          stepName: "Basic Info",
          isActive: true,
          isNext: false,
        },
        {
          stepName: "Roles",
          isActive: false,
          isNext: true,
        },
        {
          stepName: "Permission",
          isActive: false,
          isNext: false,
        },
      ],
      
      //STYLES
      activeStep: "bg-green-100 w-full py-5 pl-4 text-xs font-medium tracking-wide text-green-600 select-none",
      activeStepName: "text-sm font-bold tracking-wide text-green-600 select-none",
      
      //Next
      nextStep: "w-full py-5 pl-4 text-xs font-medium tracking-wide text-gray-400 select-none",
      nextStepName: "text-sm font-bold tracking-wide text-gray-600 mt-10 select-none",

      //default
      defaultStep: "w-full py-5 pl-4 text-xs font-medium tracking-wide text-gray-300 select-none",
      defaultStepName: "text-sm font-bold tracking-wide text-gray-400 mt-10 select-none"
    };
  },
  props: {
    stepsData: Array,
  },
  methods: {
      next(){
         this.tempData[this.counter].isActive = false
         this.tempData[this.counter].isNext = false
         this.counter = this.counter < this.tempData.length - 1 ? this.counter + 1 : this.counter
         this.tempData[this.counter].isActive = true
         if(this.counter + 1 < this.tempData.length){
            this.tempData[this.counter + 1].isNext = true
         }
         console.log(this.counter)
         console.log(this.tempData.length)
      },
      previous(){
         this.tempData[this.counter].isActive = false
         if(this.counter + 1 < this.tempData.length){
           this.tempData[this.counter + 1].isNext = false
         }
         this.counter = this.counter > 0 ? this.counter - 1 : this.counter
         this.tempData[this.counter].isActive = true
         this.tempData[this.counter + 1].isNext = true
         
         console.log(this.counter)
      }
  }
};
</script>

<style>
</style>