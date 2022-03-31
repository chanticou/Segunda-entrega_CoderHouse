const mongoose = require('mongoose')

const foodCollection = 'foods'

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:String
})


module.exports = mongoose.model(foodCollection, foodSchema)