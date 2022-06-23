const songModel = require('../models/model_song');

const getHomePage = async(req, res) => {
    let dataSong = await songModel.getlistSong();
    let songString = JSON.stringify(dataSong);
    res.render('homepage', {songString: songString});  
}

const getAddPage = async(req, res) => {
    res.render('add-music');
}

module.exports = {
    getHomePage,
    getAddPage
}