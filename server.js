const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3030;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });


app.listen(PORT,() => {

    console.log(`App running on port ${PORT}!`)

});