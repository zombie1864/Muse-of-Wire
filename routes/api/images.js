const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../../models/Image');


router.get('/images/search', (req, res) => {
  Image.find({
    $text: { $search: req.body.query }
  })
    .then(image => res.json({ image }))
});

router.get('/images', (req, res) => {
  if (req.body.currentUser.status === "student") {
    Image.find({ mature: false })
      .then(image => res.json({ image }))
  } else {
    Image.find()
      .then(image => res.json({ image }))
  }
}); 

router.get('/images/:id', (req, res) => {
  Image.find({ image: req.params.id })
    .then(images => res.json(images))
    .catch(err => res.status(404).json({ noImageFound: 'you are not authorized to view this content' }))
})

module.exports = router; 