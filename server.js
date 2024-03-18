const express = require("express")
require('dotenv').config()
const db = require("./dbConnection")
const {checkUser} = require("./utils/userManagement")
const userRouter = require("./routes/users")
const wasteRouter = require("./routes/waste")
const app = express()

app.use(express.json())

app.get("/", (req,res)=> {res.json("Welcome to ZeroWaste")})

app.use("/users",userRouter)

app.use(async (req,res,next) => {
    let {authorization} = req.headers
    if(!authorization) { res.status(401).json("Missing Authorization in Header")}
    let checkAuth = await checkUser(authorization)
    if (!checkAuth.error && checkAuth.isAuthenticated) { req.user = checkAuth.data
        next()
     } else { res.json("Incorrect/Expired Session Token in Headers")}
})

app.use("/waste", wasteRouter)

app.listen(3000 || process.env.PORT, ()=>{
    console.log("Server Started!")
})