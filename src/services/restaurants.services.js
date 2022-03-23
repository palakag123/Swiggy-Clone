const db = require("../../models");

const getRestaurants = async () => {
  const restaurants = await db.Restaurants.findAll();
  return restaurants;
};

const getMenu = async (restaurantId) => {
  const dishes = await db.Dishes.findAll({
    where: { restaurant_id: parseInt(restaurantId, 10) },
  });
  return dishes;
};

module.exports = { getRestaurants, getMenu };
