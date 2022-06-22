var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homepage');

/* GET home page. */
router.get('/', homeController.getHomePage);

module.exports = router;
