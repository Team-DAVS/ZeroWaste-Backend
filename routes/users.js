const {Router} = require("express")

const {checkPassword, hashPassword, createSession} = require("../utils/userManagement")
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
    let {data, error} = await db.from("users").select().eq("email", email).maybeSingle()
    if(error) res.status(404).json(error)
    if (data) {
        let userAuth = await checkPassword(password, data.password)  // return object: {error: false, isCorrect: boolean}
        delete data.password
        if(!userAuth) {res.status(401).json({error: "Incorrect Credentials"}) }
        let userSession = createSession({data})
        res.json(userSession)

    } else { res.json({error:"No User Exists with this credentials"})}
    
} )

userRouter.post("/new", async (req,res)=>{
    let {email, password, isVendor} = req.body
    if(!email || !password || !isVendor) {
        return res.status(404).json("Credentials Missing")
    }
    let hashedPassword = await hashPassword(password)
    let {data,error} = await db.from("users").insert({email, password: hashedPassword, isVendor}).select('id,email,isVendor')
    if (error) {res.json(error) } else {
        let userSession = createSession(data)
        res.json(userSession)
    }

})


module.exports = userRouter