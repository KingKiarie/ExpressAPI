import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http"
import router from './routes/index.js'

const app = express();


app.use(cors({
  origin:"*"
}))

app.use(express.json())

const server = http.createServer(app)
server.listen(8000,()=>{
  console.log('Server is running on http://localhost8000')
})

//connecting mongodb url from mongo db site
const mongoUrl='mongodb+srv://KevinKiarie:sxTjUzIJtsla7ysC@node-lib.lpuparh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)
.then(()=>{console.log('MONGODB is connected')})
.catch((err)=>{console.log(err)})


app.use('/',router)