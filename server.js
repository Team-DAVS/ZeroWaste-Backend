const express = require("express")
require('dotenv').config()
const db = require("./dbConnection")
const userRouter = require("./routes/users")
const app = express()

app.use(express.json())

app.get("/", (req,res)=> {res.json("Welcome to ZeroWaste")})

app.use("/users",userRouter)

app.get("/waste-products", async (req,res)=> { 
// const { data, error } = await db.from('countries').select()
})

app.listen(3000 || process.env.PORT, ()=>{
    console.log("Server Started!")
})