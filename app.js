const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const videos = require('./routes/api/videos')
const path = require('path'); 
const images = require('./routes/api/images')

require('dotenv').config();

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log(err));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use('/api/videos', videos);
app.use('/api/images', images);
// app.use('/api/images/search', images);
// app.use('/api/videos/search', videos);

// for testing
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
