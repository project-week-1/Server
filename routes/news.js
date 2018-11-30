var express = require('express');
var router = express.Router();
const newsController = require('../controllers/newsController')



router.get('/get', newsController.getNews)


module.exports = router;
