const bcrypt = require("bcrypt")
require('dotenv').config()
const db = require("../dbConnection")
const jwt = require("jsonwebtoken")

function hashPassword(password) {
    let hashedPassword = bcrypt.hashSync(password, 10, function(err, hash) {
        console.log(err,hash)
        if (err) {return false} else {return hash}
    });
    return hashedPassword ? hashedPassword : false
}

async function checkPassword(password, hash) {
    let checkHashed = await bcrypt.compare(password, hash);
    return checkHashed
}
function createSession(data) {
    let expireDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    let sessionToken = jwt.sign({...data, expires: expireDate}, process.env.JWT_SECRET)
    return {...data.data, session:sessionToken }
}

async function checkUser(token) {
    try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded.expires > new Date(Date.now())) { return {error: "Session Expired", status: 401} }
    let {data, error} = await db.from("users").select('email').eq("email", decoded.data.email).maybeSingle()
    if (error) return {error, status: 400}
    if (data.email && data.email == decoded.data.email) {
        return {error: false, isAuthenticated : true,data: decoded.data}
    } else { return {error: false, isAuthenticated : false}}
    }catch(error) {
        return {error, status: 400}
    }
}

module.exports = {hashPassword, checkPassword, createSession, checkUser}