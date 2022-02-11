const express = require("express")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const colors = require("colors")
const PORT = process.env.PORT || 8000
const goalRoutes = require("./routes/goalRoutes")
const { urlencoded } = require("body-parser")

connectDB()

const app = express()

app.use(express.json())                   //app.uses are middlewares
app.use(urlencoded({extended: false}))

app.use("/api/goals", goalRoutes)
app.use(errorHandler)                    //overwrites default express err handler

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})