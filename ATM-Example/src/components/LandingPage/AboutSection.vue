<template>
  <section id="more-info">
    <div class="carousel-view">
      <transition-group class="carousel" tag="div">
        <div v-for="card in cards" :key="card.title" class="card">
          <font-awesome-icon
            :icon="card.icon"
            class="text-3xl flex items-start"
          ></font-awesome-icon>
          <a :href="card.url">
            <h3 class="text-2xl pb-3 hover:text-atm-green-3">
              {{ card.title }}
            </h3>
          </a>
          <p>{{ card.text }}</p>
        </div>
      </transition-group>
      <div class="carousel-controls">
        <button class="carousel-control-next" type="button" @click="next">
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      cards: [
        {
          title: "Energy Transition Model ➔",
          text: `The Energy Transition Model is an independent, comprehensive and
            fact-based energy model made by Quintel Intelligence that is used by
            governments, corporations, NGOs and educators in various countries.
            It is backed by more than twenty partners.`,
          url: "https://energytransitionmodel.com/",
          icon: "bolt",
        },
        {
          title: "About us ➔",
          text: ` Kalavasta is a strategy consultancy which aims to uncover and
            advance transitions to sustainable equilibria. The Agri-food-nature
            Transition Model (ATM) is developed by Kalavasta in cooperation with
            the Institute of Sustainable Process Technology (ISPT) on request of
            a consortium of companies from the industry, NGO's, knowledge
            partners and agricultural cooperatives.`,
          url: "https://kalavasta.com/",
          icon: "people-group",
        },
        {
          title: "Carbon Transition Model ➔",
          text: ` The Carbon Transition Model (CTM) is a tool to explore pathways to
            zero emissions for the currently fossil intensive industries as well
            as new industries that produce recycled, biogenic and synthetic
            molecules (from carbon, water and green electricity) in the future.`,
          url: "https://carbontransitionmodel.com/",
          icon: "gears",
        },
      ],
    };
  },
  methods: {
    next() {
      const first = this.cards.shift();
      this.cards = this.cards.concat(first);
    },
  },
};
</script>

<style scoped>
#more-info {
  @apply bg-atm-green-1 text-white px-20 lg:px-52 py-28;
}

.carousel-control-next {
  @apply inline-block w-8 h-8 mr-14 mt-16;
}
.carousel-view {
  display: flex;
}

.carousel {
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.card {
  @apply w-10/12 lg:w-3/5 duration-500;
}
.card:first-of-type {
  display: none;
}
.card:last-of-type {
  display: none;
}
</style>
