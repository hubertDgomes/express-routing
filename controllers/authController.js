const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation");



function    authController(req, res) {
    const { name, email, password } = req.body

    if (!emailValidation(email)) {
        return res.send("Email is missing.")
    }

    const user = userSchema({
        name,
        email,
        password
    })
    user.save()
    res.json(user)
}

module.exports = authController