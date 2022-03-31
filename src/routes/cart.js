const express = require('express')
const router = express.Router()

const {cartDao} =require('./../daos/index')
const cartService = new cartDao()

router.get('/',async(req,res)=>{
    await cartService.read().then(result=>res.send(result))
})

router.post('/',async(req,res)=>{
    let body = req.body
    await cartService.create(body).then(result=>res.send(result))
})

router.delete('/:id_cart', async(req,res)=>{
    let id_cart = req.params.id_cart
    await cartService.delete(id_cart).then(result=>res.send(result))
})

router.put('/:cart/food/:foods',async(req,res)=>{
    let cart_id= req.params.cart
    let prod_id = req.params.foods
    await cartService.update(cart_id,prod_id).then(result=>res.send(result))
})



module.exports = router ;

