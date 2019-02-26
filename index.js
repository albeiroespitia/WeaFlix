const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')



mongoose.connect(config.db,(err,res)=>{
    if(err){
        return console.log(err);
    }
    console.log('Conectado a mongodb correctamente')

    app.listen(config.port, ()=>{
        console.log(`Escuchando en el puerto ${config.port}...`)
    })

})
