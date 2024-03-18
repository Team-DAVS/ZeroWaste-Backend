const express = require("express")
require('dotenv').config()
const db = require("./dbConnection")
const userRouter = require("./routes/users")
const wasteRouter = require("./routes/waste")
const app = express()

app.use(express.json())

app.get("/", (req,res)=> {res.json("Welcome to ZeroWaste")})

app.use("/users",userRouter)
app.use("/waste", wasteRouter)

app.listen(3000 || process.env.PORT, ()=>{
    console.log("Server Started!")
})