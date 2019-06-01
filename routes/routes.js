"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/pg-connection-pool.js");

routes.get("/DnD", (req, res) => {
        //match database name following /?
    pool.query("SELECT * FROM log").then((result) => {
        console.log(res.json(result.rows));
    })

})


module.exports = routes;