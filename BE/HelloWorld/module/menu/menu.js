const express = require('express');
let router = express.Router();
const path = require('path');

// let fileMenuHtml = path.join(__dirname,
// '../../public/menu.html');

router.use(express.static('public'));
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/menu.html'));
});
module.exports = router;
