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
    pool.query("SELECT * from supply order by id").then((answer) => {
        res.json(answer.rows);
    })
})

//put supply

routes.put("/DnDSupply/:id", (req, res) => {
    pool.query("update supply set name=$1::text, quantity=$2::int where id=$3::int", [req.body.item, req.body.quantity, req.params.id]).then(() => {
        pool.query("SELECT * from supply order by id").then((answer) => { //problems due to shared obj with mismatched properties?
            res.json(answer.rows);
        })
    })
});


module.exports = routes;