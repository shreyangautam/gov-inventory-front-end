<template>
    <transition name="fade">
        <div class="popup-modal" v-if="isVisible">
            <div class="window">
                <div :class="messageIcon">
                    <font-awesome-icon icon="user-slash"/>
                </div>
                <div class="font-semibold text-sm">
                    Delete this user?
                </div>
                <div class="flex gap-2">
                    <button class="px-4 py-1 mt-4 text-xs font-semibold leading-6 text-red-500 uppercase hover:transition-colors duration-150 ease-in border border-red-500 rounded-2xl shadow-md hover:shadow-lg hover:bg-red-500 hover:text-white focus:outline-none">Yes</button>
                    <button class="px-4 py-1 mt-4 text-xs font-semibold leading-6 text-red-500 uppercase hover:transition-colors duration-150 ease-in border border-red-500 rounded-2xl shadow-md hover:shadow-lg hover:bg-red-500 hover:text-white focus:outline-none">No</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSlash)

export default {
    name: 'DeleteAlertModal',
    components: {
        'font-awesome-icon' : FontAwesomeIcon,
    },

    data: () => ({
        messageIcon: "text-center text-4xl text-red-500 mb-5",
        isVisible: true,
    }),
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.popup-modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    border-radius: 7px;
    align-items: center;
    z-index: 1;
}

.window {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 480px;
    margin: 0px auto;
    padding: 1.5rem 9%;
    align-items: center;
}
</style>