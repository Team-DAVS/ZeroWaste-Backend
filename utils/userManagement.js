const bcrypt = require("bcrypt")
require('dotenv').config()
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

module.exports = {hashPassword, checkPassword, createSession}