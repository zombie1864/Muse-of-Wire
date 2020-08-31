import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const defaultState = {
  data : {
    // images: [], 
    // videos: []
    results: []
  }
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};