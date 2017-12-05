const path = require('path');
const express = require('express');
const ContactController = require('./controllers/ContactController');

module.exports = (app) => {
    
    app.post('/create-or-update', ContactController.createOrUpdate);
    app.get('/get-contacts', ContactController.getContacts);
    app.post('/delete-contact', ContactController.delete);
    app.get('/get-contact/:id', ContactController.getContact);

    app.get('/dist/build.js', function (req, res) {
        res.sendFile(path.normalize(__dirname + '/../client/dist/build.js'));
    });

    app.all('/*', function (req, res) {
        res.sendFile(path.normalize(__dirname + '/../client/index.html'));
    });
}