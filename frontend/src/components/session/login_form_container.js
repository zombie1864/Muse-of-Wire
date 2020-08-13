import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    demoUser: {
      email: "DemoUser@demo.com",
      password: "123456",
      status: "student",
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    demoLogin: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
