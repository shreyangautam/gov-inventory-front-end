<template>
  <div class="head">
  <h1>{{ title }}</h1>
  <Button title="Add Task" color="green"/>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: { Button },
  name: "Header",

  props: {
    title: String,
  },
};
</script>

<style scoped>
.head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>

