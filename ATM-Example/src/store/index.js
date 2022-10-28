import { createStore } from "vuex";
import getTopics from "@/api/getTopics";

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const FETCH_TOPICS = "FETCH_TOPICS";

export const state = () => {
  return {
    isLoggedIn: false,
    topics: [],
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
  RECEIVE_TOPICS(state, topics) {
    state.topics = topics;
  },
};

export const actions = {
  [FETCH_TOPICS]: async (context) => {
    const topics = await getTopics();
    context.commit(RECEIVE_TOPICS, topics);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;
