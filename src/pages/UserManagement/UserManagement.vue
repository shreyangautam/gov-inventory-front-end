<template>
           <div class="bg-white pb-4 px-4 rounded-sm shadow-xl w-11/12 mt-6 mx-auto border-t-4 border-blue-500">
                <div class="flex justify-between w-full pt-6 ">
                    <p class="z-0 ml-3 text-lg font-sans font-medium tracking-wide opacity-90"> Users</p>
                    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                    <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222"/>
                    <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222"/>
                    <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222"/>
                    </g>
                    </svg>
                </div>
                <div class="w-full flex justify-end px-2 mt-2">
                    <div class="w-full sm:w-64 inline-block relative ">
                        <input type="" name="" class="leading-snug border z-0 border-gray-300 outline-none block w-full appearance-none bg-white text-sm text-gray-600 py-1 px-4 pl-8 rounded-md" placeholder="Search" />

                        <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">

                            <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
                            <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto mt-6">
                <table class="table-auto border-collapse w-full text-left">
                    <thead>
                    <tr class="rounded-lg text-sm font-medium text-gray-700" style="font-size: 0.9674rem">
                        <th class="px-6 py-2 bg-gray-200 " style="background-color:#f8f8f8">Firstname</th>
                        <th class="px-6 py-2 bg-gray-200 " style="background-color:#f8f8f8">Middlename</th>
                        <th class="px-6 py-2 bg-gray-200 " style="background-color:#f8f8f8">Surname</th>
                        <th class="px-12 py-2 " style="background-color:#f7f8f8">Email</th>
                        <th class="px-6 py-2" style="background-color:#f7f8f8"></th>
                    </tr>
                    </thead>
                    <tbody class="text-sm font-normal text-gray-700">
                    <tr class="hover:bg-gray-100 border-b border-gray-200 py-10">
                        <td class="px-6 py-4">Jephunneh</td>
                        <td class="px-6 py-4">Borja</td>
                        <td class="px-6 py-4">Viernes</td>
                        <td class="px-12 py-4">jephv4@gmail.com</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 space-x-4">
                            <button class="px-5 py-2 bg-blue-500 border text-white rounded transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">Edit</button>
                            <button class="px-5 py-2 bg-red-500 border text-white rounded transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">Delete</button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-100 border-b border-gray-200 py-4">
                        <td class="px-6 py-4">Jed Dylan</td>
                        <td class="px-6 py-4">Manjares</td>
                        <td class="px-6 py-4">Lee</td>
                        <td class="px-12 py-4">leedylan0918@gmail.com</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 space-x-4">
                            <button class="px-5 py-2 bg-blue-500 border text-white rounded transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">Edit</button>
                            <button class="px-5 py-2 bg-red-500 border text-white rounded transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">Delete</button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-100 border-b border-gray-200">
                        <td class="px-6 py-4">Richard</td>
                        <td class="px-6 py-4">Pardo</td>
                        <td class="px-6 py-4">Gigantone</td>
                        <td class="px-12 py-4">chard19951002@gmail.com</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 space-x-4">
                            <button class="px-5 py-2 bg-blue-500 border text-white rounded transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">Edit</button>
                            <button class="px-5 py-2 bg-red-500 border text-white rounded transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-6 work-sans">
                    <div>
                        <p class="text-sm leading-5 text-blue-700">
                            Showing
                            <span class="font-medium">1</span>
                            to
                            <span class="font-medium">200</span>
                            of
                            <span class="font-medium">2000</span>
                            results
                        </p>
                    </div>
                    <div>
                        <nav class="relative z-0 inline-flex shadow-sm">
                            <div	>
                                <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)">
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                    1
                                </a>
                                <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                    2
                                </a>
                                <a href="#" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                    3
                                </a>
                            </div>
                            <div> 
                                <a href="#" class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    /* thead tr th:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
    thead tr th:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px;}
    tbody tr td:first-child { border-top-left-radius: 5px; border-bottom-left-radius: 0px;}
    tbody tr td:last-child { border-top-right-radius: 5px; border-bottom-right-radius: 0px;} */
</style>