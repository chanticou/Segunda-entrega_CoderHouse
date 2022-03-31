const mongoose = require('mongoose')

const cartService = require('../model/cartModel')
const foodService = require('../scheemaContainer/foodModel')

//Connecting with db cloud
mongoose.connect('mongodb+srv://chantal:logaritmoC@cluster0.dpj6h.mongodb.net/akira?retryWrites=true&w=majority',
    {useNewUrlParser:true,
    useUnifiedTopology:true
},error=>{
    if(error)throw new Error('Cannot connect to my db')
    console.log('Connected db cart')
})

class ManagerCart{
    read=async()=>{
        try{
            let readData = await cartService.find()
            return {status:readData}
        }catch(error){
            return{status:error}
        }
    }

    create=async(cart)=>{
        try{
            await cartService.insertMany([cart])
            // return {message:'Cart created with Mongodb'}
        }catch(error){
            return{status:error}
        }
    }

    delete=async(id_cart)=>{
        try{
            await cartService.deleteOne({_id:id_cart})
            // return{message:'Delete cart with Mongodb'}
        }catch(error){
            return{status:error}
        }
    }

    insertProduct=async(prod_id, cart_id)=>{
        try{
            let find = await foodService.findOne({_id:prod_id})
            await cartService.findOneAndUpdate({_id:cart_id},{$push:{products:find._id}})
        //    return{status:'Succes', message:'Inser product with Mongodb' }

        }catch(error){
            return{status:error}
        }

    }
}

module.exports=ManagerCart;