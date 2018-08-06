const games = {react: 0, vue: 0, reactMovements: [{movements:[1,1,1,2,2,0,0,0,0]}], vueMovements: [{movements:[1,1,0,2,2,2,0,0,0]}]};

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case '/users':
        return Promise.resolve({
          data: games
        });
    }
  })
};
