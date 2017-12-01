
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', function (table) {
        table.increments();
        table.string('firstname');
        table.string('lastname');
        table.date('dob');
        table.string('street');
        table.string('city');
        table.string('state');
        table.string('zipcode');
        table.string('number');
        table.string('email');
        table.timestamps();
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts')
};
