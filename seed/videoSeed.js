const Video = require('../models/video') 
const mongoose = require('mongoose'); 


const videos = [

    new Video({
        title: 'song', 
        description: 'music', 
        videoUrl: "https://www.youtube.com/watch?v=EmMTKdUAokM", 
        runTime: 6.04, 
        mature: false 
    }),
    new Video({
        title: 'song', 
        description: 'music', 
        videoUrl: 'https://www.youtube.com/watch?v=PT14o5Wq7gE', 
        runTime: 6.04, 
        mature: false 
    }),
    new Video({
        title: 'song', 
        description: 'music', 
        videoUrl: "https://www.youtube.com/watch?v=eVahCryUXw0", 
        runTime: 6.04, 
        mature: false 
    }),     
    new Video({
        title: 'song', 
        description: 'music', 
        videoUrl: "https://www.youtube.com/watch?v=0ymt_xfTn-8", 
        runTime: 6.04, 
        mature: false 
    })
];



const stop = 0; 

for ( let i = 0; i < videos.length; i++) {
    video[ i ].save( function(err, result) {
        stop++; 
        if ( stop === videos.length ) {
            exitLoop(); 
        }
    }) 
}

function exitLoop() {
    mongoose.disconnect(); 
}

