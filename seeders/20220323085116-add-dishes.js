/* eslint-disable no-unused-vars */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Dishes", [
      {
        name: "Veg Sandwich",
        price: "100",
        rating: 5,
        restaurant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Veg Burger",
        price: "100",
        rating: 5,
        restaurant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chicken Burger",
        price: "150",
        rating: 4,
        restaurant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soup",
        price: "1000",
        rating: 3,
        restaurant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fried rice",
        price: "900",
        rating: 5,
        restaurant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pizza",
        price: "800",
        rating: 4,
        restaurant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Idly",
        price: "1000",
        rating: 1,
        restaurant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dosa",
        price: "900",
        rating: 5,
        restaurant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vada",
        price: "800",
        rating: 3,
        restaurant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caviar",
        price: "10000",
        rating: 3,
        restaurant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lobster",
        price: "9000",
        rating: 2,
        restaurant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barnacle",
        price: "8000",
        rating: 4,
        restaurant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
