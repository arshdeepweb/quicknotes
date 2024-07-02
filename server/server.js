import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import MongoDBConnect from './src/config/db.js'
import userRouter from './src/routes/user.routes.js'

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// database connection
MongoDBConnect()

// api endpoints

app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
  res.send("Server is Ready")
})


app.listen(4000,(req,res)=>{
  console.log("Server is Running")
  console.log("http://localhost:4000")
})