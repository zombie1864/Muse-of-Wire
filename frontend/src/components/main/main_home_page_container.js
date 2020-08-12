import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import MainHomePage from "./main_home_page";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user,
});

export default connect(mapStateToProps, { logout })(MainHomePage);