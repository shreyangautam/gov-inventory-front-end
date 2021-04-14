<template>
<font-awesome-icon :icon="iconName" />
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown, faUserPlus, faSearch, faEnvelope, faPhoneAlt, faEllipsisH, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight, faChevronDown, faUserPlus, faSearch, faEnvelope, faPhoneAlt, faEllipsisH, faPlusSquare)
    export default {
        name: 'Icons',
        components:{
           "font-awesome-icon": FontAwesomeIcon,
        },
        props:{
           iconName: String
        }
    }
</script>

<style>

</style>