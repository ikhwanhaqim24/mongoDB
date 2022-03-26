const bcrypt = require("bcryptjs")

module.exports = (key, saltRounds = 10) => {
    // Crypt into Hash

    return bcrypt.hashSync(key, bcrypt.genSaltSync(saltRounds))
    
}