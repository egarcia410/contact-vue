const ContactController = require('./controllers/ContactController');

module.exports = (app) => {
    app.post('/create-or-update', ContactController.createOrUpdate);
    app.get('/get-contacts', ContactController.getContacts);
    app.post('/delete-contact', ContactController.delete);
    app.get('/get-contact/:id', ContactController.getContact);
}