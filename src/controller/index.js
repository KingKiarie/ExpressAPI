import{getCars,createCar,updateCar,deleteCar} from "../DB/index.js"

//Function communication between the db and the controller folder

const getAllCars = async(req,res)=>{
    try{
        const allCars = await getCars()

        return res.json(allCars).end()
    }catch(err){
        console.log(err)
    }
}

const createController =async(req,res)=>{

    const{values}=req.body

    try{
        const newCar = await createCar({
            title,
            image,
            description,
            mileage
        })

        return res.json(newCar).end()

    }catch(err){
        console.log(err)
    }
}

//update controller
const updateController = async(req,res)=>{
    const {id}=req.params
    const userInfo =req.body

    try{
        const updatedCar = await updateCar(id,userInfo)

        return res.json(updatedCar).end()

    }catch(err){
        console.log(err)
    }
}
//delete controller
const deleteController = async(req,res)=>{
    const{id} = req.params

    try{
        const deletedCar = await deleteCar(id)
        return res.json(deletedCar).end()
    }catch(err){
        console.log(err)
    }
}
export{
    getAllCars,
    createController,
    updateController,
    deleteController
}