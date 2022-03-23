/* eslint-disable no-unused-vars */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Dishes }) {
      Restaurants.hasMany(Dishes, {
        foreignKey: 'id',
      });
      // define association here
    }
  }
  Restaurants.init({
    fullName: DataTypes.STRING,
    costForTwo: DataTypes.INTEGER,
    Location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Restaurants',
  });
  return Restaurants;
};
