<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-white rounded-3xl"
  >
    <font-awesome-icon icon="arrow-right" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex h-full items-center flex-1 pr-3">
        <label class="absolute left-0 -top-9">Role</label>
        <text-input v-model="role" placeholder="Engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-atm-green-2 bg-atm-green-1"
        >In</span
      >
      <div class="relative flex h-full items-center flex-1 pl-3">
        <label class="absolute left-0 -top-9">Where?</label>
        <text-input placeholder="Amsterdam" />
      </div>
      <action-button
        text="Search"
        type="atmSecondary"
        class="rounded-r-3xl rounded-l-none"
      />
    </div>
  </form>
</template>

<script>
import ActionButton from "./Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "SigninForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
