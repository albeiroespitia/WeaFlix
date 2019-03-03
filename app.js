'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes')
const htmlResponse = require('./routes/filesResponse.js')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/src'));

app.use('/api',api)

app.use('/',htmlResponse);


module.exports = app
