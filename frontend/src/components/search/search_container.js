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
    errors: state.errors.search
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger 
  return {
    searchImages: (imageQuery) => dispatch(searchImages(imageQuery)),
    searchVideos: (videoQuery) => dispatch(searchVideos(videoQuery)),
    // searchUsers: (userQuery) => dispatch(searchUsers(userQuery)),
    clearSearchErrors: () => dispatch(clearSearchErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);