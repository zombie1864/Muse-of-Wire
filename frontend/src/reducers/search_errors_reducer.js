import { 
  RECEIVE_SEARCH_RESULTS, 
  RECEIVE_SEARCH_ERRORS 
} from "../actions/search_actions";

const _nullErrors = [];

const SearchErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    case RECEIVE_SEARCH_RESULTS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SearchErrorsReducer;