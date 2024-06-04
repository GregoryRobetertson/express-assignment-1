'use strict';

const express = require('express');
const app = express();
const port = 3001 || 3002
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.post('/data', (req, res) => {
    res.json(req.body);
})

app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})