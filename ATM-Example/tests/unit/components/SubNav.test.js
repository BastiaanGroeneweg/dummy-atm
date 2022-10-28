import { mount } from "@vue/test-utils";

import SubNav from "@/components/SubNav";

describe("SubNav", () => {
  describe("When user is on the about page", () => {
    it("displays calculate button", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onAboutPage: true,
          };
        },
      });
      const calculate = wrapper.find("[data-test='calculate']");
      expect(calculate.exists()).toBe(true);
    });
  });

  describe("When user is NOT on the about page", () => {
    it("does not display calculate button", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onAboutPage: false,
          };
        },
      });
      const calculate = wrapper.find("[data-test='calculate']");
      expect(calculate.exists()).toBe(false);
    });
  });
});
