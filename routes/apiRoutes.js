// const db = require('./db/db.json');
const fs =require('fs');
const routes = require('express').Router()




    routes.post('/notes', function (req, res) {
        console.log(req.body);
const {title, text} = req.body
        const newNote = {title, text, id: Math.random()}


       fs.readFile('./db/db.json', function (err,json) {
            if (err) throw err;
            let id =json.length + 1;
      
        const notes = JSON.parse(json)

        notes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
            if (err) throw err;

          

        });
res.json(newNote)
});
    });

//    routes.get('/notes/:id', function (req, res) {
//         var id = parseInt(req.params.id);

//         for (var i = 0; i< db.length; i++) {
//             if (db[i].id === id) {
//                 db.splice(i, 1);
//             }
//         }
//             console.log(db);

//             fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
//                 if (err) throw error;
//                 res.json(db);
//             });
        
//     });

   routes.get('/notes', function (req, res) {
        //var id = parseInt(req.params.id);
        fs.readFile('./db/db.json', function (err, data) {
            if (err) throw err;
            
       
        
        const notes = JSON.parse(data)
        console.log (notes)
        res.json(notes)
        
    });
    });

    module.exports = routes
