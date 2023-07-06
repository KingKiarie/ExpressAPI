import express from "express";
import{ createController, getAllCars, updateController,deleteController } from "../controller/index";

const router = express.Router();

router.get('/', getAllCars)
router.post('/create',createController)
router.patch('/update/:id',updateController)
router.delete('/delete/:id',deleteController)

export default router
