<template>
  <div :class="[`relative w-full flex flex-col items-${align} mt-3 mb-5`]">
    <span
      :class="[`break-words text-${spanAlign} text-gray-600 font-semibold antialiased`]"
      >{{text}}</span
    >
  </div>
</template>

<script>
export default {
    data(){
        return{
           spanAlign: String
        }
    },
    props:{
        text: String,
        align: String
    },
    created(){
        this.spanAlign = this.align === "start" ? 'left' : this.align === "end" ? 'right' : 'center'
    }
};
</script>
