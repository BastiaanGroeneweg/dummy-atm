<template>
  <div class="flex flex-row flex-nowrap w-full">
    <the-sidebar />
    <model-content />
  </div>
</template>

<script>
import TheSidebar from "@/components/Model/Sidebar/TheSidebar.vue";
import ModelContent from "@/components/Model/ModelContent.vue";

export default {
  name: "ModelView",
  components: {
    TheSidebar,
    ModelContent,
  },
};
</script>
