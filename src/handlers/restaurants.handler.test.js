const handlers = require('./restaurants.handler');
const { Dishes, Restaurants } = require('../../models');
const services = require('../services/restaurants.services');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('getRestaurants Function', () => {
  it('should send 404 response status if restaurants are not found', async () => {
    jest.spyOn(services, 'getRestaurants').mockResolvedValue([]);
    const res = mockResponse();
    await handlers.getRestaurants('', res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('no restaurants');
  });
  it('should send 200 response status if restaurants are returned ', async () => {
    const restaurant = [{
      id: 1, fullName: 'Restaurant A', costForTwo: 200, Location: 'Bangalore',
    }];
    jest.spyOn(services, 'getRestaurants').mockResolvedValue(restaurant);
    const res = mockResponse();
    await handlers.getRestaurants('', res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(restaurant);
  });
  it('should send 500 response status if some error is thrown', async () => {
    jest.spyOn(services, 'getRestaurants').mockRejectedValue(new Error('Some error!'));
    const res = mockResponse();
    await handlers.getRestaurants('', res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Some error!');
  });
});

describe('getMenu Function', () => {
  it('should send 404 response status if dishes are not found', async () => {
    jest.spyOn(services, 'getMenu').mockResolvedValue([]);
    const res = mockResponse();
    await handlers.getMenu({ params: { restaurantId: 1 } }, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('no dishes');
  });
  it('should send 200 response status if restaurants are returned ', async () => {
    const menu = [{
      name: 'Palak',
    }];
    jest.spyOn(services, 'getMenu').mockResolvedValue(menu);
    const res = mockResponse();
    await handlers.getMenu({ params: { restaurantId: 1 } }, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(menu);
  });
  it('should send 500 response status if some error is thrown', async () => {
    jest.spyOn(services, 'getMenu').mockRejectedValue(new Error('Some error!'));
    const res = mockResponse();
    await handlers.getMenu({ params: { restaurantId: 1 } }, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Some error!');
  });
});

describe('getFilteredRestaurants Function', () => {
  it('should send 404 response status if restaurants are not found', async () => {
    jest.spyOn(services, 'getRestaurantsByDish').mockResolvedValue([]);
    const res = mockResponse();
    await handlers.getFilteredRestaurants({ query: { dish: 'Soup' } }, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith("no restaurants for dish");
  });
  it('should send 200 response status if restaurants are returned ', async () => {
    const restaurant = [{
      id: 1, fullName: 'Restaurant A', costForTwo: 200, Location: 'Bangalore',
    }];
    jest.spyOn(services, 'getRestaurantsByDish').mockResolvedValue(restaurant);
    const res = mockResponse();
    await handlers.getFilteredRestaurants({ query: { dish: 'Soup' } }, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(restaurant);
  });
  it('should send 500 response status if some error is thrown', async () => {
    jest.spyOn(services, 'getRestaurantsByDish').mockRejectedValue(new Error('Some error!'));
    const res = mockResponse();
    await handlers.getFilteredRestaurants({ query: { dish: 'Soup' } }, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Some error!');
  });
});
