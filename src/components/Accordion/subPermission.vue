<template>
    <ul class="flex flex-col">
        <li class="list-none">
            <div href="#" class="relative flex flex-row z-20 pl-4 transition duration-300 ease-in-out justify-between select-none items-center h-10 focus:outline-none text-black border-transparent"
                @click="collapse = !collapse"
            >
                <div class="flex items-center">
                    <span class="font-normal text-md truncate">{{name}}</span>
                </div>
            </div>
            <slot v-if="collapse" name="role-subpermission"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            collapse: false,
        }
    },
    props: {
        name: String,
    }
}
</script>

<style>
</style>