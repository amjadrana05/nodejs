const express = require('express')
const app = express()
require('dotenv').config()
require('./dbconnection')

//Body Parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//Routes
const todoRoutes = require('./routes/todos')

app.use('/todos', todoRoutes)

//Listener
app.listen(process.env.PORT, () => console.log(`Server is runing in port http://localhost:${process.env.PORT}`))

