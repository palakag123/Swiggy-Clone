const services = require('../services/restaurants.services');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await services.getRestaurants();
    if (restaurants.length === 0) {
      res.status(204).send('no restaurants'); // 204 - no content
    }
    res.json(restaurants).status(200);
  } catch (err) {
    res.send(err.message).status(500);
  }
};

const getMenu = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const menu = await services.getMenu(restaurantId);
    if (menu.length === 0) {
      res.status(204).send('no dishes');
    }
    res.json(menu).status(200);
  } catch (err) {
    res.send(err.message).status(500);
  }
};

const getFilteredRestaurants = async (req, res) => {
  const { dish } = req.query;
  try {
    const filteredRestaurants = await services.getRestaurantsByDish(dish);
    if (filteredRestaurants.length === 0) {
      res.status(204).send('no restaurants for dish');
    }
    res.json(filteredRestaurants).status(200);
  } catch (err) {
    res.send(err.message).status(500);
  }
};

module.exports = { getRestaurants, getMenu, getFilteredRestaurants };
