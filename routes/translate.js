var express = require('express');
var router = express.Router();
const Controller  = require('../controllers/translate.js')

router.post('/', Controller.translate)
router.get('/', Controller.listLang)

module.exports = router;