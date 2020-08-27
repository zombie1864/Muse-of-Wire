import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

export default function(state, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
};