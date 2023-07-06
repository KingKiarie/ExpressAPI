import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import http from "http"
import dotenv from "dotenv/config"

//Importing from folder structure
import router from "./router/index.js"

//dotenv config
dotenv.config()

//middlewares
const app = express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

//serverConnection
const server = http.createServer(app)
server.listen(8080, ()=>{
    console.log('Server is running on port http://localhost8080')
})

//initialising a MongoUrl connection
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
.then(()=>{
    console.log('MongoDB connected')})
.catch((err)=>{
    console.log(err)
})

app.use('/',router)



