import axios from 'axios';

export const searchImages = (imageSearchData) => {
  return axios.get('/api/images', imageSearchData);
};
export const searchVideos = (videoSearchData) => {
  return axios.get('/api/videos', videoSearchData);
};
export const searchUsers = (userSearchData) => {
  return axios.get('/api/users', userSearchData);
};