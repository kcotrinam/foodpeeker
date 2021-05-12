const splitInfo = (recipe) => {
  const entries = Object.entries(recipe[0]);
  const ingredients = entries
    .filter((el) => el[0].includes('strIngredient') && el[1])
    .map((el) => el[1]);

  const measurements = entries
    .filter((el) => el[0].includes('strMeasure') && el[1])
    .map((el) => el[1]);

  // info
  const filteredInfo = entries.filter(
    (el) => !el[0].includes('strIngredient') && !el[0].includes('strMeasure') && el[1],
  );
  const details = {};

  filteredInfo.forEach((el) => {
    const [key, value] = el;
    details[key] = value;
  });

  return { details, ingredients, measurements };
};

export default splitInfo;
