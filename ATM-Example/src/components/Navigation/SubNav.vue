<template>
  <div class="w-full h-10 bg-white">
    <div class="flex float-right items-center h-full px-8">
      <li
        v-for="item in SubNavItems"
        :key="item.text"
        class="text-atm-green-1 list-none mx-6 text-base"
      >
        {{ item.text }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      SubNavItems: [
        {
          text: "Save Scenario",
        },
        {
          text: "Save Scenario As",
        },
        {
          text: "Reset",
        },
        {
          text: "Calculate",
        },
      ],
    };
  },
};
</script>
