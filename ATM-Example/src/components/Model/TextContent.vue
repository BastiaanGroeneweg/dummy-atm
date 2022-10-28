<template>
  <div id="text-content" class="basis-2/5 pr-2 border-r border-solid">
    The different text sections go here
    <text-section></text-section>
  </div>
</template>

<script>
import TextSection from "./TextSection.vue";

export default {
  name: "TextContent",
  components: {
    TextSection,
  },
};
</script>
