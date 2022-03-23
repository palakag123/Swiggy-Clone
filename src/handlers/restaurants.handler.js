const services = require("../services/restaurants.services");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await services.getRestaurants();
    if (!restaurants) {
      res.status(404).send("no restaurants");
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
    if (!menu) {
      res.status(404).send("no dishes");
    }
    res.json(menu).status(200);
  } catch (err) {
    res.send(err.message).status(500);
  }
};

module.exports = { getRestaurants, getMenu };
