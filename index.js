const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('src'));


app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/src/Home/index.html')
})


mongoose.connect('mongodb://localhost:27017/weaflix',(err)=>{
	if(err){
		return console.log("error");
	}

	console.log('Conectado a mongodb correctamente')

	app.listen(3000,()=>{
		console.log('Conectado al puerto 3000 correctamente')
	})
})
