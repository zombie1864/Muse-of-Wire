import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
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
    login: (user) => dispatch(login(user)),
    demoLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
