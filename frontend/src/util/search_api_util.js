import axios from 'axios';

export const searchImages = (imageQuery) => {
  return axios.get('/api/images', imageQuery);
};
export const searchVideos = (videoQuery) => {
  return axios.get('/api/videos', videoQuery);
};
export const searchUsers = (userQuery) => {
  return axios.get('/api/users', userQuery);
};