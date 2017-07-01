const fs = require ('fs');
const express = require('express');
const questionRouter = require('./module/question/question.js');
const menuRouter = require('./module/menu/menu.js');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended : true}));

// app.get('/', (req,res) => {
//   res.send('Welcome to my app');
// });

app.use('/', menuRouter);
app.use('/question', questionRouter);
app.listen(3000, () => {
  console.log('App is running');
});

app.get('/object', (req, res) => {
  let testObject = {
    a : "test",

    b : "abc"
  }

  res.send(testObject);
});

app.get('/redirect', (req,res) => {
  res.redirect('/question');
});
