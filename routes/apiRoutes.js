const db = require('../db/db.json');
const fs =require('fs');

let id =db.length + 1;

module.exports = function (app) {
    app.post('/api/notes', function (req, res) {
        console.log(req.body);

        req.body.id = id++;
        console.log(req.body);

        db.push(req.body);

        fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
            if (err) throw err;

            res.json(db);

        });

    });

    app.get('api/notes/:id', function (req, res) {
        var id = parseInt(req.params.id);

        for (var i = 0; i< db.length; i++) {
            if (db[i].id === id) {
                db.splice(i, 1);
            }
        }
            console.log(db);

            fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
                if (err) throw error;
                res.json(db);
            });
        
    });
};