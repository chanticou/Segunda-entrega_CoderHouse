const fs= require('fs')

const pathCart = __dirname+'/../files/cart'
const PATHFOOD = __dirname+'/../files/foods'


class cartManager{

    create=async(cart)=>{
        
        if(fs.existsSync(pathCart)){
       
            try{
                let data = await fs.promises.readFile(pathCart, 'utf-8', null, 3)
                let productsCart = JSON.parse(data)
       
                let id = productsCart[productsCart.length-1].id+1
                cart.id = id
                productsCart.push(cart)
                await fs.promises.writeFile(pathCart, JSON.stringify(productsCart, null, 3))
                return {status:'success', message:'Cart created with File System'}
            }catch(error){
                return{error}
            }
        }else{
            cart.id=1
            await fs.promises.writeFile(pathCart, JSON.stringify([cart], null, 3))
            return{status:'Succes', message:'Cart created with File System!'}
        }
    }

    read=async()=>{
        if(fs.existsSync(pathCart)){
            try{
                let data = await fs.promises.readFile(pathCart, 'utf-8', null, 3)
                let carts = JSON.parse(data)

                return{status:'Success, read with File System', payload: carts}
            }catch(error){
                return{status:'Error', message:error}
            }
        }else{
            return{status:'No foods', payload:[]}
        }
    }


    update=async(idCart,idProduct)=>{
        if(fs.existsSync(pathCart)){
            try{
                let data = await fs.promises.readFile(pathCart, 'utf-8', null, 3)
                let carts = JSON.parse(data)
                let findCart=carts.find(cart=>cart.id==parseInt(idCart))

                
                let dataFOOD =await fs.promises.readFile(PATHFOOD, 'utf-8', null, 3)
                let foods = JSON.parse(dataFOOD)

                let findProduct=foods.find(product=>product.id==parseInt(idProduct))

                findCart.products.push(findProduct.id)

                await fs.promises.writeFile(pathCart, JSON.stringify(carts , null, 3))
                return{status:'Succes', message:'Product added with File System'}


            }catch(error){
                return {status:error};
            }
        }
    }


    delete=async(idCart,idProduct)=>{
        if(fs.existsSync(pathCart)){
            try{
                let data = await fs.promises.readFile(pathCart, 'utf-8', null, 3)
                let carts = JSON.parse(data)
                let findCart=carts.find(cart=>cart.id===parseInt(idCart))

                let arrayList = findCart.products
                
                let deleteProduct = arrayList.filter(prod=>prod !== idProduct) 
                arrayList = deleteProduct
                

                await fs.promises.writeFile(pathCart, JSON.stringify(carts, null, 3))
                return{status:'Success', message:'Delete product with File System'}
                                 

            }catch(error){
                return error
            }

        }        
    }
}




module.exports=cartManager


