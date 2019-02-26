const Post = require('../models/post');

function getPosts(req,res){
	Post.find({},(err,posts)=>{
		if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
		if (!posts) return res.status(404).send({message: `Error posts no existen`});

		res.status(200).send({posts})
	})
}


function addPost(req,res){
	console.log(req.body);
	let post = new Post({
		title: req.body.title,
		article: req.body.article,
		principalImage: req.body.principalImage,
		category: req.body.category,
		tag: req.body.tag
	})

	post.save((err, postSaved)=>{
		if(err) res.status(500).send({message:`Error al salvar su post ${err}`})

		res.status(200).send({postSaved});

	})
}

module.exports = {
	addPost,
	getPosts
}
