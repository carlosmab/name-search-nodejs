require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

const auth = require("./middleware/auth");

const authRouter = require("./routes/auth/auth.routes");
const gseRouter = require("./routes/gse/gse.routes");
const extractNamesRouter = require('./routes/extract-names/extract-names.routes');

const app = express();

// Security middleware
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Enable file upload
app.use(fileUpload({
  createParentPath: true
}));

// Logging middleware
app.use(morgan('combined')) // default

// Data format
app.use(express.json()); 

// JWT authentication routes
app.use('/api/auth', authRouter);

// JWT google search routes
app.post("/test", auth, (req, res) => {
  res.status(200).send("Welcome!!!!")
})

app.use("/api", auth, gseRouter);
app.use("/api", auth, extractNamesRouter);


module.exports = app;

