const getFoodOrDrink = (GETFOOD) => (
  fetch(GETFOOD)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getFoodOrDrink;
