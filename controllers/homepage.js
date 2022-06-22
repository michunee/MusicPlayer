const songModel = require('../models/model_song');

const getHomePage = async(req, res) => {
    let dataSong = await songModel.getlistSong();
    res.render('homepage',{dataSong:dataSong})
}

module.exports = {
    getHomePage
}