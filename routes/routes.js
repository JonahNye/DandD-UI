"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/pg-connection-pool.js");

pool.query("SELECT * FROM log").then((result) => {
    console.log(result.rows);
})


module.exports = routes;