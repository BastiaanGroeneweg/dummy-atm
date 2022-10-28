<template>
  <section
    id="features"
    class="text-atm-green-1 bg-white text-center px-20 lg:px-32"
  >
    <div class="flex flex-col lg:flex-row">
      <div class="feature-item flex-1 mt-2">
        <font-awesome-icon icon="fa-solid fa-book-open" size="3x" />
        <h4>Transparant</h4>
        <p>Created from open data and free to use</p>
      </div>
      <div class="feature-item flex-1 mt-2">
        <font-awesome-icon icon="fa-solid fa-circle-check" size="3x" />
        <h4>Validated Data</h4>
        <p>
          Developed in collaboration with a consortium from both academic and
          practical fields
        </p>
      </div>
      <div class="feature-item flex-1 mt-2">
        <font-awesome-icon icon="fa-solid fa-puzzle-piece" size="3x" />
        <h4>Integral</h4>
        <p>
          Spanning agricultural production, processing and food consumption,
          including trade
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeatureSection",
};
</script>

<style>
/* Feature Styling */

#features {
  @apply mt-20 pb-20;
}
#features p {
  @apply text-atm-green-3 mt-3 lg:px-5;
}

#features h4 {
  @apply font-light mt-4 text-2xl;
}

.feature-item {
  @apply px-10;
}
</style>
