const ContactController = require('./controllers/ContactController');

module.exports = (app) => {
    app.post('/create', ContactController.create);
    app.get('/get-contacts', ContactController.getContacts);
}