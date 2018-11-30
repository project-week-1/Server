const express = require('express')
const router = express.Router()
const textspeechController = require("../controllers/textspeechController.js")
const {dataSpeak,speak} = textspeechController

router.post('/',speak)

module.exports = router