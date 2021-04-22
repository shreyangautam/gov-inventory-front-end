<template>
    <div>
      <h1 class="font-medium text-lg pl-3 pt-7 pb-5 text-gray-500 font-custom whitespace-nowrap tracking-normal">Account Profile</h1>
      <!--- Account Profile --->
      <div class="bg-white rounded-md w-full h-auto shadow-md">
        <div class="intro-y box px-5 pt-5 mt-1 mb-4">
          <!--- Content Container --->
          <div class="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5">
            <!--- Profile --->
            <div class="flex w-full whitespace-nowrap px-6 py-1 justify-center items-center md:justify-center lg:justify-start">
              <div class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative items-center justify-center mr-4">
                <img src="../../assets/Me2.jpg" alt="" class="rounded-full">
                <div class="absolute mb-0 mr-0 md:mb-0 md:mr-0 lg:mb-1 lg:mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-1 rounded-full p-1">
                  <a href="#" class="px-1.5 py-1.5 md:py-2 md:px-2 rounded-full bg-blue-800 hover:bg-blue-700">
                    <cameraIcon icon="Camera" class="h-4 w-4 text-gray-100"/>
                  </a>
                </div>
              </div>
              <div class="ml-1 font-custom">
                  <div class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-xl text-gray-600">Jed Dylan Lee</div>
                  <div class="text-gray-400 text-sm">Frontend Developer</div>
              </div>
            </div>
            <!--- Contact Details --->
            <div class="mt-6 lg:mt-0 flex-1 dark:text-gray-300 text-sm px-5 lg:pr-28 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
              <div class="font-medium font-custom text-center text-gray-600 lg:text-left lg:mt-3">
                Contact Details
              </div>
              <div class="flex flex-col justify-center items-center lg:items-start mt-4 text-gray-500">
                <div class="truncate sm:whitespace-normal flex items-center">
                  <gmailIcon icon="gmail-icon" class="feather feather-mail w-4 h-4 mr-2"/>admin@example.com
                </div>
                <div class="truncate sm:whitespace-normal flex items-center mt-1">
                  <phoneIcon icon="contact-icon" class="feather feather-mail w-4 h-4 mr-2"/>09XX-XXX-XXXX
                </div>
              </div>
            </div>
            <!--- Transaction Details --->
            <div class="mt-6 lg:mt-0 flex-1 font-custom flex items-center justify-center px-14 gap-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0">
              <div class="text-center rounded-md w-20 py-3">
                <div class="font-medium text-blue-800 text-xl">
                  201
                </div>
                <div class="text-gray-400">
                  Request
                </div>
              </div>
              
              <div class="text-center rounded-md w-20 py-3">
                <div class="font-medium text-blue-800 text-xl">
                  1K
                </div>
                <div class="text-gray-400">
                  Approved
                </div>
              </div>

              <div class="text-center rounded-md w-20 py-3">
                <div class="font-medium text-blue-800 text-xl">
                  492
                </div>
                <div class="text-gray-400">
                  Rejected
                </div>
              </div>
            </div>
          </div>
          <!-- Account Profile Navigation -->
          <div class="px-3 pb-2.5 mt-2.5 md:mt-0 md:pb-0">
            <ul class="flex flex-col md:flex-row lg:flex-row justify-start gap-6">
              <li class="">
                <a href="#" :class="[isFocus ? isActive : isNotActive]">
                  <shieldIcon icon="Account-Icon" class="mr-2"/>
                  Account
                </a>
              </li>
              <li class="">
                <a href="#" :class="[isFocus ? isActive : isNotActive]">
                  <keyIcon icon="ChangePass-Icon" class="mr-2 h-5 w-5"/>
                  Change Password
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { GMAIL_SVG, PHONE_SVG, CAMERA_SVG, SHIELD_SVG, KEY_SVG } from '../../assets/svg_collection'
export default {
  components: {
    gmailIcon: GMAIL_SVG,
    phoneIcon: PHONE_SVG,
    cameraIcon: CAMERA_SVG,
    shieldIcon: SHIELD_SVG,
    keyIcon: KEY_SVG,
  },

  data() {
    return {
      isFocus: false,

      // Active
      isActive: "flex items-center md:py-3 lg:py-3 font-custom font-medium text-sm text-gray-700 border-b-2 border-indigo-800",
      isNotActive: "flex items-center md:py-3 lg:py-3 font-custom font-normal text-sm text-gray-500 border-b-2 border-white",
    }
  },
}
</script>

<style>

</style>