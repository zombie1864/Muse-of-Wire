const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

require('dotenv').config();

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err));


app.get("/", (req, res) => res.send("Welcome to Muse of Wire!!"));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

// for testing
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
