const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 

const Video = require('../../models/Video');

router.get('/', ( req, res ) => {
    Video.find()
        .then(videos => res.json(videos))
}); 

router.get('/videos/:id', (req, res) => {
    Video.find({video: req.params.id })
        .then(videos => res.json(videos))
        .catch(err => res.status(404).json({ noVideoFound: 'you are not authorized to view this content'}))
})

moduke.exports = router 