const Video = require('../models/video') 
const mongoose = require('mongoose'); 

// export const seedVideo = () => {

    export const videoArr = {

        video: {
            title: 'song', 
            description: 'music', 
            videoUrl: 'https://www.youtube.com/watch?v=rKfDf3KZn3M', 
            imgUrl: 'https://vaporwavebomb.tumblr.com/image/623062623236308992', 
            runTime: 6.04, 
            mature: false 
        },
        video: {
            title: 'song', 
            description: 'music', 
            videoUrl: 'https://www.youtube.com/watch?v=rKfDf3KZn3M', 
            imgUrl: 'https://vaporwavebomb.tumblr.com/image/623062623236308992', 
            runTime: 6.04, 
            mature: false 
        },
        video: {
            title: 'song', 
            description: 'music', 
            videoUrl: 'https://www.youtube.com/watch?v=rKfDf3KZn3M', 
            imgUrl: 'https://vaporwavebomb.tumblr.com/image/623062623236308992', 
            runTime: 6.04, 
            mature: false 
        }
    }
    
    
    
//     const stop = 0; 
    
//     for ( const i = 0; i < videos.length; i++) {
//         video[ i ].save( function() {
//             stop++; 
//             if ( stop === 2 ) {
//                 exitLoop(); 
//             }
//         }) 
//     }
    
//     function exitLoop() {
//         mongoose.disconnect(); 
//     }

// }
