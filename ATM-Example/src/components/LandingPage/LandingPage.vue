<template>
  <main>
    <section class="flex flex-col pt-16 pb-20 px-20 lg:px-44 bg-atm-green-1">
      <div class="flex">
        <title-section />
        <img src="@/assets/images/leafEarth.png" alt="CTM" />
      </div>
    </section>
    <feature-section />
    <about-section />
    <div id="footer">
      <p>© Copyright 2022 Kalavasta</p>
    </div>
  </main>
</template>

<script>
import TitleSection from "@/components/LandingPage/TitleSection.vue";
import FeatureSection from "@/components/LandingPage/FeatureSection.vue";
import AboutSection from "@/components/LandingPage/AboutSection.vue";

export default {
  name: "LandingPage",
  components: {
    TitleSection,
    FeatureSection,
    AboutSection,
  },
};
</script>

<style scoped>
img {
  @apply mt-12 max-w-sm w-1/3 h-full hidden lg:inline-block;
}

#footer {
  @apply bg-atm-green-1 text-white text-center pb-4;
}
</style>
