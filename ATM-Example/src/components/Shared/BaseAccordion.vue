<template>
  <div class="py-5">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="pl-4 font-medium">Overview</h3>
      <font-awesome-icon :icon="caretIcon" class="opacity-60" />
    </div>
    <div v-if="isOpen" class="w-full pl-6 mt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDropdown",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
