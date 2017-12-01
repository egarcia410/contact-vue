module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/contacts'
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL
    }
};