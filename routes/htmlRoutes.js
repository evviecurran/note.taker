const path = require('path');
const routes = require('express').Router()

    routes.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));

    });
    routes.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    module.exports= routes
