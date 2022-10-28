<template>
  <header id="main-nav" :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="top-0 left-0 w-full h-16 bg-primary">
      <div class="flex flex-nowrap h-full px-8 mx-auto text-white">
        <router-link
          :to="{ name: 'LandingPage' }"
          class="flex items-center text-2xl"
        >
          {{ modelTitle }}</router-link
        >
        <nav class="h-full ml-auto">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0 hover:text-atm-green-2"
              data-test="main-nav-list-item"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
            <div class="flex items-center h-full ml-9">
              <profile-image v-if="isLoggedIn" data-test="profile-image" />
              <action-button
                v-else
                text="Sign in"
                type="atmSecondary"
                data-test="login-button"
                @click="loginUser"
              />
            </div>
          </ul>
        </nav>
      </div>
    </div>
    <sub-nav v-if="onModelPage" />
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      modelTitle: "Agri-Food-Nature Transition Model",
      showMenu: false,
      menuItems: [
        { text: "Guides", url: "/" },
        {
          text: "About",
          url: "/about",
        },
        {
          text: "My Scenarios",
          url: "/model",
        },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.onModelPage,
        "h-26": this.onModelPage,
      };
    },
    onModelPage() {
      return this.$route.name === "Model";
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    loginUser() {
      this.$store.commit("LOGIN_USER");
    },
    displayMenu() {
      console.log("clicked");
      this.show = !this.show;
    },
  },
};
</script>
