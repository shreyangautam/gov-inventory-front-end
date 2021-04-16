<template>
    <!-- component -->
            <div class="bg-white border border-gray-200 pb-4 rounded-xl shadow-md w-full my-5">
                <div class="overflow-x-auto">
                <table class="table-auto border-collapse w-full text-center">
                    <thead>
                    <tr class="text-sm font-thin text-gray-700" >
                        <th class="px-6 py-4 rounded-tl-xl" style="background-color:#f8f8f8">Date</th>
                        <th class="px-6 py-4" style="background-color:#f8f8f8">Year</th>
                        <th class="px-6 py-4" style="background-color:#f8f8f8">Employee Name</th>
                        <th class="px-12 py-4 " style="background-color:#f7f8f8">Office</th>
                        <th class="pl-16 py-4 rounded-tr-xl" style="background-color:#f7f8f8">Actions</th>
                    </tr>
                    </thead>
                    <tbody class="text-xs font-normal text-gray-700">
                    <tr class="hover:bg-gray-100 border-b border-gray-200 py-10 cursor-pointer">
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4"></td>
                        <td class="px-12 py-4"></td>
                        <td class="pr-10 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 space-x-4">
                            <button class="px-2 py-2 border border-blue-500 text-blue-500 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 border border-blue-500 text-blue-500 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 border border-red-500 text-red-500 rounded-full transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">
                                <deleteIcon icon="delete"/>
                            </button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-100 border-b border-gray-200 py-4">
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4"></td>
                        <td class="px-12 py-4"></td>
                        <td class="pr-10 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 space-x-4">
                            <button class="px-2 py-2 border border-blue-500 text-blue-500 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 border border-blue-500 text-blue-500 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 border border-red-500 text-red-500 rounded-full transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">
                                <deleteIcon icon="delete"/>
                            </button>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-100 border-b border-gray-200">
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4"></td>
                        <td class="px-12 py-4"></td>
                        <td class="pr-10 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 space-x-4">
                            <button class="px-2 py-2 border border-blue-500 text-blue-500 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 border border-blue-500 text-blue-500 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 border border-red-500 text-red-500 rounded-full transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">
                                <deleteIcon icon="delete"/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
</template>

<script>
import { EDIT_SVG, DELETE_SVG } from '../../assets/svg_collection'
export default {
    components: {
        editIcon: EDIT_SVG,
        deleteIcon: DELETE_SVG,
    }
}
</script>