import express from 'express'

const app = express()

app.get("/",(req,res)=>{
  res.send("Server is Ready")
})

app.listen(4000,(req,res)=>{
  console.log("Server is Running")
  console.log("http://localhost:4000")
})