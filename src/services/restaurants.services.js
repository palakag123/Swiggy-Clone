const db = require("../../models");

const getRestaurants = async () => {
  const restaurants = await db.Restaurants.findAll({
    attributes: ["id", "fullName", "costForTwo", "Location"],
  });
  return restaurants;
};

const getMenu = async (restaurantId) => {
  if (!restaurantId) {
    throw new Error('Invalid, Restaurant Id must be given!');
  }
  if (typeof (restaurantId) !== 'number') {
    throw new Error('Invalid, Restaurant Id must be integer!');
  }
  const dishes = await db.Dishes.findAll({
    attributes: ["id", "name", "price", "rating"],
    where: { restaurant_id: parseInt(restaurantId, 10) },
  });
  return dishes;
};

const getRestaurantsByDish = async (dish) => {
  if (!dish) {
    throw new Error('Invalid, Dish name must be given!');
  }
  if (typeof (dish) !== 'string') {
    throw new Error('Invalid, Dish name must be a string!');
  }
  const filteredRestaurants = await db.Dishes.findAll({
    include: {
      model: db.Restaurants,
      attributes: ["id", "fullName", "costForTwo", "Location"],
    },
    where: {
      name: dish,
    },
  });

  const restaurantList = filteredRestaurants.map(
    (restaurant) => restaurant.Restaurant,
  );
  return restaurantList;
};

module.exports = { getRestaurants, getMenu, getRestaurantsByDish };
