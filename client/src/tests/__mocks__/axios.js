module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case '/users':
        return Promise.resolve({
          data: {react: 0}
        });
    }
  })
};

// { games: {
//   react: 100, 
//   vue: 0, 
//   reactMovements: [{movements:[{}]}], 
//   vueMovements: [{movements:[{}]}],
//   }
// }