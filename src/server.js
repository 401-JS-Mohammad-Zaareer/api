'use strict';

// 3rd Party Resources
const express = require('express');
const userRoute = require('./router.js')

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use('', userRoute);
app.get('/', (req, res) => {
    res.send('Proof of Life!');
})

function run(port) {
    app.listen(port, () => { console.log('server up') })
}

module.exports = {
    app,
    run
}