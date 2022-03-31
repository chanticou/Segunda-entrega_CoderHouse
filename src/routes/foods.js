
const express = require('express')
const router= express.Router()
// const ManagerMongo = require('./daos/mongoProductDao')
const {productDao} = require('../daos/index')

const foodService = new productDao()


router.get('/',async (req,res)=>{
    console.log(foodService);
   await foodService.read().then(result=>res.send(result))
})

router.put('/:idFood',async(req,res)=>{
    let params_id = req.params.idFood
    let  updatefood = req.body
    await foodService.update(params_id,updatefood).then(result=>console.log(result))
})

router.post('/', async (req,res)=>{
    let body= req.body
    await foodService.create(body).then(result=>res.send(result))
})

router.delete('/id_food',async (req,res)=>{
    let id_food = req.params.id_food
    await foodService.delete(id_food).then(result=>res.send(result))

})
module.exports=router