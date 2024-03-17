const {Router} = require("express")
const {checkPassword, hashPassword} = require("../utils/bcrypt")
const db = require("../dbConnection")
const userRouter = Router()

userRouter.get("/", (req,res)=> {

    res.json("Configured")
})

userRouter.post("/auth", async (req,res)=> {
    let {email, password} = req.body
    if(!email || !password) {
        return res.status(404).json("Credentials Missing")
    }
    let {data, error} = await db.from("users").select('password').eq("email", email).maybeSingle()
    if(data)

    

} )

userRouter.get("/:user", (req,res)=>{
})

module.exports = userRouter