<template>
<div class="flex flex-row justify-between px-3 mb-3">
      <div>
        <!-- ADD USER BUTTON -->
        <button
          class="inline-flex items-right px-3 py-2 text-sm font-medium leading-6 text-white uppercase hover:transition-colors duration-150 ease-in bg-blue-800 rounded shadow-md hover:shadow-lg hover:bg-blue-700 focus:outline-none"
          @click="openModal = !openModal" id="show-modal"
        >
          <Icon class="mt-1" :icon="config.buttonIcon"/>
          <span>&nbsp;{{config.buttonText}}</span>
        </button>
        <!-- MODAL -->
        <modal v-if="openModal" @close="openModal = false">
           <transition name="modal">
            <div class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <PopupModal/>
                  <div class="h-8 w-full flex justify-start items-center text-gray-900 border-b border-gray-200 pb-4">
                      <div class="">
                      <span class="text-md font-medium font-custom">ADD USER</span>
                      </div>
                  </div>
                  <div class="w-full mt-4">
                    <div>
                        <Loading/>
                        <div class="flex flex-col -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-sm font-semibold px-1">First name</label>
                                <div class="flex mt-1">
                                    <input type="text" maxlength="15" class="w-full pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Jed Dylan">
                                </div>
                            </div>
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-sm font-semibold px-1">Middle name</label>
                                <div class="flex mt-1">
                        
                                    <input type="text" maxlength="15" class="w-full pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Manjares">
                                </div>
                            </div>
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-sm font-semibold px-1">Last name</label>
                                <div class="flex mt-1">
                                    
                                    <input type="text" maxlength="15" class="w-full pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="Lee">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                           <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-sm font-semibold px-1">Email</label>
                                <div class="flex mt-1">
                                   
                                    <input type="email" maxlength="23" class="w-full pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="leedylan0918@gmail.com">
                                </div>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-sm font-semibold px-1">Contact Number</label>
                                <div class="flex mt-1">
                        
                                    <input type="text" maxlength="11" class="w-full pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500" placeholder="(63+) XXX-XXX-XXXX">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-4 mt-1">
                            <button
                              class="inline-flex items-right px-4 py-2 text-md font-medium leading-6 text-red-500 hover:transition-colors duration-150 ease-in border border-red-400 rounded shadow hover:shadow-lg hover:bg-red-500 hover:text-white focus:outline-none"
                              @click="onCloseModal"
                            >
                              <span>Cancel</span>
                            </button>
                            <button
                              class="inline-flex items-right px-4 py-2 text-md font-medium leading-6 text-white hover:transition-colors duration-150 ease-in bg-blue-800 rounded shadow hover:shadow-lg hover:bg-blue-700 focus:outline-none"
                            >
                              <span>Add User</span>
                            </button>
                        </div>
                    </div>
                  </div>

              
                </div>
              </div>
            </div>
          </transition>

        </modal>
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
            class="w-full pl-3 pr-10 py-2 shadow-sm hover:shadow-md rounded-lg hover:border-gray-300 focus:outline-none focus:text-gray-500 focus:border-blue-800 transition-colors"
            placeholder="Search..."
          />
          <button
            class="block w-7 h-7 text-center text-xl leading-0 absolute top-1 right-2 text-gray-400 focus:outline-none hover:text-gray-600 transition-colors"
          >
            <Icon icon="search"/>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import Loading from '../Loading'
import PopupModal from '../../components/Alert/SuccessAlert'
import Icon from "../../assets/Icons"
    export default {
      data() {
        return {
          openModal: false,
        }
      },
      methods: {
        onCloseModal(event) {
          this.openModal = !this.openModal
        },
      },
       props: {
          config: Object
       },
       components:{
           Icon,
           PopupModal,
           Loading
       },
    }
</script>

<style scoped>
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
