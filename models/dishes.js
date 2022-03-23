const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurants }) {
      // define association here
      Dishes.belongsTo(Restaurants, {
        onDelete: 'cascade',
        foreignKey: 'restaurant_id',
      });
    }
  }
  Dishes.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Dishes',
  });
  return Dishes;
};
