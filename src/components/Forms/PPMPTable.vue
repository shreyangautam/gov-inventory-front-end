<template>
  <!-- component -->
            <div class=" w-full h-auto pb-4 mt-2 rounded-md">

                <div class="w-full h-auto">
                <table class="table-auto border-collapse w-full text-sm text-center">
                    <thead>
                    <tr class="rounded-lg font-custom tracking-wider uppercase font-medium text-gray-800">
                        <th class=" py-4">Year</th>
                        <th class=" py-4">Item/Equipment</th>
                        <th class=" py-4">Quantity</th>
                        <th class=" py-4">Unit</th>
                        <th class="py-4">Type</th>
                    </tr>
                    </thead>
                    <tbody class="text-sm font-custom bg-white rounded-lg text-gray-700 w-full">
                    <tr class="">
                        <td class=" py-4">2021</td>
                        <td class=" py-4">MSI PL62 7RC</td>
                        <td class=" py-4">10</td>
                        <td class=" py-4">1</td>
                        <td class=" py-4">Non-Consumable</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 space-x-4">
                            <button class="px-2 py-2 bg-blue-500 border text-white rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 bg-red-500 border text-white rounded-full transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">
                                <deleteIcon icon="delete" class="text-sm"/>
                            </button>
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" py-4">2017</td>
                        <td class=" py-4">MSI Stealth</td>
                        <td class=" py-4">8</td>
                        <td class=" py-4">1</td>
                        <td class=" py-4">Non-Consumable</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 space-x-4">
                            <button class="px-2 py-2 bg-blue-500 border text-white rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 bg-red-500 border text-white rounded-full transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">
                                <deleteIcon icon="delete" class="text-sm"/>
                            </button>
                        </td>
                    </tr>
                    <tr class="">
                        <td class=" py-4">2020</td>
                        <td class=" py-4">Legion 5</td>
                        <td class=" py-4">16</td>
                        <td class=" py-4">1</td>
                        <td class=" py-4">Non-Consumable</td>
                        <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 space-x-4">
                            <button class="px-2 py-2 bg-blue-500 border text-white rounded-full transition duration-300 hover:bg-blue-600 hover:text-white focus:outline-none">
                                <editIcon icon="edit"/>
                            </button>
                            <button class="px-2 py-2 bg-red-500 border text-white rounded-full transition duration-300 hover:bg-red-600 hover:text-white focus:outline-none">
                                <deleteIcon icon="delete" class="text-sm"/>
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