'use strict';

const express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;



app.listen(process.env.PORT || PORT, function () {
    console.log('Tanda-server is up and running...');
});