const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "98154775",
    database: "armazem",
  },
});

module.exports = knex;
