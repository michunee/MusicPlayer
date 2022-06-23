var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homepage');

/* GET home page. */
router.get('/', homeController.getHomePage);
router.get('/add', homeController.getAddPage);
router.get('/list', homeController.getlistPage);

module.exports = router;
