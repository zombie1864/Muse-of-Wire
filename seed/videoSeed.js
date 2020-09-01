const Video = require('../models/video') 
const mongoose = require('mongoose'); 
const db = require("../config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

const videos = [

    new Video({
        title: 'The Case for Performance Art | The Art Assignment | PBS Digital Studios', 
        description: 'Dubious of performance art? Break into a cold sweat when you realize it’s about to begin? There’s a reason. Here we present you with a brief history of performance art and attempt to sway you to its potential charms. Let us know if you buy it.', 
        videoUrl: "https://www.youtube.com/watch?v=EmMTKdUAokM", 
        runTime: 9.09, 
        mature: false 
    }),
    new Video({
        title: 'Swans For Relief', 
        description: '32 premier ballerinas from 22 dance companies in 14 countries perform Le Cygne (The Swan) variation sequentially with music by Camille Saint-Saëns, performed by cellist Wade Davis, in support of Swans for Relief. Organized by Misty Copeland and Joseph Phillips, 100% of the funds raised will be distributed to each dancer’s company’s COVID-19 relief fund, or other arts/dance-based relief fund in the event that a company is not set up to receive donations.', 
        videoUrl: 'https://www.youtube.com/watch?v=PT14o5Wq7gE', 
        runTime: 6.15, 
        mature: false 
    }),
    new Video({
        title: 'Lament | Juilliard Community Cadence', 
        description: 'Watch the ninth Community Cadence video, composed and performed on violin by Lauren Vandervelden, featuring Juilliard students and Sphinx Performance Academy at Juilliard 2020 students. The Community Cadence series amplifies Juilliard student voices as artist citizens.As we move into a new way of online learning, sharing, and collaborating with social distancing in mind, the role that the arts play in connecting us is more important than ever. We present #JuilliardThrives, to amplify our student and faculty voices as we share the art that is in our minds and hearts with the world.', 
        videoUrl: "https://www.youtube.com/watch?v=eVahCryUXw0", 
        runTime: 3.13, 
        mature: false 
    }),     
    new Video({
        title: 'The Art of NUDE BODYPAINTING part 3 - for 18+ adults only', 
        description: 'South American naked body painting masters & groovy chillout music by G. Lipold ', 
        videoUrl: "https://www.youtube.com/watch?v=0ymt_xfTn-8", 
        runTime: 9.06, 
        mature: true 
    })
];

let stop = 0; 

for ( let i = 0; i < videos.length; i++) {
    videos[ i ].save( function(err, result) {
        stop++; 
        if ( stop === videos.length ) {
            exitLoop(); 
        }
    }) 
}

function exitLoop() {
    mongoose.disconnect(); 
}

