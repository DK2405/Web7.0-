const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const questionRouter = require('./module/question/question');

let app = express();
let hbs = exhbs.create({});

app.use(bodyParser.urlencoded({extended : true}));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/question', (req, res) => {
  res.render('question', {
    id : 2,
    content : 'mot cai content gi day'
  });
})

app.use('/questionRouter', questionRouter);

app.listen(3000, ()=> {
  console.log('Server is up at 3000');
})
