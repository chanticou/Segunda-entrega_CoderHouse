const mongoose = require('mongoose')


//Definit la coleccion
//aca defino el nombre de mi coleccion
const cartCollection = 'carts'

const cartSchema = new mongoose.Schema({
    //¿Que necesita tener cada usuario?
    products:{
        type:Array,
        required:true
    }
})

//vamos a utilizar mi Schema
//vamos a generar un modelo
//mongoose.model(1,2)=primer argumento necesita el nombre de la coleccion que va a trabajar con la base de datos, 2 argumentos el nomrbe del Schema
// export const cartService = mongoose.model(cartCollection, cartSchema)
module.exports = mongoose.model(cartCollection, cartSchema)