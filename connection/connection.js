const pg = require("pg");
const url = require("url");
try {
require("dotenv").config();
} catch (e) {
console.log(e);
}

const pg = require("pg");
const pool = new pg.Pool({
user: "postgres",
password: "password", //was "****""
host: "localhost",
port: 5432,
database: "D&D", //was postgres
ssl: false
});
module.exports = new pg.Pool(config);



//may require changes