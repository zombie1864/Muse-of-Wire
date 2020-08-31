const express = require('express'); 
const router = express.Router(); 
const mongoose = require('mongoose'); 
const Video = require('../../models/Video');

router.post('/search', (req, res) => {
    const query = req.body.query;
    Video.find(
        { $text: { $search: query } }, 
        { score: { $meta: "textScore" } })
        .sort( { score: { $meta: "textScore"}})
        .then(results => res.json({ results }))
        .catch(errors => res.json({ errors }));
});

router.post('/videos', (req, res) => {
    if (req.body.currentUser.status === "student") {
        Video.find({ mature: false })
            .then(video => res.json({ video }))
            .catch(errors => res.json({ errors })); 
        } else {
            Video.find()
            .then(video => res.json({ video }))
            .catch(errors => res.json({ errors })); 
    }
}); 

router.get('/videos/:id', (req, res) => {
    Video.find({video: req.params.id })
        .then(videos => res.json(videos))
        .catch(err => res.status(404).json({ noVideoFound: 'you are not authorized to view this content'}))
})

module.exports = router; 