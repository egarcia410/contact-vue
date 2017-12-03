const knex = require('../db/knex');

module.exports = {

    // Create new contact
    create(req, res) {
        contact = {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            dob: req.body.dob,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            number: req.body.number,
            email: req.body.email
        }

        // Insert contact validation

        knex('contacts').insert({   firstname: firstName, 
                                    lastname: lastName, 
                                    dob: dob,
                                    street: street,
                                    city: city,
                                    state: state,
                                    zipcode: zipcode,
                                    number: number,
                                    email: email })
            .then((result) => {
                console.log(result)
                res.send({
                    message: "Contact has been added!"
                });
            })
            .catch((error) => {
                console.log(error)
                res.send({
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