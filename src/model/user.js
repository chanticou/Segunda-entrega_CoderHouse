// const mongoose = require('mongoose')
// //Definit la coleccion
// //aca defino el nombre de mi coleccion
// const userCollection = 'users'

// const userSchema = new mongoose.Schema({
//     //¿Que necesita tener cada usuario?
//     first_name:{
//         type:String,
//         required:true
//     },
//     last_name:{
//         type:String,
//         required:true
//     },
//     age:Number,
//     email:{
//         type:String,
//         required:true
//     }
// })

// //vamos a utilizar mi Schema
// //vamos a generar un modelo
// //mongoose.model(1,2)=primer argumento necesita el nombre de la coleccion que va a trabajar con la base de datos, 2 argumentos el nomrbe del Schema
// // export const usersService = mongoose.model(userCollection, userSchema)
// module.exports = mongoose.model(userCollection, userSchema)