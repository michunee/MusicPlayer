const songModel = require('../models/model_song');

const getHomePage = async(req, res) => {
    let dataSong = await songModel.getlistSong();
    let songString = JSON.stringify(dataSong);
    res.render('homepage', {songString: songString});  
}

const getAddPage = async(req, res) => {
    res.render('add-music');
}

const getlistPage = async(req, res) => {
    let dataSong = await songModel.getlistSong();
    res.render('list-music',{dataSong: dataSong});
}

module.exports = {
    getHomePage,
    getAddPage,
    getlistPage
}