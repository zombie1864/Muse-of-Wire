import { connect } from "react-redux";
import { signup, login, clearSessionErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => {

  
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    demoStudent: {
      email: 'DemoStudent@demo.com',
      password: '123456',
      status: 'student'
    },
    demoPerformer: {
      email: 'DemoPerformer@demo.com',
      password: '123456',
      status: 'performer'
    },
    demoMember: {
      email: 'DemoMember@demo.com',
      password: '123456',
      status: 'member'
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
