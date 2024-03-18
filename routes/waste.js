const {Router} = require("express")
const db = require("../dbConnection")
const {checkUser} = require("../utils/userManagement")
const wasteRouter = Router()


wasteRouter.use(async (req,res,next)=> {
    let {authorization} = req.headers
    if(!authorization) { res.status(401).json("Missing Authorization in Header")}
    let checkAuth = await checkUser(authorization)
    console.log(checkAuth)
    if (!checkAuth.error && checkAuth.isAuthenticated) { next() } else { res.json("Incorrect/Expired Session Token in Headers")}
})

wasteRouter.get("/", (req,res)=> {
    res.json("Thanks")

})

module.exports = wasteRouter