<template>
<span class="antialiased text-gray-700 font-medium font-custom text-lg ml-3 mt-4">Manage Users</span>
<UserList/>
</template>

<script>
import List from "../../components/List/List"
    export default {
        components: {
            'UserList': List
        }
    }

</script>

<style scoped>

</style>