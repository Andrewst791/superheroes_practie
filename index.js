const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = 5600
const app_routes = require('./src/routes')

app.listen(port, ()=>console.log(`Server runing on port http://localhost:${port}`))

mongoose
    .connect(process.env.STRING_CONNECTION)
    .then(()=>console.log("Connection successfuly"))
    .catch(error=>console.error(`Error: ${error}`))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({msg: "Funciona"})
})
app_routes(app)