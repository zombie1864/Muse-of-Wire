const mongoose = require('mongoose'); 
const schema = mongoose.Schema; 

const VideoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true 
    }, 
    runtime: {
        type: Number, 
        required: true 
    }, 
    description: {
        type: String, 
        required: true 
    }, 
    video_url: {
        type: String, 
        required: true 
    }, 
    image_url: {
        type: String, 
        required: true 
    }, 
    mature: {
        type: Boolean, 
        required: true 
    }
}); 

module.exports = Video = mongoose.model('Video', VideoSchema); 