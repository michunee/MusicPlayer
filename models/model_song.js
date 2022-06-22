const db = require('../models/database');

exports.getlistSong = async ()=> {
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