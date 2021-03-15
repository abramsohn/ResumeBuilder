const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3003;

app.use(express.json());


mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log ('mongo is disconnected'));

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

app.get('/', (req,res) => {
    res.send('hello')
})


app.listen(PORT, ()=> {
    console.log('celebrations happening on port', PORT);
  });