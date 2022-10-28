<template>
  <img
    :src="imageLink"
    alt=""
    class="w-8 h-8 object-contain rounded-3xl my-4 border-white border-solid border"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://i1.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1",
    };
  },
};
</script>
