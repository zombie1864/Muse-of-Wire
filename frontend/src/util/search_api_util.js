import axios from 'axios';

export const apiSearchImages = (imageQuery) => {
  debugger
  return axios.post('/api/images/search', imageQuery);
};
export const apiSearchVideos = (videoQuery) => {
  return axios.post('/api/videos/search', videoQuery);
};
// export const searchUsers = (userQuery) => {
//   return axios.get('/api/users', userQuery);
// };