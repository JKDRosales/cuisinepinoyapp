const steps = [
  {
    content: "1. Heat a cooking pot and pour-in cooking oil.",
  },
  {
    content: "2. Saute garlic and onion.",
  },
  {
    content:
      "3. Add ginger and mussels, and then cook for a minute.",
  },
  {
    content:
      "4. Pour-in water. Let boil.",
  },
  {
    content:
      "5. Add salt and pepper. Stir and cook for 8 to 10 minutes.",
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
      "6. Put-in the spinach. Turn the heat off and cover the pot.",
  },
  {
    content:
      "7. Allow the residual heat to cook the spinach.",
  },
  {
    content:
      "8. Transfer to a serving plate.",
  },
];

export default steps;
