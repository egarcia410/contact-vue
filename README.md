# Contact App

CRUD application where users can enter their contacts information. Users can also seach through their contacts.

## Getting Started

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [PostgreSQL](https://www.postgresql.org/download/)
3. Install [Postgres.app](https://postgresapp.com/)
4. Inside terminal:
        $ psql
    ***You will now be in the postgres interactive terminal**
5. Create a `contacts` database:
        =# CREATE DATABASE contacts;
    ***ctrl-D or \q enter to exit psql shell**
6. Clone repository:
        $ git clone https://github.com/egarcia410/contact-vue.git
7. Navigate into `client` folder:
        $ cd contact-vue/client
8. Install `client` folder dependencies:
        $ npm install
9. Create tables for database:
        $ knex migrate:latest
10. Run `client` application:
        $ npm run dev
11. Navigate into `server` folder:
        $ cd ../server
12. Install `server` folder dependencies:
        $ npm install
13. Run `server` application:
        $ nodemon app.js
14. Inside browser, go to `http://localhost:8080/`


        