const express = require("express")
const dotenv = require('dotenv')
// helps us to create global variables for ports and urls
const colors = require('colors')
const morgan = require("morgan")
const connectDB = require('./config/db.js')

dotenv.config({path:'./config/config.env'})

connectDB()

const routes = require("./Routes/transactions.js")

const app = express()
app.use(express.json())

app.use("/api/v1/transactions",routes)

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))