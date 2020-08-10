import * as VideoAPIUtil from '../util/video_api_util'; 
export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'

const receiveAllVideos = videos => ({
        type: RECEIVE_ALL_VIDEOS,
        videos, 
    }
)

const receiveVideo = video => ({
        type: RECEIVE_VIDEO,
        video, 
    }
)

export const fetchAllVideos = () => dispatch => (
VideoAPIUtil.fetchAllVideos().then(videos => { dispatch(receiveAllVideos(videos))})    
); 

export const fetchVideo = id => dispatch => (
VideoAPIUtil.fetchVideo(id).then(video => dispatch(receiveVideo(video)))
)