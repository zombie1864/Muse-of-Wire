const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../../models/Image');


router.get('/search', (req, res) => {
  // debugger
  Image.find({
    $text: { $search: req.body.query }
  }).then(images => console.log(images))
    .then(images => res.json({ images }))
});

router.get('/images', (req, res) => {
  if (req.body.currentUser.status === "student") {
    Image.find({ mature: false })
      .then(images => res.json({ images }))
  } else {
    Image.find()
      .then(images => res.json({ images }))
  }
}); 

router.get('/images/:id', (req, res) => {
  Image.find({ image: req.params.id })
    .then(image => res.json(image))
    .catch(err => res.status(404).json({ noImageFound: 'you are not authorized to view this content' }))
})

module.exports = router; 