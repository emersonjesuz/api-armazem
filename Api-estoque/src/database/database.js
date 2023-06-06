const client = require("pg").Client;
const cliente = new client({
  user: "postgres",
  password: "98154775",
  host: "localhost",
  port: 5432,
  database: "armazem",
});

module.exports = cliente;
