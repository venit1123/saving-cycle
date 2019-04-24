'use strict';

const express = require('express');
const path = require('path');
const { Pool } = require('pg'); 

let app = express();


require('dotenv').config();

app.use(express.json())

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || `postgres://localhost:5432/tanda`,
    ssl: process.env.NODE_ENV === 'production'
});

// app.get('/', async (req, res) => {
//     res.send("Hello")
// });


app.get('/tanda', async (req, res) => {
    let client;
    
    try {
        client = await pool.connect();
        let result = await client.query('SELECT * FROM tanda');
        console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
    finally { client && client.release(); }

});


app.post('/tanda', async (req, res) => {
    let client;
    
    try {
        client = await pool.connect();

        let result = await client.query('INSERT INTO tanda VALUES(default,$1,$2,$3,$4,$5,$6,$7) RETURNING *',[
            req.body.moneyAmount, 
            req.body.timeGap, 
            req.body.startDay, 
            req.body.endDay, 
            req.body.slots, 
            req.body.available_slots,
            req.body.tanda_type_id
        ]);

        console.log(result.rows[0]);
        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(err);
        res.status(500).send("Server error: " + error);
    }
    finally { client && client.release(); }

});









if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../client/build")));
    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

const PORT = process.env.PORT || 3000;



app.listen(process.env.PORT || PORT, function () {
    console.log('Tanda-server is up and running...');
});