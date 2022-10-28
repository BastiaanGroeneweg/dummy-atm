import { createRouter, createWebHashHistory } from "vue-router";

const LandingView = () => import("@/views/LandingView.vue");
const AboutView = () => import("@/views/AboutView.vue");
const ModelView = () =>
  import(/* webpackChunkName: "model" */ "@/views/ModelView.vue");
const TopicView = () =>
  import(/* webpackChunkName: "model" */ "@/views/TopicView.vue");

const routes = [
  {
    path: "/landing/page",
    name: "LandingPage",
    component: LandingView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/model",
    name: "Model",
    component: ModelView,
  },
  {
    path: "/model/:topic",
    name: "Topic",
    component: TopicView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
