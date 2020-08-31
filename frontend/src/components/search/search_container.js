import { connect } from "react-redux";
import { 
  searchImages, 
  searchVideos, 
  // searchUsers,
  clearSearchErrors 
} from "../../actions/search_actions";
import Search from './search';

const mapStateToProps = (state) => {
  debugger 
  return {
    currentUser: state.session.user,
    errors: state.errors.search, 
    results: state.search.data.images 
    // results: state.search.data // DID NOT WORK 
    // results: state.search.results 
    // results: state.search // DID NOT WORK 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchImages: (imageQuery) => dispatch(searchImages(imageQuery)),
    searchVideos: (videoQuery) => dispatch(searchVideos(videoQuery)),
    // searchUsers: (userQuery) => dispatch(searchUsers(userQuery)),
    clearSearchErrors: () => dispatch(clearSearchErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);