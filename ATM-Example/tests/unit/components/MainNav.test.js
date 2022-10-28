// import { shallowMount } from "@vue/test-utils";

// import MainNav from "@/components/MainNav.vue";

// describe("MainNav", () => {
//   describe("when user is on model page", () => {
//     it("displays the subnav", () => {
//       const $route = {
//         name: "Model",
//       };

//       const wrapper = shallowMount(MainNav, {
//         global: {
//           mocks: {
//             $route,
//           },
//           stubs: { fontAwesomeIcon: true },
//         },
//       });
//     });
//   });
// it("displays company name", () => {
//   const wrapper = shallowMount(MainNav);
//   expect(wrapper.text()).toMatch("Agri-Food-Nature Transition Model");
// });
// it("displays menu items for navigation", () => {
//   const wrapper = shallowMount(MainNav);
//   const navigationMenuItems = wrapper.findAll(
//     "[data-test='main-nav-list-item']"
//   );
//   const menuTexts = navigationMenuItems.map((item) => item.text());

//   expect(menuTexts).toEqual(["Guides", "About", "My Scenarios"]);
// });

// describe("when user is logged out", () => {
//   it("prompts user to sign in", () => {
//     const wrapper = shallowMount(MainNav);
//     const loginButton = wrapper.find("[data-test='login-button']");
//     expect(loginButton.exists()).toBe(true);
//   });
//   describe("when user logs in", () => {
//     it("shows profile image", async () => {
//       const wrapper = shallowMount(MainNav);
//       let profileImage = wrapper.find("[data-test='profile-image']");
//       expect(profileImage.exists()).toBe(false);

//       const loginButton = wrapper.find("[data-test='login-button']");
//       await loginButton.trigger("click");

//       profileImage = wrapper.find("[data-test='profile-image']");
//       expect(profileImage.exists()).toBe(true);
//     });
//   });
// });
