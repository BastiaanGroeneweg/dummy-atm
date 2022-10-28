<template>
  <section id="title">
    <h1 class="text-5xl font-thin leading-loose md:w-full">
      Explore the Future
    </h1>
    <p class="leading-loose mb-3 max-w-xl">
      The Agri-food-nature Transition Model (ATM) is a tool that allows the user
      to explore different pathways to bring the agri-food-nature system into an
      ecologically, economically, and socially acceptable balance that can be
      maintained in the long term.
    </p>

    <action-button
      text="Open Agri-food-nature Transition Model ➔"
      type="atmSecondary"
      class="mt-6"
      @click="openModel"
    >
    </action-button>
  </section>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "TitleSection",
  components: {
    ActionButton,
  },
  methods: {
    openModel() {
      this.$router.push({ name: "Model" });
    },
  },
};
</script>

<style scoped>
#title {
  @apply flex-1 text-white md:shrink-0;
}

p {
  @apply leading-loose pr-16;
}
</style>
