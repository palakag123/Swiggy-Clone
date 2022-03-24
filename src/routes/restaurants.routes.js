const express = require("express");

const router = express.Router();

const handlers = require("../handlers/restaurants.handler");

router.get("/restaurants", handlers.getRestaurants);
router.get("/menu/:restaurantId", handlers.getMenu);
router.get("/search", handlers.getFilteredRestaurants);

module.exports = { router };
