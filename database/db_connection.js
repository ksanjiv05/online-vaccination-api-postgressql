const pg = require("pg");
// const connectionString =
//   process.env.DATABASE_URL || "postgres://localhost:5432/online-vaccination";
// const client = new pg.Client(connectionString);
// client.connect();
// const query = client.query(
//   "CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)"
// );
// query.on("end", () => {
//   client.end();
// });

const { Client } = require("pg");
const client = new Client({
  host: "ec2-3-215-83-17.compute-1.amazonaws.com", //"localhost",
  user: "ncarrhdjkobqhr", //"postgres",
  password: "fc6c691c3153247600bd73169e1d783e216802116bda58f9add2049b746b8351", //"0005",
  database: "dechrvveh9elc2", //"online-vaccination",
  ssl: true,
});

module.exports = {
  client,
};

// const connectionString =
//   "postgres://ncarrhdjkobqhr:fc6c691c3153247600bd73169e1d783e216802116bda58f9add2049b746b8351@ec2-3-215-83-17.compute-1.amazonaws.com:5432/dechrvveh9elc2";
// const q = `CREATE TABLE IF NOT EXISTS users(
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(40) not null,
//   email VARCHAR(40) not null,
//   pass VARCHAR(40) not null,
//   varified BOOLEAN,
//   dob VARCHAR(10)
// )`;

// const x = () => {
//   client.connect();
//   console.log("success", client);
//   client.query(q, (err, res) => {
//     if (err) console.log("err", err);
//     console.log("success", res);
//     client.end();
//   });
// query.on("end", () => {
//   console.log("success");
//   client.end();
// });
// query.on("error", (err) => {
//   console.log("err", err);
//   client.end();
// });

// query.on("end", () => {
//   console.log("success");
//   client.end();
// });
// query.on("error", (err) => {
//   console.log("err", err);
//   client.end();
// });
