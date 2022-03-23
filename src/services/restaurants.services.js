const db = require("../../models");

const getRestaurants = async () => {
  const restaurants = await db.Restaurants.findAll();
  return restaurants;
};

module.exports = { getRestaurants };
