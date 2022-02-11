const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const colors = require("colors")

const app = express()

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})