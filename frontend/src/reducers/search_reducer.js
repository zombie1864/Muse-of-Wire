import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

export default function(state = null, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};