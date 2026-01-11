const express = require("express")
const authController = require("../../../controllers/authController")
const router = express.Router()

router.use(express.json())

router.post("/users",authController)

module.exports = router