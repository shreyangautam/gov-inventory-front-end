<template>
<span class="antialiased text-gray-700 font-semibold text-lg ml-3">Manage Users</span>
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