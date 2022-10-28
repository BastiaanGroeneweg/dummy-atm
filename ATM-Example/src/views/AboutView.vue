<template>
  <div class="about mx-80 mt-20 text-left leading-8">
    <p v-for="paragraph in about" :key="paragraph.length">
      {{ paragraph }} <br /><br />
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      about: [
        `The Agri-food-nature Transition Model (ATM) is a simulation model of the
      Dutch agri- and food-sector developed by Kalavasta in cooperation with a
      consortium headed by the Institute for Sustainable Process Technology
      (ISPT).`,
        `The current configuration of the agricultural system
      that produces food, feed, materials, energy, and feedstock for our needs
      is not sustainable in the long term. At the same time, there is no widely
      accepted consensus on how a sustainable system would be configured. The
      configuration of the system is dependent on supra-national, national, and
      regional policies as well as choices of both individual consumers and
      individual producers.`,
        `The motivation behind the ATM is to
      create a tool that is open data, open source, and broadly accepted by the
      various stakeholders in the field. This allows for a systemic, integral,
      and transparent exploration of alternative paths towards a better future
      agri-food system which does not degrade natural systems.`,
        `The
      development has gone through two phases so far. The first phase resulted
      in a functional prototype that included the perspectives of agricultural
      production and food consumption. The second phase of development took
      place as a part of the FASCINATING-project of the Groningen province and
      the ISPT. This phase included among the major developments the adding of a
      food processing perspective to the model, as well as the modelling of the
      soil organic matter over time.`,
        `The following organisations are
      members of the consortium: ISPT, Meststoffen Nederland, Urgenda, WUR, LTO
      Nederland, Blonk, Sanovations, Kalavasta, Sanegeest, as well as Agrifirm,
      Avebe, Cosun, FrieslandCampina and the province of Groningen as the
      Fascinating partners.`,
        `We invite the user to embark on a
      learning journey while exploring a future Dutch agricultural system in the
      ATM!`,
      ],
    };
  },
};
</script>
