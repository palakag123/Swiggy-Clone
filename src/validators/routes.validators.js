const Joi = require('joi');

const restaurantIdSchema = Joi.object({
  restaurantId: Joi.number().integer().required(),
});

const dishQuerySchema = Joi.object({
  dish: Joi.string().required(),
});

module.exports = {
  restaurantIdSchema,
  dishQuerySchema,
};
