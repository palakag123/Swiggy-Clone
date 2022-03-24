const services = require('./restaurants.services');
const { Dishes, Restaurants } = require('../../models');

describe('getRestaurants Function', () => {
  it('should return all the restaurants from the database', async () => {
    jest.spyOn(Restaurants, 'findAll').mockResolvedValue([{
      id: 1, fullName: 'Restaurant A', costForTwo: 200, Location: 'Bangalore',
    }, {
      id: 2, fullName: 'Restaurant B', costForTwo: 2000, Location: 'Bangalore',
    }]);
    expect(await services.getRestaurants()).toEqual([{
      id: 1, fullName: 'Restaurant A', costForTwo: 200, Location: 'Bangalore',
    }, {
      id: 2, fullName: 'Restaurant B', costForTwo: 2000, Location: 'Bangalore',
    }]);
  });
  it('should throw error if some internal error', async () => {
    jest.spyOn(Restaurants, 'findAll').mockRejectedValue(new Error('Some error!'));
    try {
      await services.getRestaurants();
    } catch (err) {
      expect(err.message).toBe('Some error!');
    }
  });
});
describe('getMenu function', () => {
  it('should return the dishes from the menu when restaurant id is given', async () => {
    jest.spyOn(Dishes, 'findAll').mockResolvedValue([{
      id: 1, name: 'Pizza', price: '5000', rating: 5,
    }, {
      id: 2, name: 'Piri Piri fries', price: '4000', rating: 4,
    }]);
    expect(await services.getMenu(1)).toEqual([{
      id: 1, name: 'Pizza', price: '5000', rating: 5,
    }, {
      id: 2, name: 'Piri Piri fries', price: '4000', rating: 4,
    }]);
  });
  it('should return error if input not given', async () => {
    try {
      await services.getMenu();
    } catch (err) {
      expect(err.message).toBe('Invalid, Restaurant Id must be given!');
    }
  });
  it('should return error if Restaurant Id not number', async () => {
    try {
      await services.getMenu('hi');
    } catch (err) {
      expect(err.message).toBe('Invalid, Restaurant Id must be integer!');
    }
  });
  it('should throw error if some internal error', async () => {
    jest.spyOn(Dishes, 'findAll').mockRejectedValue(new Error('Some error!'));
    try {
      await services.getMenu(1);
    } catch (err) {
      expect(err.message).toBe('Some error!');
    }
  });
});
describe('getRestaurantsByDish Function', () => {
  it('should return all the restaurants that have the dish from the database', async () => {
    jest.spyOn(Dishes, 'findAll').mockResolvedValue([{
      id: 1,
      name: 'Soup',
      price: '500',
      rating: 4,
      Restaurant: {
        id: 1, fullName: 'Restaurant A', costForTwo: 200, Location: 'Bangalore',
      },
    }]);
    expect(await services.getRestaurantsByDish('Soup')).toEqual([{
      id: 1, fullName: 'Restaurant A', costForTwo: 200, Location: 'Bangalore',
    }]);
  });
  it('should throw error if some internal error', async () => {
    jest.spyOn(Dishes, 'findAll').mockRejectedValue(new Error('Some error!'));
    try {
      await services.getRestaurantsByDish('Soup');
    } catch (err) {
      expect(err.message).toBe('Some error!');
    }
  });
  it('should return error if input not given', async () => {
    try {
      await services.getRestaurantsByDish();
    } catch (err) {
      expect(err.message).toBe('Invalid, Dish name must be given!');
    }
  });
  it('should return error if Dish is not a string', async () => {
    try {
      await services.getRestaurantsByDish(6);
    } catch (err) {
      expect(err.message).toBe('Invalid, Dish name must be a string!');
    }
  });
});
// it('should return error if no input given', async () => {
//   try {
//     await utils.addNewList();
//   } catch (err) {
//     expect(err.message).toBe('Invalid, enter valid list data!');
//   }

// it('should return error if list name not string', async () => {
//   try {
//     await utils.addNewList({ name: 0 });
//   } catch (err) {
//     expect(err.message).toBe('Invalid, enter valid list name!');
//   }
// });
// });
// describe('addTask Function', () => {
//   const testTask = { listId: 1, title: 'Dummy task' };
//   it('should return new task ID', async () => {
//     jest.spyOn(tasks, 'create').mockResolvedValue({ id: 1 });
//     expect(await utils.addNewTask(testTask.title, testTask.listId)).toBe(1);
//   });
//   it('should return error if no input given', async () => {
//     try {
//       await utils.createTask();
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if Task title not string', async () => {
//     try {
//       await utils.createTask({ title: 5 });
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task title!');
//     }
//   });
//   it('should return error if list Id not given', async () => {
//     try {
//       await utils.addNewTask('dummy title');
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid list Id!');
//     }
//   });
//   it('should return error if list Id not number', async () => {
//     try {
//       await utils.addNewTask('dummy title', 'dummy id');
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid List Id!');
//     }
//   });
//   it('should return error if other internal/query', async () => {
//     jest.spyOn(tasks, 'create').mockRejectedValue(new Error('Some error!'));
//     try {
//       await utils.addNewTask(testTask.title, testTask.listId);
//     } catch (err) {
//       expect(err.message).toBe('Task Error: Some error!');
//     }
//   });
// });

// describe('getLists function', () => {
//   it('should return all the Lists in an array', async () => {
//     jest.spyOn(lists, 'findAll').mockResolvedValue([1, 2, 3]);
//     expect(await utils.getLists()).toEqual([1, 2, 3]);
//   });
//   it('should throw error if some internal error', async () => {
//     jest.spyOn(lists, 'findAll').mockRejectedValue(new Error('Some error!'));
//     try {
//       await utils.getLists();
//     } catch (err) {
//       expect(err.message).toBe('List Error: Some error!');
//     }
//   });
// });
// describe('getTASKS function', () => {
//   it('should return all the tasks in the list in an array', async () => {
//     jest.spyOn(tasks, 'findAll').mockResolvedValue([1, 2, 3]);
//     expect(await utils.getTasks(1)).toEqual([1, 2, 3]);
//   });
//   it('should return error if input not given', async () => {
//     try {
//       await utils.getTasks();
//     } catch (err) {
//       expect(err.message).toBe('Invalid, List Id must be integer!');
//     }
//   });
//   it('should return error if List Id not number', async () => {
//     try {
//       await utils.getTasks('hi');
//     } catch (err) {
//       expect(err.message).toBe('Invalid, List Id must be integer!');
//     }
//   });
//   it('should throw error if some internal error', async () => {
//     jest.spyOn(tasks, 'findAll').mockRejectedValue(new Error('Some error!'));
//     try {
//       await utils.getTasks();
//     } catch (err) {
//       expect(err.message).toBe('Task Error: Some error!');
//     }
//   });
// });

// describe('update Function', () => {
//   const testTask = { id: 1, listId: 1, title: 'title1' };
//   it('should return modified task if changed', async () => {
//     jest.spyOn(tasks, 'update').mockResolvedValue(testTask);
//     expect(await utils.update(testTask.id, testTask.title)).toBe(testTask);
//   });
//   it('should return error if input not given', async () => {
//     try {
//       await utils.update();
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if task Id not given', async () => {
//     try {
//       await utils.update('title1');
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if task title not given', async () => {
//     try {
//       await utils.update(1);
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if task Id not number', async () => {
//     try {
//       await utils.update('hi', 'title1');
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if task title not string', async () => {
//     try {
//       await utils.changeTask('hi', 4);
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if other internal error', async () => {
//     jest.spyOn(tasks, 'update').mockRejectedValue(new Error('Some error!'));
//     try {
//       await utils.tasks(testTask.id, testTask.title);
//     } catch (err) {
//       expect(err.message).toBe('Task Error: Some error!');
//     }
//   });
// });

// describe('DeleteTask Function', () => {
//   const testTask = { id: 1, listId: 1 };
//   it('should return deleted task once deleted', async () => {
//     jest.spyOn(tasks, 'destroy').mockResolvedValue(testTask);
//     expect(await utils.deleteTododb(testTask.id)).toBe(testTask);
//   });
//   it('should return error if input not given', async () => {
//     try {
//       await utils.deleteTododb();
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if task Id not number', async () => {
//     try {
//       await utils.deleteTododb('hi');
//     } catch (err) {
//       expect(err.message).toBe('Invalid, enter valid task details!');
//     }
//   });
//   it('should return error if other internal error', async () => {
//     jest.spyOn(tasks, 'destroy').mockRejectedValue(new Error('Some error!'));
//     try {
//       await utils.deleteTododb(testTask.id);
//     } catch (err) {
//       expect(err.message).toBe('Task Error: Some error!');
//     }
//   });
// });
