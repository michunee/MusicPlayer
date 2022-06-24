const db = require('../models/database');

exports.getlistSongFull = async ()=> {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM song`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.getlistSong = async ()=> {
    return new Promise((resolve,reject) => {
        let sql = `SELECT name, singer, path, image FROM song`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.addSong = async (name, singer, path, image) => {
    let data = {
        name: name,
        singer: singer,
        path: path,
        image: image
    }
    return new Promise((resolve,reject) => {
        let sql = `INSERT INTO song SET ?`;
        let query = db.query(sql, data, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.deleteSong = async (id) => {
    return new Promise((resolve,reject) => {
        let sql = `DELETE FROM song WHERE id = ?`;
        let query = db.query(sql, id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.getSongDetail = async (id) => {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM song WHERE id = ?`;
        let query = db.query(sql, id, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.editSong = async (id, name, singer, path, image) => {
    let data = {
        name: name,
        singer: singer,
        path: path,
        image: image
    }
    return new Promise((resolve,reject) => {
        let sql = `UPDATE song SET ? WHERE id = ?`;
        let query = db.query(sql, [data, id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

