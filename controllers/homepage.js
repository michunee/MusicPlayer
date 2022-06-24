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
    let dataSong = await songModel.getlistSongFull();
    res.render('list-music',{dataSong: dataSong});
}

const addSong = async(req, res) => {
    let {name, singer} = req.body;
    var path = req.files.path;
    var image = req.files.image;
    var pathSong = "assets/" + path.name;
    var imgSong = "images/" + image.name;
    let dataSong = await songModel.addSong(name, singer, pathSong, imgSong);
    res.redirect('/');
}

const deleteSong = async(req, res) => {
    let id = req.params.id;
    let dataSong = await songModel.deleteSong(id);
    res.redirect('/list');
}

const getEditPage = async(req, res) => {
    let id = req.params.id;
    let dataSong = await songModel.getSongDetail(id);
    res.render('edit-music', {dataSong: dataSong});
}

const editSong = async(req, res) => {
    let id = req.params.id;
    let {name, singer} = req.body;
    var path = req.files.path;
    var image = req.files.image;
    var pathSong = "assets/" + path.name;
    var imgSong = "images/" + image.name;
    let dataSong = await songModel.editSong(id,name, singer, pathSong, imgSong);
    res.redirect('/list');
}

module.exports = {
    getHomePage,
    getAddPage,
    getlistPage,
    addSong,
    deleteSong,
    getEditPage,
    editSong
}