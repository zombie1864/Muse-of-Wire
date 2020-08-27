const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../../models/Image');


router.get('/images', (req, res) => {
  Image.find({
    $text: { $search: req }
  })
    .then(image => res.json({ image }))
});

router.get('/images/:id', (req, res) => {
  Image.find({ image: req.params.id })
    .then(images => res.json(images))
    .catch(err => res.status(404).json({ noImageFound: 'you are not authorized to view this content' }))
})

module.exports = router; 