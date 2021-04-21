<template>
    <div>
      <h1 class="font-medium text-lg pl-3 pt-7 pb-5 text-gray-500 font-custom tracking-normal">Account Profile</h1>
      <div class="bg-white rounded-md w-full h-auto shadow-md py-4 lg:py-4 mb-6">
        <div class="relative flex flex-col w-full h-auto py-1">
          <!--- Content Container --->
          <div class="flex flex-col md:flex-row">
            <!--- Profile --->
            <div class="flex w-full border-r border-gray-100 px-4 py-1 justify-center items-center md:justify-center lg:justify-start">
              <span class="h-auto mr-5">
                <img src="../../assets/Me2.jpg" alt="" class="rounded-full flex items-center justify-center border-2 w-20 lg:w-32 border-gray-100">
              </span>
              <div class="flex items-center">
                <div class="flex flex-col">
                  <p class="font-semibold text-xl text-gray-600 mb-0.5">Jed Dylan Lee</p>
                  <p class="font-normal tracking-wide text-sm text-gray-400 font-custom">Frontend Developer</p>
                </div>
              </div>
            </div>
            <!--- Contact Details --->
            <div class="flex flex-col font-custom w-full border-r text-center sm:text-left lg:text-left border-gray-100 px-4 py-6">
              <span class="font-medium tracking-wide text-sm text-gray-600 text-center md:text-center lg:text-left lg:mt-3"><p>Personal Details</p></span>
              <div class="flex flex-col justify-center items-center lg:items-start mt-3">
                <div class="truncate sm:whitespace-normal flex items-center text-sm text-gray-500">
                  <gmailIcon icon="gmail-icon" class="w-4 h-4 mr-3"/>admin@example.com
                </div>
                <div class="truncate sm:whitespace-normal flex items-center text-sm text-gray-500 mt-1.5">
                  <phoneIcon icon="contact-icon" class="w-4 h-4 mr-3"/>09XX-XXX-XXX
                </div>
                <div class="truncate sm:whitespace-normal flex items-center text-sm mt-1">

                </div>
              </div>
            </div>
            <!--- Transaction Details --->
             <div class="flex flex-col font-custom w-full border-r text-center sm:text-left lg:text-left border-gray-100 px-4 py-6">
              <span class="font-medium tracking-wide text-sm text-gray-600 text-center md:text-center lg:text-left lg:mt-3"><p>Personal Details</p></span>
              <div class="flex flex-col justify-center items-center lg:items-start mt-3">
                <div class="truncate sm:whitespace-normal flex items-center text-sm text-gray-500">
                  <gmailIcon icon="gmail-icon" class="w-4 h-4 mr-3"/>admin@example.com
                </div>
                <div class="truncate sm:whitespace-normal flex items-center text-sm text-gray-500 mt-1.5">
                  <phoneIcon icon="contact-icon" class="w-4 h-4 mr-3"/>09XX-XXX-XXX
                </div>
                <div class="truncate sm:whitespace-normal flex items-center text-sm mt-1">

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { GMAIL_SVG, PHONE_SVG } from '../../assets/svg_collection'
export default {
  components: {
    gmailIcon: GMAIL_SVG,
    phoneIcon: PHONE_SVG,
  }
}
</script>

<style>

</style>