<template>
    <div class="switch-component-wrapper" @click="changeSwitchValue">
        <div class="switch-wrapper" :class="{ 'on': switchValue, 'off': !switchValue }">
            <div class="circle">

            </div>
        </div>
    </div>
</template>

<script>
export default {
   props: {
       switchValue: Boolean,
   },

   methods: {
        changeSwitchValue() {
          this.$emit('switchValueChanged')
        }
   }
}
</script>

<style scoped>
.switch-component-wrapper {
    display: flex;
}

.switch-wrapper {
    width: 44px;
    min-height: 22px;
    display: flex;
    cursor: pointer;
    border-radius: 22px;
    align-items: center;
    padding: 2px;
    transition: all 0.5s;
}

.on {
    background: green;
    justify-content: flex-end;
}

.off {
    background: gray;
    justify-content: flex-start;
}

.circle {
    background: #fff;
    width: 18px;
    height: 18px;
    border-radius: 18px;

}
</style>