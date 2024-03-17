const bcrypt = require("bcrypt")

async function hashPassword(password) {
    let hashedPassword = await bcrypt.hash(password, 10, function(err, hash) {
        if (err) { return false} else {return hash}
    });
    return hashedPassword ? hashedPassword : false
}

async function checkPassword(password, hash) {
    let checkHashed = await bcrypt.compare(password, hash, function(err, result) {
        if (err) { return {error: true, result: false}} else {return {error: false, result: result}}
    });
    return checkHashed
}

module.exports = {hashPassword, checkPassword}