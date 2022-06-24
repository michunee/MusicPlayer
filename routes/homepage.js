var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homepage');

/* GET home page. */
router.get('/', homeController.getHomePage);
router.get('/add', homeController.getAddPage);
router.post('/add', homeController.addSong);
router.get('/list', homeController.getlistPage);
router.get('/delete/:id', homeController.deleteSong);
router.get('/edit/:id', homeController.getEditPage);
router.post('/edit/:id', homeController.editSong);

module.exports = router;
