<template>
  <button
    :class="['px-5 py-2.5 font-medium rounded-lg align-middle', buttonClass]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "atmPrimary",
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
.atmPrimary {
  @apply bg-atm-green-1 text-white hover:shadow-darkGreen;
}
.atmSecondary {
  @apply text-atm-green-1 bg-white hover:shadow-darkGreen;
}

.ctmPrimary {
}
</style>
