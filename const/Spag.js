const steps = [
  {
    content: "1. Cook spaghetti noodles according to package instructions.",
  },
  {
    content: "2. In a sauce pan or wok, sautÃ© garlic and onions in cooking oil.",
  },
  {
    content:
      "3. Add ground beef, ground pork, laurel leaves, bell pepper and a cup of water. Bring to a boil and let simmer for 10 minutes.",
      counter: {
        until: 60 * 10 + 0,
        size: 20,
        // onFinish={() => alert('Finished')}
        digitStyle: { backgroundColor: "#FFF" },
        digitTxtStyle: { color: "#1CC625" },
        timeToShow: ["M", "S"],
        timeLabels: { m: "Min", s: "Sec" },
      },
  },
  {
    content:
      "4. Add tomato sauce, salt and pepper to taste then let simmer for another 10 minutes.",
      counter: {
        until: 60 * 10 + 0,
        size: 20,
        // onFinish={() => alert('Finished')}
        digitStyle: { backgroundColor: "#FFF" },
        digitTxtStyle: { color: "#1CC625" },
        timeToShow: ["M", "S"],
        timeLabels: { m: "Min", s: "Sec" },
      },
  },
  {
    content:
      "5. Add brown sugar and hotdogs. Continue to simmer for an additional 5 minutes.",
      counter: {
        until: 60 * 5 + 0,
        size: 20,
        // onFinish={() => alert('Finished')}
        digitStyle: { backgroundColor: "#FFF" },
        digitTxtStyle: { color: "#1CC625" },
        timeToShow: ["M", "S"],
        timeLabels: { m: "Min", s: "Sec" },
      },
  },
  {
    content:
      "6. Serve with the cooked spaghetti noodles and grated cheese on top.",
  },
];

export default steps;
