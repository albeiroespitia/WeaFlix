'use strict'

const express = require('express')
const postCtrl = require('../controllers/postCtrl');
const api = express.Router()

api.get('/posts',postCtrl.getPosts);
api.post('/post',postCtrl.addPost);


module.exports = api
