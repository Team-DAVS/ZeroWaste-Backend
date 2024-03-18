const {Router} = require("express")
const db = require("../dbConnection")
const wasteRouter = Router()

/*
SCHEMA
id -- auto
created_at -- auto	
image -- mandatory
author -- mandatory
isAvailable	-boolean, non nullable
status - nullable
price - nullable
boughtBy - nullable
name -- unique

*/


wasteRouter.get("/", async(req,res)=> {
    // let {pageId} = {req.}
    let {data,error} = await db.from("wasteProducts").select('*').eq('isAvailable', true).range(req.query.page ? `${req.query.page}0` : 0, req.query.page ? `${req.query.page+1}0` : 10)
    if (error) {res.status(404).json(error)}
    res.json(data)

})
wasteRouter.get("/:single", async(req,res)=> {
    let {data,error} = await db.from("wasteProducts").select('*').eq('name', req.params.single).maybeSingle()
    if (error) {res.status(404).json(error)}
    if (data) {res.json(data)} else { res.json({})}
})

wasteRouter.post("/", async(req,res)=> {
    let {image, name, isAvailable} = req.body
    let {data, error} = await db.from("wasteProducts").insert({name, image, author: req.user.id}).select()
    if (error) {res.status(404).json(error)} else {res.json(data)}
})

module.exports = wasteRouter