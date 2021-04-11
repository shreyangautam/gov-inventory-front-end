<template>
    <transition name="fade">
        <div class="popup-modal" v-if="isVisible">
            <div class="window border-t-8 border-green-400">
                <div :class="messageIcon">
                    <font-awesome-icon icon="check-circle"/>
                </div>
                <div class="bg-clip-text text-lg font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500">Successfully Added</div>
                <div>
                    <button class="px-6 py-1 mt-4 text-sm font-semibold leading-6 text-green-500 uppercase hover:transition-colors duration-150 ease-in border border-green-500 rounded-2xl shadow-md hover:shadow-lg hover:bg-green-500 hover:text-white focus:outline-none">Ok</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckCircle)

export default {
    name: 'PopupModal',
    components: {
        'font-awesome-icon' : FontAwesomeIcon,
    },

    data: () => ({
        messageIcon: "text-center text-6xl text-green-500 mb-5",
        isVisible: true,
    }),

    methods: {
        open() {
            this.isVisible = true
        },

        close() {
            this.isVisible = false
        },
    },
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
    margin-left: auto;
    margin-right: auto;
    padding: 1.7rem 6.5%;
    text-align: center;
}
</style>