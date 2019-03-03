const Post = require('../models/post');

function getPosts(req,res){
	Post.find({},(err,posts)=>{
		if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
		if (!posts) return res.status(404).send({message: `Error posts no existen`});

		res.status(200).send({posts})
	})
}

function getPost(req,res){
	Post.findById(req.params.postId,(err,post)=>{
		if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
		if (!post) return res.status(404).send({message: `Error posts no existen`});

		res.status(200).send({post})
	})
}

function getPostInEjs(req,res){
	Post.findById(req.params.postId,(err,post)=>{
		if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
		if (!post) return res.status(404).send({message: `Error posts no existen`});

		res.render(__dirname + '/../src/Article/index.ejs',{
			titleOG:post.title,
			descriptionOG: post.article,
			imageOG: post.miniatura,
			urlOG: `http://www.weaflix.tk/post/${req.params.postId}`
		});
		//res.status(200).send({post})
	})
}




function addPost(req,res){
	console.log(req.body);
	let post = new Post({
		title: req.body.title,
		article: req.body.article,
		principalImage: req.body.principalImage,
		miniatura: req.body.miniatura,
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
	getPosts,
	getPost,
	getPostInEjs
}
