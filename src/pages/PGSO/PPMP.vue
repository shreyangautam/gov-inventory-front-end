<template>
  <PPMPList
    @listBeltButtonAction="listBeltAction"
  />
</template>

<script>
import PPMPList from "../../components/List/PPMPList"
    export default {
        components: {
            PPMPList,
        },
        methods:{
            listBeltAction(){
                console.log("action from belt")
            }
        }
    }
</script>

<style>

</style>