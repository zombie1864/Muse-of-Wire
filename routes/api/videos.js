const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Video = require('../../models/Video');
// const video = require('../../seed/videoSeed')

router.get('/videos/search', ( req, res ) => {
    Video.find({ 
        $text: { $search: req.body.query } 
    })
        .then(video => res.json({video}))
}); 

router.get('/videos', (req, res) => {
    if (req.body.currentUser.status === "student") {
        Video.find({ mature: false })
            .then(video => res.json({ video }))
    } else {
        Video.find()
            .then(video => res.json({ video }))
    }
}); 

router.get('/videos/:id', (req, res) => {
    Video.find({video: req.params.id })
        .then(videos => res.json(videos))
        .catch(err => res.status(404).json({ noVideoFound: 'you are not authorized to view this content'}))
})

module.exports = router; 