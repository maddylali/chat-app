const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname + './../public');
const clientPath = path.join(__dirname, '../public');

const PORT = process.env.PORT || 3000;

app.use(express.static(clientPath))
    .listen(PORT, () => {
        console.log('app listening on port: ', PORT)
    })