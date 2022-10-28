const atmTopics = {
  text: "Root",
  children: [
    {
      text: "Introduction",
    },
    {
      text: "Regional settings",
    },
    {
      text: "Agricultural production",
      children: [
        {
          text: "Animal production",
          children: [{ text: "Cattle" }, { text: "Pigs" }, { text: "Chicken" }],
        },

        {
          text: "Plant production",
          children: [
            { text: "General farming practices" },
            { text: "Arable farming" },
            { text: "Horticulture soil" },
            { text: "Horticulture greenhouse" },
            { text: "Horticulture other" },
          ],
        },
        {
          text: "Nutrient flow",
          children: [
            { text: "Nitrogen" },
            { text: "Phosphorus" },
            { text: "Potassium" },
          ],
        },
      ],
    },
    {
      text: "Food processing",
      children: [{ text: "Food" }, { text: "Non food" }],
    },
    {
      text: "Food consumption",
    },
    {
      text: "Biodiversity",
    },
    {
      text: "Energy mix",
      children: [
        { text: "Electricity" },
        { text: "Gas" },
        { text: "Heat mix for agriculture" },
        { text: "Heat mix for processing" },
        { text: "Motor fuels" },
        { text: "Fuels for industry" },
      ],
    },
  ],
};

export { atmTopics };
