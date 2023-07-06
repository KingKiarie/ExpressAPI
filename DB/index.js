import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    title:{type: String},
    image:{type: String},
    description:{type: String},
    mileage:{type: BigInt}
})

//variable collection for grouping items in one
const Car = mongoose.model('Car',carSchema);

//finding all cars available in the car model
const getCars =()=>{
    return Car.find();
}

//method for creating a car in the collection
const createCar = (values)=>{

    return new Car(values).save()
    .then((car)=>{car.toObject()})
}


//updating items
const updateCar = (id,values)=>{
    return Car.findByIdAndUpdate(id,values)
}

//deleting items
const deleteCar = (id)=>{
    return Car.findByIdAndDelete(id)

}
//exporting declared variables
export{
    Car,
    getCars,
    createCar,
    updateCar,
    deleteCar
}
