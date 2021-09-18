const express = require("express");
const mongoose = require("mongoose");
const path = require('path');


const PORT = process.env.PORT || 3030;
const routes = require('./routes');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(routes);

app.listen(PORT,() => {

    console.log(`App running on port ${PORT}!`)

});