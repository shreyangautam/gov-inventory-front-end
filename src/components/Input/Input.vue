<template>
  <div v-if="!disablePaste">
    <label class="text-sm font-semibold px-1"
      >{{ label }}<span v-if="isRequired" class="text-red-500">*</span></label
    >
    <div class="flex mt-1">
      <input
        :type="type"
        :maxlength="maxLength"
        :class="[isError ? inputError : inputStyle]"
        :placeholder="placeholder"
        :value="value"
        @paste.prevent
        @input="returnValues"
        @keydown="nameKeydown($event)"
      />
    </div>
  </div>

  <!-- @input="nameKeydown($event)" -->
</template>

<script>
export default {
  data() {
    return {
      //Style
      inputStyle: "w-full pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500",
      inputError: "w-full pl-5 pr-3 py-2 rounded-lg border-2 border-red-200 outline-none focus:border-red-500",

      //UI 
      isError: false
    };
  },
  props: {
    type: String,
    placeholder: String,
    label: String,
    isRequired: Boolean,
    maxLength: String,
    disablePaste: Boolean,
    isTextOnly: Boolean,
    value: String
  },
  methods: {
    nameKeydown(e) {
      if (this.isTextOnly) {
        if (/[^a-zA-Z Ññ]/g.test(e.key)) {
          e.preventDefault();
        }
      } else {
        if (this.type === "numeric") {
          if (/[^[0-9] /g.test(e.key)) {
            e.preventDefault();
          } 
        }
        else {
            if (/[^a-zA-Z0-9 Ññ@._]/g.test(e.key)) {
              e.preventDefault();
            }
          }
      }

      //this.$emit('getValue', this.label, e.target.value ? e.target.value : null)
    },
    returnValues(e) {
      if(this.isRequired){
         this.isError = e.target.value ? false : true
      }  
      this.$emit(
        "getValue",
        this.label,
        e.target.value ? e.target.value : null
      );
    },
  },
};
</script>

<style scoped>
</style>