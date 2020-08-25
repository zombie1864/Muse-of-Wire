const Image = require('../models/Image');
const mongoose = require('mongoose');
const { exists } = require('../models/Image');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

const images = [
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  }),
  new Image({
    title: '',
    description: '',
    imageUrl: ''
  })
]

const stop = 0;
for (let i = 0; i < products.length; i++) {
  images[i].save((err, result) => {
    stop++;
    if (stop === images.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}