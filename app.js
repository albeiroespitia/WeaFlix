'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes')
const path = require('path')
const htmlResponse = require('./routes/filesResponse.js')


//app.set('src',path.join(__dirname+'/src/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/src'));

app.use('/api',api)

app.use('/',htmlResponse);


module.exports = app
