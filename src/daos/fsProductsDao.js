const fs = require('fs')


const PATHFOOD = __dirname+'/../files/foods'


    

class foodManager{

    create=async(food)=>{

        try{
                if(fs.existsSync(PATHFOOD)){
                let data = await fs.promises.readFile(PATHFOOD, 'utf-8', null, 3)
                let foods = JSON.parse(data)
                let id = foods[foods.length-1].id+1
                food.id = id
                foods.push(food)
              
                
                await fs.promises.writeFile(PATHFOOD, JSON.stringify(foods, null, 3))
                return {status:'success', message:'New food created with File System'}
             

                     
            }else{
                food.id=1
                await fs.promises.writeFile(PATHFOOD, JSON.stringify([food], null, 3))
                return{status:'Succes', message:'First food created with File System'}
            }
            
        }catch(error){
            return{status:'Error', message:error}
        }
    }

    read=async()=>{
        if(fs.existsSync(PATHFOOD)){
            try{
                let data = await fs.promises.readFile(PATHFOOD, 'utf-8', null, 3)
                let foods = JSON.parse(data)

                return{status:'Success read  with File System', payload: foods}
            }catch(error){
                return{status:'Error', message:error}
            }
        }else{
            return{status:'No foods', payload:[]}
        }
    }

 

    update=async(id, updatefood)=>{
        try{
            if(fs.existsSync(PATHFOOD)){
                let data = await fs.promises.readFile(PATHFOOD, 'utf-8', null, 3)
                let foods = JSON.parse(data)

                let newArrayUpdate = foods.map(food=>{
                    if(food.id == id){
                        updatefood.id=id
                        return  updatefood
                    }else{
                        return food;
                    }
                })
                
                await fs.promises.writeFile(PATHFOOD, JSON.stringify(newArrayUpdate, null, 3))
                return {status:'Succes', message:'update food with File System' }
            }    

        }catch(error){
            return{message:error}
        }
    }

    delete= async (id)=>{
        if(fs.existsSync(PATHFOOD)){
            let data= await fs.promises.readFile(PATHFOOD, 'utf-8', null, 3)
            let foods= JSON.parse(data)

            let deleteFoodFilter= foods.filter((food => food.id !== id))

            await fs.promises.writeFile(PATHFOOD, JSON.stringify(deleteFoodFilter,null,3))
            return {
                status:'succes',
                message:'Food delete with File System'
            }            
        }
    }
}




module.exports = foodManager;










