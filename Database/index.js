import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  title:{type: String},
  image:{type: String},
  description:{type: String}
})

const Car = mongoose.model('Car',carSchema)

//asynchronous function
const getCars=()=>{
  return Car.find()
}

export{
  Car,
  getCars
}