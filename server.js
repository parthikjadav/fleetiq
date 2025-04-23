require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const connectDB = require('./db');
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet())
connectDB()

app.use(morgan("dev"))

app.get('/', (req, res) => {
    res.status(200).json({'Hello World!': 'Welcome to the API'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
