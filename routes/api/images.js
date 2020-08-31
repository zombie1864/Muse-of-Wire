const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Image = require('../../models/Image');


router.post('/search', (req, res) => {
  const query = req.body.query;
  debugger
  Image.find(
    { $text: { $search: query } },
    { score: { $meta: "textScore" } })
    .sort({ score: { $meta: "textScore" } })
    .then(results => res.json({ results }))
    .catch(errors => res.json({ errors }));
});

router.post('/images', (req, res) => {
  if (req.body.currentUser.status === "student") {
    Image.find({ mature: false })
      .then(images => res.json({ images }))
      .catch(errors => res.json({ errors })); 
  } else {
    Image.find()
      .then(images => res.json({ images }))
      .catch(errors => res.json({ errors })); 
  }
}); 

router.get('/images/:id', (req, res) => {
  Image.find({ image: req.params.id })
    .then(image => res.json(image))
    .catch(err => res.status(404).json({ noImageFound: 'you are not authorized to view this content' }))
})

module.exports = router; 