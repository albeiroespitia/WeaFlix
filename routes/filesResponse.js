'use strict'

const path = require('path');
const express = require('express')
const html = express.Router()


html.get('/',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/../src/Home/index.html'))
})


module.exports = html;
