const knex = require('../db/knex');
const validator = require('validator');

module.exports = {

    // Create or Update contact contact
    createOrUpdate(req, res) {
        let errors = '';
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
        // Validate user's input on backend
        if (validator.isEmpty(contact.firstname)) {
            message = 'First name is required '
            errors += message;
        };
        if (validator.isEmpty(contact.lastname)) {
            message = 'Last name is required '
            errors += message;
        };
        if (validator.isEmpty(contact.number)) {
            message = 'Phone number is required '
            errors += message;
        };
        if (!validator.isNumeric(contact.number)) {
            message = 'Phone number must be numbers only '
            errors += message;
        };
        if (!validator.isLength(contact.number, {min: 10, max: 10})) {
            message = 'Phone number must be 10 digits long '
            errors += message;
        };
        if (!validator.isEmail(contact.email)) {
            message = 'Invalid Email '
            errors += message;
        };
        if (validator.isEmpty(contact.dob)) {
            message = 'DOB is required '
            errors += message;
        };
        if (validator.isEmpty(contact.street)) {
            message = 'Street is required '
            errors += message;
        };
        if (validator.isEmpty(contact.city)) {
            message = 'City is required '
            errors += message;
        };
        if (validator.isEmpty(contact.state)) {
            message = 'State is required '
            errors += message;
        };
        if (validator.isEmpty(contact.zipcode)) {
            message = 'Zipcode is required '
            errors += message;
        };
        if (!validator.isNumeric(contact.zipcode)) {
            message = 'Zipcode must be numbers only '
            errors += message;
        };
        if (!validator.isLength(contact.zipcode, { min: 5, max: 5 })) {
            message = 'Zipcode must be 5 digits long '
            errors += message;
        };
        // If errors
        if (errors) {
            return res.send({
                        status: 'warning',
                        message: errors
                    })
        }
        // Update user if contact id exists
        if (req.body.id) {
            knex('contacts').where('id', req.body.id).update(contact)
                .then((result) => {
                    res.send({
                        contact: contact,
                        status: 'success',
                        message: "Contact has been updated!"
                    });
                })
                .catch((error) => {
                    console.log(error)
                    res.send({
                        status: 'error',
                        message: "Unable to update contact!"
                    });
                })
        }
        // Creates contact if no contact id exists
        else {
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
                        status: 'error',
                        message: "Unable to add contact!"
                    });
                })
        }
    },
    // Retrieve all contacts
    getContacts(req, res) {
        knex('contacts').orderBy('created_at', 'desc')
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
    },
    // Retrieve one contact
    getContact(req, res) {

        knex('contacts').where('id', req.params.id)
            .then((result) => {
                // Contact exists in database
                if (result.length > 0) {
                    return res.send(result);
                }
                // If contact does not exist
                res.send({
                    status: 'error',
                    message: 'Contact does not exist!'
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },
}