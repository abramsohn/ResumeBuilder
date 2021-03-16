//// DEPENDENCIES ////
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


//// DEPENDENCIES CONFIGURATIONS ////
const app = express();
const PORT = 3003;
// cors configurations
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//// MIDDLEWARE ////
app.use(cors(corsOptions))
app.use(express.json());

//// DATABASE ////
// errors
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log ('mongo is disconnected'));
//conections
mongoose.connect('mongodb://localhost:27017/resumes', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
});

// app.get('/', (req,res) => {
//     res.send('hello')
// })

//// CONTROLLERS ////
const resumesController = require('./controllers/resume.js')
app.use('/resumes', resumesController)

//// LISTENER ////
app.listen(PORT, ()=> {
    console.log('running on port', PORT);
  });