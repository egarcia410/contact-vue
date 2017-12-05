
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', function (table) {
        table.increments().notNullable();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.date('dob').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('zipcode').notNullable();
        table.string('number').notNullable();
        table.string('email').notNullable();
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contacts')
};
