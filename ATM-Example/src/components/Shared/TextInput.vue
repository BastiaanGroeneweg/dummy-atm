<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none bg-atm-green-1 text-white"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],

  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
