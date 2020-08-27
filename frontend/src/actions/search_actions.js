import * as SearchAPIUtil from '../util/search_api_util';
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const receiveSearchErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

export const searchImages = imageQuery => dispatch => (
  SearchAPIUtil.searchImages(imageQuery)
  .then(searchResults => (
    dispatch(receiveSearchResults(searchResults))
  ), err => (
    dispatch(receiveSearchErrors(err.response.data))
  ))
);

export const searchVideos = videoQuery => dispatch => (
  SearchAPIUtil.searchVideos(videoQuery)
  .then(searchResults => (
    dispatch(receiveSearchResults(searchResults))
  ), err => (
    dispatch(receiveSearchErrors(err.response.data))
  ))
);

export const searchUsers = userQuery => dispatch => (
  SearchAPIUtil.searchUsers(userQuery)
  .then(searchResults => (
    dispatch(receiveSearchResults(searchResults))
  ), err => (
    dispatch(receiveSearchErrors(err.response.data))
  ))
);
