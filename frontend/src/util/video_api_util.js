import axios from 'axios'; 

export const fetchAllVideos = () => {
    return axios.get('/api/videos')
}; 

export const fetchVideo = id => {
    return axios.get(`/api/videos/${id}`)
}; 