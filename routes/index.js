var express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

// console.log(path.dirname(__dirname) + '\\public\\css\\')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   const curdir = path.dirname()
//   console.log(curdir)
//   res.sendFile(path.dirname(__dirname) + '\\public\\index.html')
// });

// router.get('/stylesheets/stryle.css', () => {
//   res.sendFile('../publuc/')
// })

module.exports = router;
