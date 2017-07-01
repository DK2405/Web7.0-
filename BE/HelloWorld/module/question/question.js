const express = require('express');
const fs = require('fs')
let router = express.Router();
const path = require('path');

router.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname,'../../public/question.html'));
});

router.post('/', (req, res) => {
  fs.appendFile('./module/question/question.txt', req.body  .question , function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

let data = fs.readFileSync('./module/question/question.txt', 'utf-8');
  res.send(data);
});

module.exports = router;
filePath = __dirname + '/public/data.txt';
