const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3003;
const cors = require('cors')

app.use(express.json());

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors())

mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log ('mongo is disconnected'));

mongoose.connect('mongodb://localhost:27017/resumes', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
});

// app.get('/', (req,res) => {
//     res.send('hello')
// })

const resumesController = require('./controllers/resume.js')
app.use('/resumes', resumesController)


app.listen(PORT, ()=> {
    console.log('running on port', PORT);
  });