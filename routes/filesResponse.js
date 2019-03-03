'use strict'

const path = require('path');
const express = require('express')
const html = express.Router()


html.get('/',(req,res)=>{
	console.log("xddddd")
	res.sendFile(path.resolve(__dirname +'/../src/Home/index.html'))
})

html.get('/post/:postId?',(req,res)=>{
	res.sendFile(path.resolve(__dirname +'/../src/Article/index.html'))
})


module.exports = html;
