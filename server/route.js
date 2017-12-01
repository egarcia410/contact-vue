const ContactController = require('ContactController');

module.exports = (app) => {
    app.post('/create', ContactController.create);
}