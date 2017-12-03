const knex = require('../db/knex');

module.exports = {

    // Create new contact
    create(req, res) {
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

        // Insert contact validation

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
    }
}