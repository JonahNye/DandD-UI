"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/pg-connection-pool.js");

//get log entries

routes.get("/DnD", (req, res) => {
        //match database name following /?
    pool.query("SELECT * FROM log").then((result) => {
        console.log(res.json(result.rows));
    })

})

//buy and sell log entries

routes.post("/DnD", (req, res) => {
    pool.query("insert into log(item, price, quantity, type) values($1::text, $2::int, $3::int, $4::text)", [req.body.item, req.body.price, req.body.quantity, req.body.type]).then(()=> {
        pool.query("SELECT * FROM log").then((result) => {
            console.log(res.json(result.rows));
        })
    })
})


//get supply

routes.get("/DnDSupply", (req, res) => {
    pool.query("SELECT * from supply").then((answer) => {
        res.json(answer.rows);
    })
})


module.exports = routes;