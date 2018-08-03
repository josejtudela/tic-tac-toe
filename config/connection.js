const Mongoose = require('mongoose');

const conection = Mongoose.connect("mongodb://localhost:27017/tresenraya",{ useNewUrlParser: true }, (err) =>{
    console.error(err);
});

