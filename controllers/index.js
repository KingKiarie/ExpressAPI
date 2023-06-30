import express from "express"

//importation from the list of object we created in the  database folder
import {getCars} from "../Database/index.js"

const getAllCars =async(req,res)=> {
    try {
    const allCars= await getCars()
    res.json(allCars).end()
    }catch(err){ 
    console.log(err)
  }

}


export{
  getAllCars
}