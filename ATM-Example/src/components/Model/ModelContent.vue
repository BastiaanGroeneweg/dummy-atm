<template>
  <main id="model-wrapper" class="flex-auto flex-row w-full p-8">
    <div id="model-content" class="flex flex-col w-full">
      <the-title />
      <div class="flex flex-row">
        <text-content />
        <graph-content />
      </div>
    </div>
  </main>
</template>

<script>
import TheTitle from "./TheTitle.vue";
import TextContent from "./TextContent.vue";
import GraphContent from "./GraphContent.vue";

export default {
  name: "ModelContent",
  components: {
    TheTitle,
    TextContent,
    GraphContent,
  },
};
</script>
