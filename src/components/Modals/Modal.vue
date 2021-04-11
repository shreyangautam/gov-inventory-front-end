<template>
<!-- 
    @PROPS
    -modalTitle <String> - Title
    -modalButtonName <String> - Name of Button
 -->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
      <!-- HEAD -->
         <div class="h-8 w-full flex justify-start items-center text-gray-900 border-b border-gray-200 pb-4">
            <div class="">
                <span class="text-md font-medium font-custom">{{modalTitle}}</span>
            </div>
            <div class="absolute right-0 pr-8">
              <div class="bg-red-400 rounded-full border-red-400 border-2 w-4 h-4 hover:border-red-500 cursor-pointer" @click="$emit('closeModal')"></div>
            </div>
         </div>
        <!-- CONTENT -->
        <slot name="modal-content"> </slot>
        <!-- CONTENT -->
        <div class="flex justify-end gap-4 mt-1" v-if="!disableDefaultButtons">
          <button
            class="inline-flex items-right px-4 py-2 text-md font-medium leading-6 text-red-500 hover:transition-colors duration-150 ease-in border border-red-400 rounded shadow hover:shadow-lg hover:bg-red-500 hover:text-white focus:outline-none"
            @click="$emit('closeModal')"
          >
            <span>Cancel</span>
          </button>
          <button
            class="inline-flex items-right px-4 py-2 text-md font-medium leading-6 text-white hover:transition-colors duration-150 ease-in bg-blue-800 rounded shadow hover:shadow-lg hover:bg-blue-700 focus:outline-none"
            @click="$emit('modalAction')"
          >
            <span>{{modalButtonName}}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            modalShow: true
        }
    },
    props:{
        modalTitle: String,
        modalButtonName: String,
        disableDefaultButtons: Boolean
    }
 
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity all 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  position: relative;
  width: 550px;
  height: auto;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header {
  margin-top: 0;
}
.modal-body {
  margin: 20px 0;
}
</style>