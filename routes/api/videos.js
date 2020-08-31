const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Video = require('../../models/Video');
// const video = require('../../seed/videoSeed')

router.post('/search', (req, res) => {
    const query = req.body.query;
    Video.find(
        { $text: { $search: query } }, 
        { score: { $meta: "textScore" } })
        .sort( { score: { $meta: "textScore"}})
        .then(videos => res.json({ videos }))
        .catch(errors => res.json({ errors }));
});

router.post('/videos', (req, res) => {
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