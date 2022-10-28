<template>
  <div class="my-4">
    <router-link
      :to="topicLink"
      class="block mx-auto bg-white border border-solid border-gray-200"
    >
      <div class="py-4 mx-8 border-b border-solid border-gray-200">
        <h2 class="text-lg">{{ topic.title }}</h2>
        <br />
        <ul>
          <li
            v-for="minq in topic.minimumQualifications"
            :key="minq"
            class="text-sm inline-block mb-5"
          >
            {{ minq }}
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SidebarTopic",
  props: {
    topic: {
      type: Object,
      required: true,
    },
  },
  computed: {
    topicLink() {
      return `/model/${this.topic.title}`;
    },
  },
};
</script>
