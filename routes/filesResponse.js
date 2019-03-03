'use strict'

const path = require('path');
const express = require('express')
const postCtrl = require('../controllers/postCtrl');
const html = express.Router()


html.get('/',(req,res)=>{
	console.log("xddddd")
	res.sendFile(path.resolve(__dirname +'/../src/Home/index.html'))
})

html.get('/post/:postId?',postCtrl.getPostInEjs)


module.exports = html;
