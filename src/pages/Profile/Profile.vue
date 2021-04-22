<template>
    <div>
      <h1 class="font-medium text-lg pl-3 pt-7 pb-5 text-gray-500 font-custom whitespace-nowrap tracking-normal">Account Profile</h1>
      <div class="bg-white rounded-md w-full h-auto shadow-md py-4 lg:py-4 mb-6">
        <div class="relative flex flex-col w-full h-auto py-1">
          <!--- Content Container --->
          <div class="flex flex-col md:flex-row">
            <!--- Profile --->
            <div class="flex w-full border-r border-gray-100 whitespace-nowrap px-4 py-1 justify-center items-center md:justify-center lg:justify-start">
              <div class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative items-center justify-center mr-4">
                <img src="../../assets/Me2.jpg" alt="" class="rounded-full">
                <div class="absolute mb-0 mr-0 md:mb-1 md:mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-1 rounded-full p-1">
                  <a href="#" class="px-1.5 py-1.5 md:py-2 md:px-2 rounded-full bg-blue-800">
                    <cameraIcon icon="Camera" class="h-4 w-4 text-white"/>
                  </a>
                </div>
              </div>
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
import { GMAIL_SVG, PHONE_SVG, CAMERA_SVG } from '../../assets/svg_collection'
export default {
  components: {
    gmailIcon: GMAIL_SVG,
    phoneIcon: PHONE_SVG,
    cameraIcon: CAMERA_SVG,
  }
}
</script>

<style>

</style>