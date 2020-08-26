const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Video = require('../../models/Video');
// const video = require('../../seed/videoSeed')

router.get('/videos', ( req, res ) => {
    Video.find()
    // Video.find({ 
    //     $text: { $search: req } 
    // })
        .then(video => res.json({video}))
}); 

router.get('/videos/:id', (req, res) => {
    Video.find({video: req.params.id })
        .then(videos => res.json(videos))
        .catch(err => res.status(404).json({ noVideoFound: 'you are not authorized to view this content'}))
})

module.exports = router; 