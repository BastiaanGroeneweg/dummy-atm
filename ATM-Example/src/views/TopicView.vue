<template>
  <div>Topic page for {{ currentTopic }}</div>
</template>

<script>
export default {
  name: "TopicView",
  computed: {
    currentTopic() {
      console.log(this.$route);
      return this.$route.params.topic;
    },
  },
};
</script>
