import { connect } from "react-redux";
import { 
  searchImages, 
  searchVideos, 
  // searchUsers,
  clearSearchErrors 
} from "../../actions/search_actions";
import Search from './search';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    errors: state.errors.search, 
    results: state.search.data.results
    // imageResults: state.search.data.images,
    // videoResults: state.search.data.videos,
    // userResults: state.search.data.users
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