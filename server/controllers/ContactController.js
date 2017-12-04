const knex = require('../db/knex');

module.exports = {

    // Create new contact
    create(req, res) {
        let error = [];
        // Used for email validation
        // http://emailregex.com/
        let re = new RegEx('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
        let contact = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dob: req.body.dob,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            number: req.body.number,
            email: req.body.email
        }

        knex('contacts').insert(contact)
            .then((result) => {
                res.send({
                    contact: contact,
                    status: 'success',
                    message: "Contact has been added!"
                });
            })
            .catch((error) => {
                console.log(error)
                res.send({
                    result: 'error',
                    message: "Unable to add contact!"
                });
            })
    },
    // Retrieve all contacts
    getContacts(req, res) {
        knex.select().table('contacts')
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                console.log(error)
            })
    },
    // Delete contact by id
    delete(req, res) {
        let id = req.body.id;
        knex('contacts').where('id', id).del()
            .then(result => {
                res.send({
                    status: 'success',
                    message: 'Contact has been deleted!'
                })
            })
            .catch(error => {
                console.log(error);
                res.send({
                    status: 'error',
                    message: 'Unable to delete contact!'
                })
            })
    }
}