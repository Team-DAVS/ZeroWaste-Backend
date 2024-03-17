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
    let {data, error} = await db.from("users").select("password").eq("email", email).maybeSingle()
    if(error) res.status(404).json(error)
    if (data) {
        let userAuth = await checkPassword(password, data.password)

    } else { res.json("No User Exists with this credentials")}
    
} )

userRouter.get("/:user", (req,res)=>{
})

userRouter.post("/", async (req,res)=>{
    let {email, password, isVendor} = req.body
    if(!email || !password || !isVendor) {
        return res.status(404).json("Credentials Missing")
    }
    let hashedPassword = await hashPassword(password)
    let {data,error} = await db.from("users").insert({email, password: hashedPassword, isVendor})
    if (error) {res.json(error) } else {res.json(data)}
    // res.json(hashedPassword)

})


module.exports = userRouter