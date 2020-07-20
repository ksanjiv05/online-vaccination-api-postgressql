const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "0005",
  database: "online-vaccination",
});
client.connect();
module.exports = {
  client,
};
