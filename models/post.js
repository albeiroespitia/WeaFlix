const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
    title: String,
    article: String,
	principalImage: String,
	miniatura: String,
    category: { type: String, enum : ['movies','series']},
    tag: String
})

module.exports = mongoose.model('Post',PostSchema);
