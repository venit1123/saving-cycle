'use strict';

import express from "express";

let app = express();

const PORT = process.env.PORT || 3000;



app.listen(process.env.PORT || port, function () {
    console.log('Tanda-server is up and running...');
});