import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => {

  
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    demoUser: {
      email: 'DemoUser@demo.com',
      password: '123456',
      status: 'student'
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
