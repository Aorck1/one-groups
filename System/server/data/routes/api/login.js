var express = require('express');
var router = express.Router();
let db = require('../../config/mysql')

router.post('/', function (req, res, next) {
  console.log('111');
  res.send('1111')
});

module.exports = router;