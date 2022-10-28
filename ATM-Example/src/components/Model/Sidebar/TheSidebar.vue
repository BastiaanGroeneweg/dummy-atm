<template>
  <div
    id="sidebar"
    class="flex flex-col p-4 border-r border-solid border-stone-200 h-screen md: lg:w-72"
  >
    <ul>
      <li v-for="item in items" :key="item" class="mb-3">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  components: {},
  data() {
    return {
      items: [
        "Introduction",
        "Regional Settings",
        "Agricultural Production",
        "Food Processing",
        "Food Consumption",
        "Biodiversity",
        "Energy mix",
      ],
    };
  },
};
</script>
