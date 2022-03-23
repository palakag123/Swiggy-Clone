const db = require("../../models");

const getRestaurants = async () => {
  const restaurants = await db.Restaurants.findAll({
    attributes: ["id", "fullName", "costForTwo", "Location"],
  });
  return restaurants;
};

const getMenu = async (restaurantId) => {
  const dishes = await db.Dishes.findAll({
    attributes: ["id", "name", "price", "rating"],
    where: { restaurant_id: parseInt(restaurantId, 10) },
  });
  return dishes;
};

const getRestaurantsByDish = async (dish) => {
  const filteredRestaurants = await db.Dishes.findAll({
    include: {
      model: db.Restaurants,
      attributes: ["id", "fullName", "costForTwo", "Location"],
      // where: { id: db.Dishes.restaurant_id },
    },
    where: {
      name: dish,
    },
  });

  const restaurantList = filteredRestaurants.map(
    // eslint-disable-next-line comma-dangle
    (restaurant) => restaurant.Restaurant
  );
  return restaurantList;
};

module.exports = { getRestaurants, getMenu, getRestaurantsByDish };
