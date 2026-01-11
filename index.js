const express = require("express")
const route = require("./routes")
const dbConnector = require("./databases/dbConnector")
const app = express()

app.use(express.json())


app.get("/",(req , res)=>{
    res.send("dfuig")
})

dbConnector()

app.use(route)


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})