import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul className="rendered-errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="rendered-error" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form className="session-form login" onSubmit={this.handleSubmit}>
          <div>
            <input
              className="session-form-input-field"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="session-form-input-field"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
          </div>
          <div>
            <input
              className="session-form-submit-button"
              type="submit"
              value="Submit"
            />
          </div>
          {this.renderErrors()}
        </form>
        <img src='https://lh3.google.com/u/0/d/1ivkXBSqV--ySA-0-KYwEv7k5hDIKKfK0=w3078-h1564-iv1' width='630' height='420' />
        <img src='https://images.pexels.com/photos/1781710/pexels-photo-1781710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' width='630' height='420' />
        <img src='https://images.pexels.com/photos/1781710/pexels-photo-1781710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' width='630' height='420' />
      </div>
    );
  }
}

export default withRouter(LoginForm);
