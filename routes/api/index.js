const express = require("express")
const router = express.Router()
const auth = require("./auth/auth.js")


router.use("/auth" , auth) // I should add the path first then the src.

module.exports = router