const knex = require('../db/knex');

module.exports = {

    create(req, res) {
        let firstName = req.body.firstname;
        let lastName = req.body.lastname;
        let dob = req.body.dob;
        let street = req.body.street;
        let city = req.body.city;
        let state = req.body.state;
        let zipcode = req.body.zipcode;
        let number = req.body.number;
        let email = req.body.email;

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
    }
}