var express = require('express');
var router = express.Router();
const Games = require('../models/games');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Games.find({winner:'React'},(err, winsReact) => {
    if(err) console.error(err)

    Games.find({winner:'Vue'}, (err , winsVue) => {
      if(err) console.error(err)

        const reactMovements = [];
        winsReact.forEach( react => {
          const mov = []
          react.movements.forEach(movement => {
            mov.push(movement.value);
          })
          reactMovements.push({movements: mov});
        })

        const vueMovements = [];
        winsVue.forEach( vue => {
          const mov = []
          vue.movements.forEach(movement => {
            mov.push(movement.value);
          })
          vueMovements.push({movements: mov});
        })
        
      res.json({react: winsReact.length, reactMovements, vue: winsVue.length, vueMovements});
    });
  })
});

router.post('/', (req, res, next) => {
  const { winner, squares } = req.body;

  const movements = squares.map( square => {
    delete square.id;
    return square;
  })

  Games.create({winner,movements}, (err, res) => {
    if(err) console.error(err)

    console.log(res);
  })
});

module.exports = router;
