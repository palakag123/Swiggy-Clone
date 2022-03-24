const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const { restaurantIdSchema, dishQuerySchema } = require('../validators/routes.validators');

const router = express.Router();

const handlers = require('../handlers/restaurants.handler');

router.get('/restaurants', handlers.getRestaurants);
router.get('/menu/:restaurantId', validator.params(restaurantIdSchema), handlers.getMenu);
router.get('/search', validator.query(dishQuerySchema), handlers.getFilteredRestaurants);

module.exports = { router };
