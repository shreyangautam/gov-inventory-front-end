<template>
    <ul class="flex flex-col">
        <li class="list-none">
            <div href="#" class="relative flex flex-row z-20 pl-4 transition duration-300 ease-in-out justify-between select-none items-center h-10 focus:outline-none text-black font-custom border-transparent"
                @click="collapse = !collapse"
            >
                <div class="flex items-center">
                    <div class="mr-1">
                        <plus v-if="!collapse" class="text-black" icon="plus-icon"></plus>
                        <minus v-else class="text-black" icon="minus-icon"></minus>
                    </div>
                    <span class="ml-2 font-normal  text-md truncate">{{title}}</span>
                </div>
            </div>
            <slot v-if="collapse" name="accordion-content"></slot>
        </li>
    </ul>
</template>

<script>
import { PLUSCIRCLE_SVG, MINUSCIRCLE_SVG } from '../../assets/svg_collection'

export default {
    components: {
        plus: PLUSCIRCLE_SVG,
        minus: MINUSCIRCLE_SVG,
    },
    data() {
        return {
            collapse: false,
        }
    },
    props: {
        permissions: Array,
        title: String
    }
}
</script>

<style>

</style>